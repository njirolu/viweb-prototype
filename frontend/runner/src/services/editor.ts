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

(globalThis as typeof globalThis & {
  MonacoEnvironment?: {
    getWorker: (_workerId: string, label: string) => Worker;
  };
}).MonacoEnvironment = {
  getWorker(_workerId, label) {
    if (label === 'json') {
      return new jsonWorker();
    }

    return new editorWorker();
  },
};

export function basename(filePath: string) {
  const parts = filePath.split('/');
  return parts[parts.length - 1] || filePath;
}

export function detectLanguage(filePath: string) {
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

export function createEditorInstance(container: HTMLElement, onSave: () => void) {
  const editor = monaco.editor.create(container, {
    theme: 'vs-dark',
    automaticLayout: true,
    minimap: { enabled: false },
    fontSize: 13,
    scrollBeyondLastLine: false,
    smoothScrolling: true,
    wordWrap: 'on',
    padding: { top: 12 },
  });

  const emptyModel = monaco.editor.createModel(
    '// Select a file from Explorer to start editing.\n',
    'javascript',
    monaco.Uri.parse('inmemory://workspace/welcome.js')
  );

  editor.setModel(emptyModel);
  editor.updateOptions({ readOnly: true });

  editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, onSave);

  return {
    editor,
    emptyModel,
  };
}

export { monaco };
