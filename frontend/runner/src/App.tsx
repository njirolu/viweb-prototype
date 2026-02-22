import { Eye, FolderOpen, LayoutPanelTop, RotateCcw, Save, TerminalSquare } from 'lucide-react';

import { Badge } from '@shared/components/ui/badge';
import { Button } from '@shared/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@shared/components/ui/card';
import { ScrollArea } from '@shared/components/ui/scroll-area';
import { Separator } from '@shared/components/ui/separator';
import { cn } from '@shared/lib/utils';

import { EditorTabs } from './components/editor-tabs';
import { FileTree } from './components/file-tree';
import { MobilePanelTabs } from './components/mobile-panel-tabs';
import { StatusStrip } from './components/status-strip';
import { useRunnerState } from './hooks/useRunnerState';
import type { PanelName } from './types';

const panels: PanelName[] = ['files', 'editor', 'preview', 'terminal'];

function panelClass(activePanel: PanelName, panel: PanelName) {
  return cn('min-h-[58vh] md:min-h-0', activePanel === panel ? 'grid' : 'hidden md:grid');
}

export default function App() {
  const runner = useRunnerState();

  return (
    <div className="theme-runner dark h-full bg-[radial-gradient(circle_at_top_right,_hsl(191_89%_22%)_0%,_hsl(var(--background))_32%)]">
      <main className="grid h-full gap-2 p-2 md:gap-3 md:p-3" data-runner-react-root="true">
        <Card className="border-border/80 bg-card/95 backdrop-blur">
          <CardHeader className="space-y-3 px-4 py-3 md:px-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <CardTitle className="text-lg md:text-xl">WebContainer Workspace</CardTitle>
                <p className="mt-1 text-sm text-muted-foreground">
                  Frontend, backend, and terminal running fully inside WebContainer.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="secondary"
                  onClick={() => {
                    void runner.saveActiveFile();
                  }}
                >
                  <Save className="mr-2 h-4 w-4" />
                  Save (Ctrl/Cmd+S)
                </Button>
                <Button
                  disabled={runner.isRestarting}
                  onClick={() => {
                    void runner.restartDevServer();
                  }}
                >
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Restart Dev Server
                </Button>
              </div>
            </div>

            <StatusStrip status={runner.status} compatibility={runner.compatibility} />
          </CardHeader>
        </Card>

        <MobilePanelTabs value={runner.mobilePanel} onValueChange={runner.handleMobilePanelChange} />

        <section className="grid min-h-0 flex-1 gap-2 md:grid-cols-[22%_43%_35%] md:gap-3">
          <Card className={cn(panelClass(runner.mobilePanel, 'files'), 'overflow-hidden')}>
            <CardHeader className="space-y-2 px-3 py-2">
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="gap-1 rounded-md px-2 py-1 text-[11px] uppercase tracking-wide">
                  <FolderOpen className="h-3.5 w-3.5" />
                  Explorer
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 text-xs"
                  onClick={() => {
                    void runner.refreshFileTree();
                  }}
                >
                  Refresh
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">workspace</p>
            </CardHeader>
            <Separator />
            <CardContent className="min-h-0 p-0">
              <FileTree
                nodes={runner.fileTreeData}
                expandedDirs={runner.expandedDirs}
                selectedPath={runner.selectedPath}
                onToggleDirectory={runner.toggleDirectory}
                onSelectFile={runner.selectFileFromTree}
              />
            </CardContent>
          </Card>

          <Card className={cn(panelClass(runner.mobilePanel, 'editor'), 'overflow-hidden')}>
            <CardHeader className="px-0 py-0">
              <EditorTabs
                tabs={runner.openTabs}
                activePath={runner.activePath}
                dirtyPaths={runner.dirtyPaths}
                basename={runner.basename}
                onSelectTab={runner.setActiveFilePath}
                onCloseTab={runner.closeTab}
              />
            </CardHeader>
            <CardContent className="min-h-0 p-0">
              <div ref={runner.editorContainerRef} className="h-full min-h-[58vh] md:min-h-0" />
            </CardContent>
          </Card>

          <div className="grid min-h-0 gap-2 md:grid-rows-[58%_42%] md:gap-3">
            <Card className={cn(panelClass(runner.mobilePanel, 'preview'), 'overflow-hidden')}>
              <CardHeader className="px-3 py-2">
                <Badge variant="secondary" className="w-fit gap-1 rounded-md px-2 py-1 text-[11px] uppercase tracking-wide">
                  <Eye className="h-3.5 w-3.5" />
                  Preview
                </Badge>
              </CardHeader>
              <Separator />
              <CardContent className="min-h-0 p-0">
                {runner.previewUrl ? (
                  <iframe src={runner.previewUrl} title="WebContainer preview" className="h-full min-h-[54vh] w-full border-0 bg-white md:min-h-0" />
                ) : (
                  <div className="flex h-full min-h-[54vh] items-center justify-center p-4 text-center text-sm text-muted-foreground md:min-h-0">
                    Preview URL is not ready yet. Wait for the container dev server on port 4173.
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className={cn(panelClass(runner.mobilePanel, 'terminal'), 'overflow-hidden')}>
              <CardHeader className="px-3 py-2">
                <Badge variant="secondary" className="w-fit gap-1 rounded-md px-2 py-1 text-[11px] uppercase tracking-wide">
                  <TerminalSquare className="h-3.5 w-3.5" />
                  Terminal
                </Badge>
              </CardHeader>
              <Separator />
              <CardContent className="min-h-0 p-1">
                <ScrollArea className="h-full">
                  <div ref={runner.terminalContainerRef} className="h-full min-h-[54vh] md:min-h-0" />
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="hidden md:flex md:items-center md:justify-end md:gap-2 md:text-xs md:text-muted-foreground">
          <LayoutPanelTop className="h-3.5 w-3.5" />
          {panels.length} workspace panels active
        </div>
      </main>
    </div>
  );
}
