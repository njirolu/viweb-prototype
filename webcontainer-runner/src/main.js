import { WebContainer } from '@webcontainer/api';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker&inline';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker&inline';
import 'monaco-editor/esm/vs/basic-languages/css/css.contribution';
import 'monaco-editor/esm/vs/basic-languages/html/html.contribution';
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution';
import 'monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution';
import 'monaco-editor/esm/vs/basic-languages/markdown/markdown.contribution';
import 'monaco-editor/esm/vs/basic-languages/yaml/yaml.contribution';
import 'monaco-editor/esm/vs/language/json/monaco.contribution';
import { Terminal } from 'xterm';
import { FitAddon } from '@xterm/addon-fit';
import { WebLinksAddon } from '@xterm/addon-web-links';
import 'xterm/css/xterm.css';
import { projectFiles } from './generated-files.js';
import './styles.css';

globalThis.MonacoEnvironment = {
  getWorker(_workerId, label) {
    if (label === 'json') {
      return new jsonWorker();
    }

    return new editorWorker();
  },
};

const EXCLUDED_NAMES = new Set(['.git', 'node_modules']);

const dom = {
  status: document.getElementById('status'),
  compatibility: document.getElementById('compatibility'),
  preview: document.getElementById('preview'),
  restartBtn: document.getElementById('restartBtn'),
  saveBtn: document.getElementById('saveBtn'),
  mobileNav: document.getElementById('mobileNav'),
  fileTree: document.getElementById('fileTree'),
  editorTabs: document.getElementById('editorTabs'),
  editorContainer: document.getElementById('editorContainer'),
  terminalContainer: document.getElementById('terminal'),
};

const state = {
  webcontainer: undefined,
  devProcess: undefined,
  shellProcess: undefined,
  shellInputWriter: undefined,
  editor: undefined,
  emptyModel: undefined,
  modelByPath: new Map(),
  modelChangeDisposerByPath: new Map(),
  lastSavedByPath: new Map(),
  openTabs: [],
  dirtyPaths: new Set(),
  activePath: undefined,
  selectedPath: undefined,
  fileTreeData: [],
  expandedDirs: new Set(['.']),
  terminal: undefined,
  fitAddon: undefined,
  shellCommand: undefined,
};

function setStatus(message) {
  dom.status.textContent = message;
}

function setCompatibility(message = '') {
  dom.compatibility.textContent = message;
}

function writeTerminal(message) {
  if (!state.terminal) {
    return;
  }

  state.terminal.write(message);
}

function writeTerminalLine(message) {
  if (!state.terminal) {
    return;
  }

  state.terminal.writeln(message);
}

function toPath(parentPath, name) {
  if (parentPath === '.') {
    return name;
  }

  return `${parentPath}/${name}`;
}

function basename(filePath) {
  const parts = filePath.split('/');
  return parts[parts.length - 1] || filePath;
}

function detectLanguage(filePath) {
  if (filePath.endsWith('.js') || filePath.endsWith('.cjs') || filePath.endsWith('.mjs')) {
    return 'javascript';
  }

  if (filePath.endsWith('.ts') || filePath.endsWith('.tsx')) {
    return 'typescript';
  }

  if (filePath.endsWith('.json')) {
    return 'json';
  }

  if (filePath.endsWith('.html')) {
    return 'html';
  }

  if (filePath.endsWith('.css')) {
    return 'css';
  }

  if (filePath.endsWith('.md')) {
    return 'markdown';
  }

  if (filePath.endsWith('.yml') || filePath.endsWith('.yaml')) {
    return 'yaml';
  }

  return 'plaintext';
}

function getTerminalSize() {
  const cols = Math.max(state.terminal?.cols || 80, 20);
  const rows = Math.max(state.terminal?.rows || 24, 8);

  return { cols, rows };
}

function resizeTerminalProcesses() {
  const dimensions = getTerminalSize();

  if (state.shellProcess) {
    try {
      state.shellProcess.resize(dimensions);
    } catch (_error) {
      // no-op if process already ended
    }
  }
}

async function streamProcessOutput(process, label) {
  const reader = process.output.getReader();

  while (true) {
    const { value, done } = await reader.read();
    if (done) {
      break;
    }

    if (value) {
      writeTerminal(`[${label}] ${value}`);
    }
  }
}

async function runAndWait(command, args, options = {}) {
  const process = await state.webcontainer.spawn(command, args, {
    ...options,
    terminal: getTerminalSize(),
  });

  streamProcessOutput(process, `${command} ${args.join(' ')}`).catch((error) => {
    writeTerminalLine(`[runner] stream error: ${error.message}`);
  });

  const exitCode = await process.exit;
  if (exitCode !== 0) {
    throw new Error(`${command} ${args.join(' ')} failed with exit code ${exitCode}.`);
  }
}

function setMobilePanel(panel) {
  document.body.dataset.mobilePanel = panel;

  const buttons = dom.mobileNav.querySelectorAll('.mobile-tab');
  for (const button of buttons) {
    button.classList.toggle('active', button.dataset.panel === panel);
  }

  if (panel === 'terminal' && state.fitAddon) {
    requestAnimationFrame(() => {
      state.fitAddon.fit();
      resizeTerminalProcesses();
    });
  }
}

function initMobileNav() {
  const buttons = dom.mobileNav.querySelectorAll('.mobile-tab');
  for (const button of buttons) {
    button.addEventListener('click', () => {
      setMobilePanel(button.dataset.panel);
    });
  }
}

function initTerminal() {
  const terminal = new Terminal({
    convertEol: true,
    cursorBlink: true,
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
    fontSize: 12,
    theme: {
      background: '#1e1e1e',
      foreground: '#d4d4d4',
      cursor: '#d4d4d4',
      black: '#1e1e1e',
      brightBlack: '#666666',
      blue: '#569cd6',
      brightBlue: '#4fc1ff',
      cyan: '#4ec9b0',
      brightCyan: '#4ec9b0',
      green: '#6a9955',
      brightGreen: '#b5cea8',
      magenta: '#c586c0',
      brightMagenta: '#d7ba7d',
      red: '#f14c4c',
      brightRed: '#d16969',
      white: '#d4d4d4',
      brightWhite: '#ffffff',
      yellow: '#dcdcaa',
      brightYellow: '#ffd700',
    },
  });

  const fitAddon = new FitAddon();
  const webLinksAddon = new WebLinksAddon();
  terminal.loadAddon(fitAddon);
  terminal.loadAddon(webLinksAddon);

  terminal.open(dom.terminalContainer);
  fitAddon.fit();

  state.terminal = terminal;
  state.fitAddon = fitAddon;

  window.addEventListener('resize', () => {
    fitAddon.fit();
    resizeTerminalProcesses();
  });

  terminal.onData((data) => {
    if (state.shellInputWriter) {
      state.shellInputWriter.write(data).catch((error) => {
        writeTerminalLine(`[runner] shell input error: ${error.message}`);
      });
    }
  });

  writeTerminalLine('[runner] terminal ready');
}

function initEditor() {
  state.editor = monaco.editor.create(dom.editorContainer, {
    theme: 'vs-dark',
    automaticLayout: true,
    minimap: { enabled: false },
    fontSize: 13,
    scrollBeyondLastLine: false,
    smoothScrolling: true,
    wordWrap: 'on',
    padding: { top: 12 },
  });

  state.emptyModel = monaco.editor.createModel(
    '// Select a file from Explorer to start editing.\n',
    'javascript',
    monaco.Uri.parse('inmemory://workspace/welcome.js')
  );

  state.editor.setModel(state.emptyModel);
  state.editor.updateOptions({ readOnly: true });

  state.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
    saveActiveFile().catch((error) => {
      setStatus(`Save failed: ${error.message}`);
      writeTerminalLine(`[runner] save failed: ${error.message}`);
    });
  });
}

function refreshEditorModel() {
  if (!state.activePath) {
    state.editor.setModel(state.emptyModel);
    state.editor.updateOptions({ readOnly: true });
    return;
  }

  const model = state.modelByPath.get(state.activePath);
  if (!model) {
    state.editor.setModel(state.emptyModel);
    state.editor.updateOptions({ readOnly: true });
    return;
  }

  state.editor.updateOptions({ readOnly: false });
  state.editor.setModel(model);
  state.editor.focus();
}

function markDirtyState(filePath) {
  const model = state.modelByPath.get(filePath);
  if (!model) {
    return;
  }

  const current = model.getValue();
  const lastSaved = state.lastSavedByPath.get(filePath);

  if (current !== lastSaved) {
    state.dirtyPaths.add(filePath);
  } else {
    state.dirtyPaths.delete(filePath);
  }

  renderTabs();
}

function setActivePath(filePath) {
  state.activePath = filePath;
  state.selectedPath = filePath;

  renderTabs();
  renderFileTree();
  refreshEditorModel();
}

function closeTab(filePath) {
  const currentIndex = state.openTabs.indexOf(filePath);
  if (currentIndex < 0) {
    return;
  }

  state.openTabs = state.openTabs.filter((tabPath) => tabPath !== filePath);

  if (state.activePath === filePath) {
    const nextPath = state.openTabs[currentIndex] || state.openTabs[currentIndex - 1];
    state.activePath = nextPath;
    state.selectedPath = nextPath;
  }

  renderTabs();
  renderFileTree();
  refreshEditorModel();
}

function renderTabs() {
  dom.editorTabs.innerHTML = '';

  if (state.openTabs.length === 0) {
    const placeholder = document.createElement('div');
    placeholder.className = 'editor-empty';
    placeholder.textContent = 'No file opened';
    dom.editorTabs.appendChild(placeholder);
    return;
  }

  for (const filePath of state.openTabs) {
    const tab = document.createElement('button');
    tab.type = 'button';
    tab.className = `tab${state.activePath === filePath ? ' active' : ''}`;
    tab.addEventListener('click', () => {
      setActivePath(filePath);
    });

    const name = document.createElement('span');
    name.textContent = basename(filePath);

    tab.appendChild(name);

    if (state.dirtyPaths.has(filePath)) {
      const dirty = document.createElement('span');
      dirty.className = 'dirty';
      dirty.textContent = '*';
      tab.appendChild(dirty);
    }

    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.className = 'close';
    closeButton.textContent = 'x';
    closeButton.addEventListener('click', (event) => {
      event.stopPropagation();
      closeTab(filePath);
    });

    tab.appendChild(closeButton);
    dom.editorTabs.appendChild(tab);
  }
}

async function openFile(filePath) {
  let model = state.modelByPath.get(filePath);

  if (!model) {
    const contents = await state.webcontainer.fs.readFile(filePath, 'utf-8');
    const uri = monaco.Uri.parse(`file:///${filePath}`);

    model = monaco.editor.createModel(contents, detectLanguage(filePath), uri);
    state.modelByPath.set(filePath, model);
    state.lastSavedByPath.set(filePath, contents);

    const changeDisposable = model.onDidChangeContent(() => {
      markDirtyState(filePath);
    });
    state.modelChangeDisposerByPath.set(filePath, changeDisposable);
  }

  if (!state.openTabs.includes(filePath)) {
    state.openTabs.push(filePath);
  }

  setActivePath(filePath);
}

async function saveActiveFile() {
  if (!state.activePath) {
    setStatus('No active file to save.');
    return;
  }

  const model = state.modelByPath.get(state.activePath);
  if (!model) {
    setStatus('Active model is unavailable.');
    return;
  }

  const contents = model.getValue();
  await state.webcontainer.fs.writeFile(state.activePath, contents, 'utf-8');

  state.lastSavedByPath.set(state.activePath, contents);
  state.dirtyPaths.delete(state.activePath);
  renderTabs();
  setStatus(`Saved ${state.activePath}`);
}

async function readDirectoryTree(dirPath) {
  const entries = await state.webcontainer.fs.readdir(dirPath, {
    withFileTypes: true,
  });

  entries.sort((a, b) => {
    if (a.isDirectory() && !b.isDirectory()) {
      return -1;
    }

    if (!a.isDirectory() && b.isDirectory()) {
      return 1;
    }

    return a.name.localeCompare(b.name);
  });

  const nodes = [];

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
}

function renderTreeNode(node) {
  const li = document.createElement('li');
  const button = document.createElement('button');
  button.type = 'button';
  button.className = `tree-item-row${state.selectedPath === node.path ? ' active' : ''}`;

  const caret = document.createElement('span');
  caret.className = 'caret';

  const icon = document.createElement('span');
  icon.className = 'icon';

  const name = document.createElement('span');
  name.className = 'name';
  name.textContent = node.name;

  if (node.kind === 'directory') {
    const expanded = state.expandedDirs.has(node.path);
    caret.textContent = expanded ? 'v' : '>';
    icon.textContent = '[D]';

    button.addEventListener('click', () => {
      if (expanded) {
        state.expandedDirs.delete(node.path);
      } else {
        state.expandedDirs.add(node.path);
      }

      renderFileTree();
    });
  } else {
    caret.textContent = '';
    icon.textContent = '[F]';

    button.addEventListener('click', async () => {
      state.selectedPath = node.path;
      renderFileTree();

      try {
        await openFile(node.path);
      } catch (error) {
        setStatus(`Failed to open ${node.path}`);
        writeTerminalLine(`[runner] open failed for ${node.path}: ${error.message}`);
      }
    });
  }

  button.append(caret, icon, name);
  li.appendChild(button);

  if (node.kind === 'directory' && state.expandedDirs.has(node.path)) {
    const childList = document.createElement('ul');
    for (const child of node.children) {
      childList.appendChild(renderTreeNode(child));
    }
    li.appendChild(childList);
  }

  return li;
}

function renderFileTree() {
  dom.fileTree.innerHTML = '';

  const rootList = document.createElement('ul');
  rootList.className = 'root';

  for (const node of state.fileTreeData) {
    rootList.appendChild(renderTreeNode(node));
  }

  dom.fileTree.appendChild(rootList);
}

function findFirstFile(nodes) {
  for (const node of nodes) {
    if (node.kind === 'file') {
      return node.path;
    }

    if (node.kind === 'directory') {
      const child = findFirstFile(node.children);
      if (child) {
        return child;
      }
    }
  }

  return undefined;
}

async function refreshFileTree() {
  state.fileTreeData = await readDirectoryTree('.');
  renderFileTree();
}

async function startDevServer() {
  if (state.devProcess) {
    state.devProcess.kill();
    state.devProcess = undefined;
  }

  setStatus('Starting dev server...');
  state.devProcess = await state.webcontainer.spawn('npm', ['run', 'dev'], {
    env: {
      WEB_CONTAINER_TARGET: '1',
    },
    terminal: getTerminalSize(),
  });

  streamProcessOutput(state.devProcess, 'npm run dev').catch((error) => {
    writeTerminalLine(`[runner] dev stream error: ${error.message}`);
  });

  setStatus('Waiting for preview URL...');
}

async function startShell() {
  const shellCandidates = ['jsh', 'bash', 'sh'];

  for (const command of shellCandidates) {
    try {
      const process = await state.webcontainer.spawn(command, {
        terminal: getTerminalSize(),
      });

      state.shellProcess = process;
      state.shellCommand = command;
      state.shellInputWriter = process.input.getWriter();

      streamProcessOutput(process, command).catch((error) => {
        writeTerminalLine(`[runner] shell stream error: ${error.message}`);
      });

      process.exit.then((code) => {
        writeTerminalLine(`[runner] shell exited (${command}) with code ${code}`);
      });

      if (command !== 'jsh') {
        writeTerminalLine(`[runner] interactive shell fallback active: ${command}`);
      } else {
        writeTerminalLine('[runner] interactive shell ready (jsh)');
      }

      return;
    } catch (_error) {
      // try next shell candidate
    }
  }

  writeTerminalLine('[runner] interactive shell unavailable. Running fallback command mode.');

  try {
    const fallback = await state.webcontainer.spawn('npm', ['run', '--help'], {
      terminal: getTerminalSize(),
    });

    streamProcessOutput(fallback, 'npm run --help').catch((error) => {
      writeTerminalLine(`[runner] fallback stream error: ${error.message}`);
    });
  } catch (error) {
    writeTerminalLine(`[runner] fallback command failed: ${error.message}`);
  }
}

function checkCompatibility() {
  if (!window.crossOriginIsolated) {
    setCompatibility('This page is not cross-origin isolated. Open via localhost/HTTPS and ensure COOP/COEP headers are present.');
    return false;
  }

  if (typeof SharedArrayBuffer === 'undefined') {
    setCompatibility('SharedArrayBuffer is unavailable in this browser/environment.');
    return false;
  }

  return true;
}

async function bootstrap() {
  initMobileNav();
  initEditor();
  initTerminal();
  renderTabs();

  setCompatibility('');
  if (!checkCompatibility()) {
    setStatus('WebContainer cannot start in this browser context. Fix compatibility requirements and retry.');
    return;
  }

  try {
    setStatus('Booting WebContainer runtime...');
    state.webcontainer = await WebContainer.boot();

    state.webcontainer.on('server-ready', (_port, url) => {
      dom.preview.src = url;
      setStatus('Preview is ready.');
    });

    if (!projectFiles || typeof projectFiles !== 'object' || Object.keys(projectFiles).length === 0) {
      throw new Error('Generated project file tree is invalid. Rebuild with npm run build:runner.');
    }

    setStatus('Mounting project files...');
    await state.webcontainer.mount(projectFiles);

    setStatus('Loading file tree...');
    await refreshFileTree();

    setStatus('Installing dependencies...');
    await runAndWait('npm', ['install']);

    await startDevServer();
    await startShell();

    const defaultPath = state.fileTreeData.length > 0 ? findFirstFile(state.fileTreeData) : undefined;
    if (defaultPath) {
      await openFile(defaultPath);
    }
  } catch (error) {
    setStatus('Runner failed to start. Check terminal logs and browser requirements, then retry.');
    writeTerminalLine(`[runner] ${error.message}`);
  }
}

dom.saveBtn.addEventListener('click', () => {
  saveActiveFile().catch((error) => {
    setStatus(`Save failed: ${error.message}`);
    writeTerminalLine(`[runner] save failed: ${error.message}`);
  });
});

dom.restartBtn.addEventListener('click', async () => {
  if (!state.webcontainer) {
    return;
  }

  dom.restartBtn.disabled = true;
  try {
    writeTerminalLine('[runner] restarting npm run dev...');
    await startDevServer();
    setStatus('Dev server restarted. Waiting for preview URL...');
  } catch (error) {
    setStatus('Failed to restart dev server.');
    writeTerminalLine(`[runner] restart failed: ${error.message}`);
  } finally {
    dom.restartBtn.disabled = false;
  }
});

bootstrap();
