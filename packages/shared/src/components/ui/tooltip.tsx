import * as React from 'react';

function TooltipProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

function Tooltip({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

function TooltipTrigger({
  children,
  asChild,
}: {
  children: React.ReactElement;
  asChild?: boolean;
}) {
  if (asChild) {
    return children;
  }

  return <span>{children}</span>;
}

function TooltipContent({ children }: { children: React.ReactNode }) {
  return <span className="sr-only">{children}</span>;
}

export { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent };
