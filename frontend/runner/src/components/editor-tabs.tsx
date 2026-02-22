import { X } from 'lucide-react';

import { Button } from '@shared/components/ui/button';
import { ScrollArea } from '@shared/components/ui/scroll-area';
import { cn } from '@shared/lib/utils';

type EditorTabsProps = {
  tabs: string[];
  activePath?: string;
  dirtyPaths: Set<string>;
  basename: (filePath: string) => string;
  onSelectTab: (filePath: string) => void;
  onCloseTab: (filePath: string) => void;
};

export function EditorTabs({
  tabs,
  activePath,
  dirtyPaths,
  basename,
  onSelectTab,
  onCloseTab,
}: EditorTabsProps) {
  if (tabs.length === 0) {
    return <div className="flex h-9 items-center px-3 text-xs text-muted-foreground">No file opened</div>;
  }

  return (
    <ScrollArea className="h-9 w-full">
      <div className="inline-flex min-w-full items-stretch bg-muted/40">
        {tabs.map((tabPath) => {
          const active = tabPath === activePath;

          return (
            <div key={tabPath} className="inline-flex">
              <Button
                variant="ghost"
                className={cn(
                  'h-9 rounded-none border-r border-border px-3 font-mono text-xs',
                  active ? 'bg-background text-foreground' : 'text-muted-foreground hover:text-foreground'
                )}
                onClick={() => onSelectTab(tabPath)}
              >
                <span className="max-w-[180px] truncate">{basename(tabPath)}</span>
                {dirtyPaths.has(tabPath) ? <span className="ml-1 text-amber-300">*</span> : null}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-8 rounded-none border-r border-border text-muted-foreground hover:text-foreground"
                onClick={() => onCloseTab(tabPath)}
                aria-label={`Close ${basename(tabPath)}`}
              >
                <X className="h-3.5 w-3.5" />
              </Button>
            </div>
          );
        })}
      </div>
    </ScrollArea>
  );
}
