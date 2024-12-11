import { ReactNode } from 'react';

export interface LayoutGridProps {
  children: ReactNode;
  columns?: number | 'auto';
  rows?: number;
  gap?: number;
  className?: string;
  areas?: string[];
  autoFlow?: 'row' | 'column' | 'dense' | 'row dense' | 'column dense';
  autoColumns?: string;
  autoRows?: string;
}