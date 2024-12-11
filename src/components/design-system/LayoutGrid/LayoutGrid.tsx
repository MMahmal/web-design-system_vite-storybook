import React from 'react';
import { cn } from '@/lib/utils';
import { LayoutGridProps } from './types';

export function LayoutGrid({
  children,
  columns = 1,
  rows,
  gap = 4,
  className,
  areas,
  autoFlow = 'row',
  autoColumns,
  autoRows,
}: LayoutGridProps) {
  const style = {
    gridTemplateColumns: columns === 'auto' ? 'auto' : `repeat(${columns}, minmax(0, 1fr))`,
    gridTemplateRows: rows ? `repeat(${rows}, minmax(0, 1fr))` : undefined,
    gridTemplateAreas: areas?.join(' '),
    gridAutoFlow: autoFlow,
    gridAutoColumns: autoColumns,
    gridAutoRows: autoRows,
  };

  return (
    <div
      className={cn(
        'grid',
        `gap-${gap}`,
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
}

export function GridArea({ name, children, className }: { name: string; children: React.ReactNode; className?: string }) {
  return (
    <div style={{ gridArea: name }} className={className}>
      {children}
    </div>
  );
}