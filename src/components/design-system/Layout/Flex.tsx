import React from 'react';
import { cn } from '@/lib/utils';
import { FlexProps } from './types';

export function Flex({
  children,
  direction = 'row',
  justify = 'start',
  align = 'start',
  wrap = false,
  gap = 4,
  className,
}: FlexProps) {
  return (
    <div
      className={cn(
        'flex',
        {
          'flex-row': direction === 'row',
          'flex-col': direction === 'column',
          'justify-start': justify === 'start',
          'justify-end': justify === 'end',
          'justify-center': justify === 'center',
          'justify-between': justify === 'between',
          'justify-around': justify === 'around',
          'justify-evenly': justify === 'evenly',
          'items-start': align === 'start',
          'items-end': align === 'end',
          'items-center': align === 'center',
          'items-baseline': align === 'baseline',
          'items-stretch': align === 'stretch',
          'flex-wrap': wrap,
        },
        `gap-${gap}`,
        className
      )}
    >
      {children}
    </div>
  );
}