import { useState } from 'react';
import {
  ChevronDown,
  CloudUpload,
  Eye,
  FileCode2,
  GitFork,
  LayoutPanelTop,
  Plug,
  RotateCcw,
  Save,
  Search,
  Settings,
  Zap,
} from 'lucide-react';
import { Group as PanelGroup, Panel, Separator as PanelResizeHandle } from 'react-resizable-panels';

import { Badge } from '@shared/components/ui/badge';
import { Button } from '@shared/components/ui/button';
import { ScrollArea } from '@shared/components/ui/scroll-area';
import { cn } from '@shared/lib/utils';

import { EditorTabs } from './components/editor-tabs';
import { FileTree } from './components/file-tree';
import { MobilePanelTabs } from './components/mobile-panel-tabs';
import { StatusStrip } from './components/status-strip';
import { useRunnerState } from './hooks/useRunnerState';
import type { PanelName } from './types';

const panels: PanelName[] = ['files', 'editor', 'preview', 'terminal'];

function panelClass(activePanel: PanelName, panel: PanelName) {
  return cn('min-h-[58vh] md:min-h-0', activePanel === panel ? 'flex' : 'hidden md:flex');
}

export default function App() {
  const runner = useRunnerState();
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="theme-runner dark h-screen w-screen bg-background text-foreground overflow-hidden flex flex-col font-sans">
      {/* Top Header */}
      <div
        className="flex h-12 shrink-0 items-center justify-between border-b border-border/40 bg-muted/20 px-4"
        data-runner-react-root="true"
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 font-semibold">
            <Zap className="h-5 w-5 text-blue-500 fill-blue-500" />
            <span>viweb</span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
            <Badge variant="outline" className="font-normal rounded-full bg-muted/50">
              Draft
            </Badge>
          </div>
        </div>
        <div className="flex items-stretch gap-3">
          <StatusStrip status={runner.status} compatibility={runner.compatibility} />
          <div className="w-px bg-border/50 hidden md:block my-2" />
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                void runner.saveActiveFile();
              }}
              title="Save (Ctrl/Cmd+S)"
              className="h-8 px-2"
            >
              <Save className="h-4 w-4 md:mr-2 text-muted-foreground" />
              <span className="hidden md:inline">Save</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              disabled={runner.isRestarting}
              onClick={() => {
                void runner.restartDevServer();
              }}
              title="Restart Dev Server"
              className="h-8 px-2"
            >
              <RotateCcw className="h-4 w-4 md:mr-2 text-muted-foreground" />
              <span className="hidden md:inline">Restart</span>
            </Button>
          </div>
        </div>
      </div>

      <MobilePanelTabs value={runner.mobilePanel} onValueChange={runner.handleMobilePanelChange} />

      <main className="flex-1 min-h-0 flex flex-col md:flex-row">
        {/* Left Activity Bar */}
        <aside className="hidden md:flex w-12 shrink-0 flex-col items-center justify-between border-r border-[#2b2b2b] bg-[#333333] py-4">
          <div className="flex flex-col gap-4">
            <Button
              variant="ghost"
              size="icon"
              className={cn("h-10 w-10 text-muted-foreground hover:text-foreground", showSidebar && "text-foreground bg-white/10")}
              onClick={() => setShowSidebar(!showSidebar)}
              title="Toggle Sidebar"
            >
              <FileCode2 className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground hover:text-foreground">
              <Search className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            <Button variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground hover:text-foreground">
              <Plug className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground hover:text-foreground">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </aside>

        <section className="min-h-0 flex-1 flex">
          <PanelGroup orientation="horizontal" id="viweb-layout" className="w-full h-full">
            {showSidebar && (
              <>
                <Panel
                  defaultSize={20}
                  minSize={15}
                  id="explorer"
                  className={cn(panelClass(runner.mobilePanel, 'files'), 'h-full shrink-0 flex-col bg-[#252526]')}
                >
                  <div className="flex w-full h-full flex-col overflow-hidden">
                    {/* Action Button */}
                    <div className="p-3 shrink-0">
                      <Button className="w-full justify-start gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white border-0 shadow-sm transition-all h-9">
                        <Zap className="h-4 w-4 fill-white" />
                        Open in bolt.new | AI
                      </Button>
                    </div>

                    <ScrollArea className="flex-1">
                      <div className="flex flex-col">
                        {/* Project Header */}
                        <div className="flex items-center justify-between px-3 py-1.5 text-xs font-semibold text-muted-foreground tracking-wider group hover:text-foreground cursor-pointer transition-colors">
                          <span>PROJECT</span>
                          <CloudUpload className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        {/* INFO Section */}
                        <div className="px-3 pb-2 pt-1">
                          <div className="flex items-center gap-1.5 text-sm font-medium mb-1 group cursor-pointer">
                            <ChevronDown className="h-4 w-4 text-muted-foreground" />
                            <span className="truncate">INFO</span>
                          </div>
                          <div className="pl-5 pr-2 py-1 space-y-2">
                            <div className="flex items-start gap-2">
                              <div className="w-6 h-6 rounded border border-border/50 bg-muted/20 flex items-center justify-center shrink-0 mt-0.5 overflow-hidden">
                                <Zap className="h-4 w-4 text-blue-500" />
                              </div>
                              <div className="text-xs text-muted-foreground">
                                <div className="font-medium text-foreground mb-0.5 transition-colors">
                                  WebContainer Prototype
                                </div>
                                <div className="line-clamp-2 leading-relaxed">
                                  An environment running purely inside your browser. Based on @webcontainer/api.
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 text-[11px] text-muted-foreground pt-1">
                              <span className="flex items-center gap-1">
                                <Eye className="h-3.5 w-3.5" /> 0 views
                              </span>
                              <span className="flex items-center gap-1">
                                <GitFork className="h-3.5 w-3.5" /> 0 forks
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* FILES Section */}
                        <div className="mt-2">
                          <div className="flex items-center justify-between px-3 py-1.5 group cursor-pointer transition-colors">
                            <div className="flex items-center gap-1.5 text-sm font-medium">
                              <ChevronDown className="h-4 w-4 text-muted-foreground" />
                              <span>FILES</span>
                            </div>
                            <div className="flex items-center gap-1 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6 relative overflow-hidden"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  void runner.refreshFileTree();
                                }}
                                title="Refresh files"
                              >
                                <RotateCcw className="h-3.5 w-3.5" />
                              </Button>
                            </div>
                          </div>
                          {/* File Tree Component */}
                          <div className="pb-2">
                            <FileTree
                              nodes={runner.fileTreeData}
                              expandedDirs={runner.expandedDirs}
                              selectedPath={runner.selectedPath}
                              onToggleDirectory={runner.toggleDirectory}
                              onSelectFile={runner.selectFileFromTree}
                            />
                          </div>
                        </div>
                      </div>
                    </ScrollArea>
                  </div>
                </Panel>

                <PanelResizeHandle className="hidden md:flex w-[1px] bg-[#2b2b2b] hover:bg-primary/50 transition-colors cursor-col-resize group/handle relative z-10">
                  <div className="absolute inset-y-0 -left-1 -right-1" />
                </PanelResizeHandle>
              </>
            )}

            <Panel
              defaultSize={50}
              minSize={30}
              id="center"
              className={cn(
                'h-full flex-col bg-background',
                runner.mobilePanel === 'editor' || runner.mobilePanel === 'terminal' ? 'flex' : 'hidden md:flex'
              )}
            >
              <PanelGroup orientation="vertical">
                <Panel
                  defaultSize={70}
                  minSize={20}
                  id="editor"
                  className={cn(panelClass(runner.mobilePanel, 'editor'), 'h-full shrink-0 flex-col')}
                >
                  <div className="flex w-full h-full flex-col overflow-hidden">
                    <div className="shrink-0 bg-[#252526]">
                      <EditorTabs
                        tabs={runner.openTabs}
                        activePath={runner.activePath}
                        dirtyPaths={runner.dirtyPaths}
                        basename={runner.basename}
                        onSelectTab={runner.setActiveFilePath}
                        onCloseTab={runner.closeTab}
                      />
                    </div>
                    <div className="min-h-0 flex-1 p-0 relative bg-[#1e1e1e]">
                      <div ref={runner.editorContainerRef} className="absolute inset-0 h-full w-full" />
                    </div>
                  </div>
                </Panel>

                <PanelResizeHandle className="hidden md:flex h-[1px] bg-[#2b2b2b] hover:bg-primary/50 transition-colors cursor-row-resize group/handle relative z-10">
                  <div className="absolute inset-x-0 -top-1 -bottom-1" />
                </PanelResizeHandle>

                <Panel
                  defaultSize={30}
                  minSize={10}
                  id="terminal"
                  className={cn(panelClass(runner.mobilePanel, 'terminal'), 'h-full shrink-0 flex-col bg-[#1e1e1e]')}
                >
                  <div className="flex w-full h-full flex-col overflow-hidden">
                    <div className="flex items-center px-3 py-1.5 shrink-0 border-b border-black/20 bg-[#1e1e1e]">
                      <div className="flex items-center gap-2 text-[11px] font-medium text-white/70 uppercase tracking-widest">
                        Terminal
                      </div>
                    </div>
                    <div className="min-h-0 flex-1 p-2 bg-[#1e1e1e] relative">
                      <div ref={runner.terminalContainerRef} className="absolute inset-1 h-full w-full outline-none" />
                    </div>
                  </div>
                </Panel>
              </PanelGroup>
            </Panel>

            <PanelResizeHandle className="hidden md:flex w-[1px] bg-border/40 hover:bg-primary/50 transition-colors cursor-col-resize group/handle relative z-10">
              <div className="absolute inset-y-0 -left-1 -right-1" />
            </PanelResizeHandle>

            <Panel
              defaultSize={30}
              minSize={20}
              id="preview"
              className={cn(panelClass(runner.mobilePanel, 'preview'), 'h-full shrink-0 flex-col bg-white')}
            >
              <div className="flex w-full h-full flex-col overflow-hidden">
                <div className="flex items-center px-3 py-1.5 shrink-0 border-b border-border/40 bg-muted/5">
                  <Badge
                    variant="secondary"
                    className="w-fit gap-1 rounded-sm px-2 py-0.5 text-[10px] uppercase font-medium line-clamp-1"
                  >
                    <Eye className="h-3 w-3" />
                    Preview
                  </Badge>
                </div>
                <div className="min-h-0 flex-1 p-0 bg-white relative">
                  {runner.previewUrl ? (
                    <iframe
                      src={runner.previewUrl}
                      title="WebContainer preview"
                      className="absolute inset-0 h-full w-full border-0 bg-white"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center p-4 text-center text-sm text-muted-foreground">
                      Preview URL is not ready yet. Wait for the container dev server on port 4173.
                    </div>
                  )}
                </div>
              </div>
            </Panel>
          </PanelGroup>
        </section>
      </main>

      {/* Footer Status Bar like VSCode / StackBlitz */}
      <footer className="hidden md:flex shrink-0 h-[22px] items-center px-3 bg-[#007acc] text-white text-[11px] font-medium justify-between shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 cursor-pointer hover:bg-white/20 px-1.5 rounded transition-colors h-full">
            <GitFork className="h-3 w-3" />
            main*
          </div>
          <div className="flex items-center gap-1.5 cursor-pointer hover:bg-white/20 px-1.5 rounded transition-colors h-full">
            <RotateCcw className="h-3 w-3" />
            0
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 cursor-pointer hover:bg-white/20 px-1.5 rounded transition-colors h-full">
            <LayoutPanelTop className="h-3 w-3" />
            Layout: {panels.length} panels
          </div>
          <div className="flex items-center gap-1.5 cursor-pointer hover:bg-white/20 px-1.5 rounded transition-colors h-full">
            TypeScript React
          </div>
        </div>
      </footer>
    </div>
  );
}
