import { ReactNode } from 'react';

export interface FlexProps {
  children: ReactNode;
  direction?: 'row' | 'column';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  wrap?: boolean;
  gap?: number;
  className?: string;
}

export interface CollapsibleProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export interface PageNavigationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
}

export interface TextProps {
  variant?: 'default' | 'muted' | 'lead';
  size?: 'sm' | 'base' | 'lg';
  children: ReactNode;
  className?: string;
}