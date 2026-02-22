export type PanelName = 'files' | 'editor' | 'preview' | 'terminal';

export type FileTreeNode =
  | {
      kind: 'directory';
      name: string;
      path: string;
      children: FileTreeNode[];
    }
  | {
      kind: 'file';
      name: string;
      path: string;
    };
