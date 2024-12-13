import { cn } from '@/lib/utils';
import { GridProps, GridItemProps } from './types';

export function GridItem({ children, className }: GridItemProps) {
  return (
    <div className={cn('h-full w-full', className)}>
      {children}
    </div>
  );
}

export function Grid<T>({
  items,
  renderItem,
  columns = 4,
  gap = 4,
  responsive = true,
  className,
}: GridProps<T>) {
  const gridClassName = cn(
    'grid',
    responsive
      ? {
          'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4': columns === 4,
          'grid-cols-1 sm:grid-cols-2 md:grid-cols-3': columns === 3,
          'grid-cols-1 sm:grid-cols-2': columns === 2,
        }
      : `grid-cols-${columns}`,
    `gap-${gap}`,
    className
  );

  return (
    <div className={gridClassName}>
      {items.map((item, index) => (
        <GridItem key={index}>
          {renderItem(item)}
        </GridItem>
      ))}
    </div>
  );
}