import { AlertTriangle, CircleCheck } from 'lucide-react';

import { Badge } from '@shared/components/ui/badge';

type StatusStripProps = {
  status: string;
  compatibility: string;
};

export function StatusStrip({ status, compatibility }: StatusStripProps) {
  return (
    <div className="grid gap-2 text-sm">
      <div className="flex items-center gap-2 text-cyan-200">
        <CircleCheck className="h-4 w-4" />
        <p className="m-0 min-h-[1.1rem]">{status}</p>
      </div>

      {compatibility ? (
        <Badge variant="danger" className="w-fit gap-1 rounded-md px-2 py-1 text-xs font-medium">
          <AlertTriangle className="h-3.5 w-3.5" />
          {compatibility}
        </Badge>
      ) : null}
    </div>
  );
}
