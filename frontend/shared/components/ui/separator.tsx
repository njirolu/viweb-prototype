import { cn } from '@shared/lib/utils';

function Separator({
  className,
  orientation = 'horizontal',
}: {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}) {
  if (orientation === 'vertical') {
    return <div className={cn('h-full w-px bg-border', className)} role="separator" aria-orientation="vertical" />;
  }

  return <div className={cn('h-px w-full bg-border', className)} role="separator" aria-orientation="horizontal" />;
}

export { Separator };
