import { ChevronRight, FileCode2, Folder, FolderOpen } from 'lucide-react';

import { Button } from '@shared/components/ui/button';
import { ScrollArea } from '@shared/components/ui/scroll-area';
import { cn } from '@shared/lib/utils';

import type { FileTreeNode } from '../types';

type FileTreeProps = {
  nodes: FileTreeNode[];
  expandedDirs: Set<string>;
  selectedPath?: string;
  onToggleDirectory: (path: string) => void;
  onSelectFile: (path: string) => void;
};

type FileTreeNodeRowProps = {
  node: FileTreeNode;
  expandedDirs: Set<string>;
  selectedPath?: string;
  depth: number;
  onToggleDirectory: (path: string) => void;
  onSelectFile: (path: string) => void;
};

function FileTreeNodeRow({
  node,
  expandedDirs,
  selectedPath,
  depth,
  onToggleDirectory,
  onSelectFile,
}: FileTreeNodeRowProps) {
  const isSelected = selectedPath === node.path;

  if (node.kind === 'directory') {
    const expanded = expandedDirs.has(node.path);

    return (
      <li>
        <Button
          variant="ghost"
          className={cn(
            'h-8 w-full justify-start gap-2 rounded-md px-2 font-mono text-xs text-foreground/85',
            isSelected && 'bg-primary/20 text-foreground'
          )}
          style={{ paddingLeft: `${depth * 12 + 8}px` }}
          onClick={() => onToggleDirectory(node.path)}
        >
          <ChevronRight className={cn('h-4 w-4 text-muted-foreground transition-transform', expanded && 'rotate-90')} />
          {expanded ? <FolderOpen className="h-4 w-4 text-primary" /> : <Folder className="h-4 w-4 text-primary/80" />}
          <span className="truncate">{node.name}</span>
        </Button>

        {expanded ? (
          <ul className="space-y-1">
            {node.children.map((child) => (
              <FileTreeNodeRow
                key={child.path}
                node={child}
                expandedDirs={expandedDirs}
                selectedPath={selectedPath}
                depth={depth + 1}
                onToggleDirectory={onToggleDirectory}
                onSelectFile={onSelectFile}
              />
            ))}
          </ul>
        ) : null}
      </li>
    );
  }

  return (
    <li>
      <Button
        variant="ghost"
        className={cn(
          'h-8 w-full justify-start gap-2 rounded-md px-2 font-mono text-xs text-foreground/85',
          isSelected && 'bg-primary/20 text-foreground'
        )}
        style={{ paddingLeft: `${depth * 12 + 22}px` }}
        onClick={() => onSelectFile(node.path)}
      >
        <FileCode2 className="h-4 w-4 text-accent" />
        <span className="truncate">{node.name}</span>
      </Button>
    </li>
  );
}

export function FileTree({ nodes, expandedDirs, selectedPath, onToggleDirectory, onSelectFile }: FileTreeProps) {
  return (
    <ScrollArea className="h-full p-2">
      <ul className="space-y-1">
        {nodes.map((node) => (
          <FileTreeNodeRow
            key={node.path}
            node={node}
            expandedDirs={expandedDirs}
            selectedPath={selectedPath}
            depth={0}
            onToggleDirectory={onToggleDirectory}
            onSelectFile={onSelectFile}
          />
        ))}
      </ul>
    </ScrollArea>
  );
}
