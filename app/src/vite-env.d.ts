/// <reference types="vite/client" />

declare module 'monaco-editor/esm/vs/editor/editor.api' {
  export * from 'monaco-editor';
}

declare module 'monaco-editor/esm/vs/editor/editor.worker?worker&inline' {
  const MonacoWorker: {
    new (): Worker;
  };

  export default MonacoWorker;
}

declare module 'monaco-editor/esm/vs/language/json/json.worker?worker&inline' {
  const JsonWorker: {
    new (): Worker;
  };

  export default JsonWorker;
}

declare module 'monaco-editor/esm/vs/basic-languages/css/css.contribution';
declare module 'monaco-editor/esm/vs/basic-languages/html/html.contribution';
declare module 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution';
declare module 'monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution';
declare module 'monaco-editor/esm/vs/basic-languages/markdown/markdown.contribution';
declare module 'monaco-editor/esm/vs/basic-languages/yaml/yaml.contribution';
declare module 'monaco-editor/esm/vs/language/json/monaco.contribution';
