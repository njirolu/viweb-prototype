import { useCallback, useEffect, useRef, useState } from 'react';

import type { WebContainer, WebContainerProcess } from '@webcontainer/api';
import type { FitAddon } from '@xterm/addon-fit';
import type { Terminal } from 'xterm';

import { basename, createEditorInstance, detectLanguage, monaco } from '../services/editor';
import { createTerminalInstance } from '../services/terminal';
import {
  bootWebContainer,
  getTerminalSize,
  runAndWait,
  streamProcessOutput,
  type TerminalDimensions,
} from '../services/webcontainer';
import type { FileTreeNode, PanelName } from '../types';
import { projectFiles } from '../generated-files';

const EXCLUDED_NAMES = new Set(['.git', 'node_modules']);

type RuntimeState = {
  webcontainer?: WebContainer;
  devProcess?: WebContainerProcess;
  shellProcess?: WebContainerProcess;
  shellInputWriter?: WritableStreamDefaultWriter<string>;
  editor?: monaco.editor.IStandaloneCodeEditor;
  emptyModel?: monaco.editor.ITextModel;
  modelByPath: Map<string, monaco.editor.ITextModel>;
  modelChangeDisposerByPath: Map<string, monaco.IDisposable>;
  lastSavedByPath: Map<string, string>;
  terminal?: Terminal;
  fitAddon?: FitAddon;
  terminalDispose?: () => void;
};

type FsDirent = {
  name: string;
  isDirectory: () => boolean;
  isFile: () => boolean;
};

function toPath(parentPath: string, name: string) {
  if (parentPath === '.') {
    return name;
  }

  return `${parentPath}/${name}`;
}

function hasProjectFiles() {
  return Boolean(projectFiles && typeof projectFiles === 'object' && Object.keys(projectFiles).length > 0);
}

export function useRunnerState() {
  const [status, setStatus] = useState('Initializing...');
  const [compatibility, setCompatibility] = useState('');
  const [mobilePanel, setMobilePanel] = useState<PanelName>('editor');
  const [fileTreeData, setFileTreeData] = useState<FileTreeNode[]>([]);
  const [expandedDirs, setExpandedDirs] = useState<Set<string>>(() => new Set(['.']));
  const [selectedPath, setSelectedPath] = useState<string | undefined>(undefined);
  const [openTabs, setOpenTabs] = useState<string[]>([]);
  const [dirtyPaths, setDirtyPaths] = useState<Set<string>>(() => new Set());
  const [activePath, setActivePath] = useState<string | undefined>(undefined);
  const [previewUrl, setPreviewUrl] = useState('');
  const [isRestarting, setIsRestarting] = useState(false);

  const editorReadyRef = useRef(false);
  const terminalReadyRef = useRef(false);
  const bootstrapStartedRef = useRef(false);

  const editorContainerRef = useRef<HTMLDivElement | null>(null);
  const terminalContainerRef = useRef<HTMLDivElement | null>(null);

  const runtimeRef = useRef<RuntimeState>({
    modelByPath: new Map(),
    modelChangeDisposerByPath: new Map(),
    lastSavedByPath: new Map(),
  });

  const writeTerminal = useCallback((message: string) => {
    const terminal = runtimeRef.current.terminal;
    if (terminal) {
      terminal.write(message);
    }
  }, []);

  const writeTerminalLine = useCallback(
    (message: string) => {
      writeTerminal(`${message}\r\n`);
    },
    [writeTerminal]
  );

  const getTerminalDimensions = useCallback((): TerminalDimensions => {
    return getTerminalSize(runtimeRef.current.terminal ?? null);
  }, []);

  const resizeTerminalProcesses = useCallback(() => {
    const dimensions = getTerminalDimensions();

    if (runtimeRef.current.shellProcess) {
      try {
        runtimeRef.current.shellProcess.resize(dimensions);
      } catch (_error) {
        // no-op if process is already closed
      }
    }

    if (runtimeRef.current.devProcess) {
      try {
        runtimeRef.current.devProcess.resize(dimensions);
      } catch (_error) {
        // no-op if process is already closed
      }
    }
  }, [getTerminalDimensions]);

  const refreshEditorModel = useCallback(() => {
    const runtime = runtimeRef.current;
    if (!runtime.editor || !runtime.emptyModel) {
      return;
    }

    if (!activePath) {
      runtime.editor.setModel(runtime.emptyModel);
      runtime.editor.updateOptions({ readOnly: true });
      return;
    }

    const model = runtime.modelByPath.get(activePath);
    if (!model) {
      runtime.editor.setModel(runtime.emptyModel);
      runtime.editor.updateOptions({ readOnly: true });
      return;
    }

    runtime.editor.updateOptions({ readOnly: false });
    runtime.editor.setModel(model);
    runtime.editor.focus();
  }, [activePath]);

  const markDirtyState = useCallback((filePath: string) => {
    const runtime = runtimeRef.current;
    const model = runtime.modelByPath.get(filePath);

    if (!model) {
      return;
    }

    const currentValue = model.getValue();
    const lastSaved = runtime.lastSavedByPath.get(filePath);

    setDirtyPaths((previous) => {
      const next = new Set(previous);
      if (currentValue !== lastSaved) {
        next.add(filePath);
      } else {
        next.delete(filePath);
      }
      return next;
    });
  }, []);

  const setActiveFilePath = useCallback((filePath: string | undefined) => {
    setActivePath(filePath);
    setSelectedPath(filePath);
  }, []);

  const saveActiveFile = useCallback(async () => {
    const runtime = runtimeRef.current;
    if (!runtime.webcontainer) {
      setStatus('WebContainer is not ready yet.');
      return;
    }

    if (!activePath) {
      setStatus('No active file to save.');
      return;
    }

    const model = runtime.modelByPath.get(activePath);
    if (!model) {
      setStatus('Active model is unavailable.');
      return;
    }

    const contents = model.getValue();
    await runtime.webcontainer.fs.writeFile(activePath, contents, 'utf-8');

    runtime.lastSavedByPath.set(activePath, contents);
    setDirtyPaths((previous) => {
      const next = new Set(previous);
      next.delete(activePath);
      return next;
    });
    setStatus(`Saved ${activePath}`);
  }, [activePath]);

  const saveActiveFileRef = useRef(saveActiveFile);
  saveActiveFileRef.current = saveActiveFile;

  const closeTab = useCallback(
    (filePath: string) => {
      const currentIndex = openTabs.indexOf(filePath);
      if (currentIndex < 0) {
        return;
      }

      const nextTabs = openTabs.filter((tabPath) => tabPath !== filePath);
      setOpenTabs(nextTabs);

      if (activePath === filePath) {
        const nextPath = nextTabs[currentIndex] || nextTabs[currentIndex - 1];
        setActiveFilePath(nextPath);
      }
    },
    [activePath, openTabs, setActiveFilePath]
  );

  const openFile = useCallback(
    async (filePath: string) => {
      const runtime = runtimeRef.current;
      if (!runtime.webcontainer) {
        throw new Error('WebContainer is not initialized.');
      }

      let model = runtime.modelByPath.get(filePath);

      if (!model) {
        const contents = await runtime.webcontainer.fs.readFile(filePath, 'utf-8');
        const uri = monaco.Uri.parse(`file:///${filePath}`);

        model = monaco.editor.createModel(String(contents), detectLanguage(filePath), uri);
        runtime.modelByPath.set(filePath, model);
        runtime.lastSavedByPath.set(filePath, String(contents));

        const changeDisposable = model.onDidChangeContent(() => {
          markDirtyState(filePath);
        });
        runtime.modelChangeDisposerByPath.set(filePath, changeDisposable);
      }

      setOpenTabs((previous) => {
        if (previous.includes(filePath)) {
          return previous;
        }

        return [...previous, filePath];
      });

      setActiveFilePath(filePath);
    },
    [markDirtyState, setActiveFilePath]
  );

  const readDirectoryTree = useCallback(async (dirPath: string): Promise<FileTreeNode[]> => {
    const runtime = runtimeRef.current;
    if (!runtime.webcontainer) {
      return [];
    }

    const entries = (await runtime.webcontainer.fs.readdir(dirPath, {
      withFileTypes: true,
    })) as FsDirent[];

    entries.sort((left, right) => {
      if (left.isDirectory() && !right.isDirectory()) {
        return -1;
      }

      if (!left.isDirectory() && right.isDirectory()) {
        return 1;
      }

      return left.name.localeCompare(right.name);
    });

    const nodes: FileTreeNode[] = [];

    for (const entry of entries) {
      if (EXCLUDED_NAMES.has(entry.name)) {
        continue;
      }

      const nodePath = toPath(dirPath, entry.name);

      if (entry.isDirectory()) {
        const children = await readDirectoryTree(nodePath);
        nodes.push({
          kind: 'directory',
          name: entry.name,
          path: nodePath,
          children,
        });
        continue;
      }

      if (entry.isFile()) {
        nodes.push({
          kind: 'file',
          name: entry.name,
          path: nodePath,
        });
      }
    }

    return nodes;
  }, []);

  const refreshFileTree = useCallback(async () => {
    const tree = await readDirectoryTree('.');
    setFileTreeData(tree);
  }, [readDirectoryTree]);

  const startDevServer = useCallback(async () => {
    const runtime = runtimeRef.current;
    if (!runtime.webcontainer) {
      throw new Error('WebContainer is not initialized.');
    }

    if (runtime.devProcess) {
      runtime.devProcess.kill();
      runtime.devProcess = undefined;
    }

    setStatus('Starting dev server...');

    const process = await runtime.webcontainer.spawn('npm', ['run', 'dev:container'], {
      terminal: getTerminalDimensions(),
    });

    runtime.devProcess = process;

    void streamProcessOutput(process, 'npm run dev:container', writeTerminal).catch((error: unknown) => {
      const message = error instanceof Error ? error.message : 'unknown stream error';
      writeTerminalLine(`[runner] dev stream error: ${message}`);
    });

    setStatus('Waiting for preview URL...');
  }, [getTerminalDimensions, writeTerminal, writeTerminalLine]);

  const startShell = useCallback(async () => {
    const runtime = runtimeRef.current;
    if (!runtime.webcontainer) {
      throw new Error('WebContainer is not initialized.');
    }

    const shellCandidates = ['jsh', 'bash', 'sh'];

    for (const command of shellCandidates) {
      try {
        const process = await runtime.webcontainer.spawn(command, [], {
          terminal: getTerminalDimensions(),
        });

        runtime.shellProcess = process;
        runtime.shellInputWriter = process.input.getWriter();

        void streamProcessOutput(process, command, writeTerminal).catch((error: unknown) => {
          const message = error instanceof Error ? error.message : 'unknown stream error';
          writeTerminalLine(`[runner] shell stream error: ${message}`);
        });

        void process.exit.then((code) => {
          writeTerminalLine(`[runner] shell exited (${command}) with code ${code}`);
        });

        if (command !== 'jsh') {
          writeTerminalLine(`[runner] interactive shell fallback active: ${command}`);
        } else {
          writeTerminalLine('[runner] interactive shell ready (jsh)');
        }

        return;
      } catch (_error) {
        // Try next shell command.
      }
    }

    writeTerminalLine('[runner] interactive shell unavailable. Running fallback command mode.');

    try {
      const fallback = await runtime.webcontainer.spawn('npm', ['run', '--help'], {
        terminal: getTerminalDimensions(),
      });

      void streamProcessOutput(fallback, 'npm run --help', writeTerminal).catch((error: unknown) => {
        const message = error instanceof Error ? error.message : 'unknown stream error';
        writeTerminalLine(`[runner] fallback stream error: ${message}`);
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'unknown fallback error';
      writeTerminalLine(`[runner] fallback command failed: ${message}`);
    }
  }, [getTerminalDimensions, writeTerminal, writeTerminalLine]);

  const findFirstFile = useCallback((nodes: FileTreeNode[]): string | undefined => {
    for (const node of nodes) {
      if (node.kind === 'file') {
        return node.path;
      }

      const nested = findFirstFile(node.children);
      if (nested) {
        return nested;
      }
    }

    return undefined;
  }, []);

  const restartDevServer = useCallback(async () => {
    if (!runtimeRef.current.webcontainer) {
      return;
    }

    setIsRestarting(true);
    try {
      writeTerminalLine('[runner] restarting npm run dev:container...');
      await startDevServer();
      setStatus('Dev server restarted. Waiting for preview URL...');
    } catch (error) {
      const message = error instanceof Error ? error.message : 'unknown restart error';
      setStatus('Failed to restart dev server.');
      writeTerminalLine(`[runner] restart failed: ${message}`);
    } finally {
      setIsRestarting(false);
    }
  }, [startDevServer, writeTerminalLine]);

  const checkCompatibility = useCallback(() => {
    if (!window.crossOriginIsolated) {
      setCompatibility(
        'This page is not cross-origin isolated. Open via localhost/HTTPS and ensure COOP/COEP headers are present.'
      );
      return false;
    }

    if (typeof SharedArrayBuffer === 'undefined') {
      setCompatibility('SharedArrayBuffer is unavailable in this browser/environment.');
      return false;
    }

    setCompatibility('');
    return true;
  }, []);

  const bootstrap = useCallback(async () => {
    if (!checkCompatibility()) {
      setStatus('WebContainer cannot start in this browser context. Fix compatibility requirements and retry.');
      return;
    }

    try {
      setStatus('Booting WebContainer runtime...');
      const webcontainer = await bootWebContainer();
      runtimeRef.current.webcontainer = webcontainer;

      webcontainer.on('server-ready', (port: number, url: string) => {
        if (port === 4173) {
          setPreviewUrl(url);
          setStatus('Preview is ready.');
        }
      });

      if (!hasProjectFiles()) {
        throw new Error('Generated project file tree is invalid. Rebuild with npm run build:runner.');
      }

      setStatus('Mounting project files...');
      await webcontainer.mount(projectFiles);

      setStatus('Loading file tree...');
      const tree = await readDirectoryTree('.');
      setFileTreeData(tree);

      setStatus('Installing dependencies...');
      await runAndWait(webcontainer, 'npm', ['install'], getTerminalDimensions(), writeTerminal);

      await startDevServer();
      await startShell();

      const defaultPath = findFirstFile(tree);
      if (defaultPath) {
        await openFile(defaultPath);
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'unknown bootstrap error';
      setStatus('Runner failed to start. Check terminal logs and browser requirements, then retry.');
      writeTerminalLine(`[runner] ${message}`);
    }
  }, [
    checkCompatibility,
    findFirstFile,
    getTerminalDimensions,
    openFile,
    readDirectoryTree,
    startDevServer,
    startShell,
    writeTerminal,
    writeTerminalLine,
  ]);

  useEffect(() => {
    const container = editorContainerRef.current;
    if (!container || editorReadyRef.current) {
      return;
    }

    const runtime = runtimeRef.current;
    const { editor, emptyModel } = createEditorInstance(container, () => {
      void saveActiveFileRef.current().catch((error: unknown) => {
        const message = error instanceof Error ? error.message : 'unknown save error';
        setStatus(`Save failed: ${message}`);
        writeTerminalLine(`[runner] save failed: ${message}`);
      });
    });

    runtime.editor = editor;
    runtime.emptyModel = emptyModel;
    editorReadyRef.current = true;

    return () => {
      runtime.editor?.dispose();
      runtime.emptyModel?.dispose();
      runtime.editor = undefined;
      runtime.emptyModel = undefined;
      editorReadyRef.current = false;
    };
  }, [writeTerminalLine]);

  useEffect(() => {
    const container = terminalContainerRef.current;
    if (!container || terminalReadyRef.current) {
      return;
    }

    const runtime = runtimeRef.current;
    const terminalInstance = createTerminalInstance(container, (data) => {
      if (runtime.shellInputWriter) {
        void runtime.shellInputWriter.write(data).catch((error: unknown) => {
          const message = error instanceof Error ? error.message : 'unknown input error';
          writeTerminalLine(`[runner] shell input error: ${message}`);
        });
      }
    });

    runtime.terminal = terminalInstance.terminal;
    runtime.fitAddon = terminalInstance.fitAddon;
    runtime.terminalDispose = terminalInstance.dispose;
    terminalReadyRef.current = true;

    writeTerminalLine('[runner] terminal ready');

    const onWindowResize = () => {
      runtime.fitAddon?.fit();
      resizeTerminalProcesses();
    };

    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('resize', onWindowResize);
      runtime.terminalDispose?.();
      runtime.terminal = undefined;
      runtime.fitAddon = undefined;
      runtime.terminalDispose = undefined;
      terminalReadyRef.current = false;
    };
  }, [resizeTerminalProcesses, writeTerminalLine]);

  useEffect(() => {
    if (!editorReadyRef.current || !terminalReadyRef.current || bootstrapStartedRef.current) {
      return;
    }

    bootstrapStartedRef.current = true;
    void bootstrap();
  }, [bootstrap]);

  useEffect(() => {
    refreshEditorModel();
  }, [refreshEditorModel]);

  useEffect(() => {
    if (mobilePanel !== 'terminal') {
      return;
    }

    runtimeRef.current.fitAddon?.fit();
    resizeTerminalProcesses();
  }, [mobilePanel, resizeTerminalProcesses]);

  useEffect(() => {
    return () => {
      const runtime = runtimeRef.current;
      runtime.devProcess?.kill();
      runtime.shellProcess?.kill();
      runtime.shellInputWriter?.releaseLock();

      for (const disposer of runtime.modelChangeDisposerByPath.values()) {
        disposer.dispose();
      }

      for (const model of runtime.modelByPath.values()) {
        model.dispose();
      }

      runtime.modelByPath.clear();
      runtime.modelChangeDisposerByPath.clear();
      runtime.lastSavedByPath.clear();
    };
  }, []);

  const selectFileFromTree = useCallback(
    (path: string) => {
      setSelectedPath(path);
      void openFile(path).catch((error: unknown) => {
        const message = error instanceof Error ? error.message : 'unknown open error';
        setStatus(`Failed to open ${path}`);
        writeTerminalLine(`[runner] open failed for ${path}: ${message}`);
      });
    },
    [openFile, writeTerminalLine]
  );

  const toggleDirectory = useCallback((path: string) => {
    setExpandedDirs((previous) => {
      const next = new Set(previous);
      if (next.has(path)) {
        next.delete(path);
      } else {
        next.add(path);
      }
      return next;
    });
  }, []);

  const handleMobilePanelChange = useCallback(
    (panel: PanelName) => {
      setMobilePanel(panel);
      if (panel === 'terminal') {
        requestAnimationFrame(() => {
          runtimeRef.current.fitAddon?.fit();
          resizeTerminalProcesses();
        });
      }
    },
    [resizeTerminalProcesses]
  );

  return {
    status,
    compatibility,
    previewUrl,
    mobilePanel,
    fileTreeData,
    expandedDirs,
    selectedPath,
    openTabs,
    activePath,
    dirtyPaths,
    isRestarting,
    editorContainerRef,
    terminalContainerRef,
    basename,
    refreshFileTree,
    saveActiveFile,
    restartDevServer,
    handleMobilePanelChange,
    selectFileFromTree,
    toggleDirectory,
    closeTab,
    setActiveFilePath,
  };
}
