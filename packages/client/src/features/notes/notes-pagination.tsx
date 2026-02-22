import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from '@shared/components/ui/button';

type NotesPaginationProps = {
  page: number;
  totalPages: number;
  total: number;
  canPrev: boolean;
  canNext: boolean;
  onPrev: () => Promise<void>;
  onNext: () => Promise<void>;
};

export function NotesPagination({ page, totalPages, total, canPrev, canNext, onPrev, onNext }: NotesPaginationProps) {
  return (
    <div className="flex flex-col justify-between gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center">
      <p>
        Page {page} of {totalPages} ({total} total)
      </p>
      <div className="flex items-center gap-2">
        <Button
          variant="secondary"
          disabled={!canPrev}
          onClick={() => {
            void onPrev();
          }}
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Previous
        </Button>
        <Button
          variant="secondary"
          disabled={!canNext}
          onClick={() => {
            void onNext();
          }}
        >
          Next
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
