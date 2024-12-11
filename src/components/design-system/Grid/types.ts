import { ReactNode } from 'react';

export interface GridProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
  columns?: number;
  gap?: number;
  responsive?: boolean;
  className?: string;
}

export interface GridItemProps {
  children: ReactNode;
  className?: string;
}