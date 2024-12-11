import { ReactNode } from 'react';

export type NavigationPosition = 'top' | 'bottom' | 'left' | 'right';

export interface NavigationItem {
  id: string;
  label: string;
  href?: string;
  icon?: ReactNode;
  children?: NavigationItem[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface NavigationProps {
  items: NavigationItem[];
  position?: NavigationPosition;
  className?: string;
  collapsible?: boolean;
  showIcons?: boolean;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export interface SubNavProps {
  items: NavigationItem[];
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}