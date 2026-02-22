import type React from 'react';
import { FolderTree, LaptopMinimalCheck, MonitorPlay, TerminalSquare } from 'lucide-react';

import { Tabs, TabsList, TabsTrigger } from '@shared/components/ui/tabs';
import type { PanelName } from '../types';

const panels: Array<{ value: PanelName; label: string; icon: React.ComponentType<{ className?: string }> }> = [
  { value: 'files', label: 'Files', icon: FolderTree },
  { value: 'editor', label: 'Editor', icon: LaptopMinimalCheck },
  { value: 'preview', label: 'Preview', icon: MonitorPlay },
  { value: 'terminal', label: 'Terminal', icon: TerminalSquare },
];

type MobilePanelTabsProps = {
  value: PanelName;
  onValueChange: (value: PanelName) => void;
};

export function MobilePanelTabs({ value, onValueChange }: MobilePanelTabsProps) {
  return (
    <Tabs value={value} onValueChange={(next) => onValueChange(next as PanelName)} className="w-full md:hidden">
      <TabsList className="grid h-auto w-full grid-cols-4 gap-1 rounded-xl border border-border bg-card/80 p-1">
        {panels.map((panel) => {
          const Icon = panel.icon;
          return (
            <TabsTrigger
              key={panel.value}
              value={panel.value}
              className="flex min-h-[52px] flex-col gap-1 rounded-lg text-[11px] font-semibold"
            >
              <Icon className="h-4 w-4" />
              {panel.label}
            </TabsTrigger>
          );
        })}
      </TabsList>
    </Tabs>
  );
}
