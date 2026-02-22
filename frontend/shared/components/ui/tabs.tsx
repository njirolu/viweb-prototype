import * as React from 'react';

import { cn } from '@shared/lib/utils';

type TabsContextValue = {
  value: string;
  setValue: (value: string) => void;
};

const TabsContext = React.createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs components must be used inside <Tabs>.');
  }

  return context;
}

function Tabs({
  value,
  onValueChange,
  children,
  className,
}: {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <TabsContext.Provider value={{ value, setValue: onValueChange }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

function TabsList({ className, children }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('inline-flex h-9 items-center rounded-lg bg-muted p-1 text-muted-foreground', className)}>
      {children}
    </div>
  );
}

function TabsTrigger({
  className,
  value,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string }) {
  const { value: activeValue, setValue } = useTabsContext();
  const active = activeValue === value;

  return (
    <button
      type="button"
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-all',
        active ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground',
        className
      )}
      onClick={() => setValue(value)}
      {...props}
    >
      {children}
    </button>
  );
}

function TabsContent({
  className,
  value,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { value: string }) {
  const { value: activeValue } = useTabsContext();

  if (activeValue !== value) {
    return null;
  }

  return (
    <div className={cn('mt-2 ring-offset-background', className)} {...props}>
      {children}
    </div>
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
