import { ReactNode } from 'react';

export interface ScrollPosition {
  x: number;
  y: number;
}

export interface ScrollContainerProps {
  children: ReactNode;
  className?: string;
  height?: string | number;
  width?: string | number;
  direction?: 'vertical' | 'horizontal' | 'both';
  smoothScroll?: boolean;
  hideScrollbar?: boolean;
  onScroll?: (position: ScrollPosition) => void;
  scrollToTopButton?: boolean;
  virtualize?: boolean;
  itemHeight?: number; // Required for virtualization
  overscan?: number; // Number of items to render outside visible area
}

export interface VirtualizedProps {
  items: any[];
  itemHeight: number;
  height: number;
  width: number;
  overscan?: number;
  renderItem: (item: any, index: number) => ReactNode;
}

export interface ScrollControlsProps {
  containerRef: React.RefObject<HTMLDivElement>;
  showScrollToTop: boolean;
  onScrollToTop: () => void;
}

export interface UseScrollPosition {
  scrollPosition: ScrollPosition;
  scrollToPosition: (position: Partial<ScrollPosition>) => void;
  scrollToTop: () => void;
  scrollToBottom: () => void;
}

export interface UseVirtualization {
  virtualItems: { index: number; start: number }[];
  totalHeight: number;
  startIndex: number;
  endIndex: number;
}

export type OverflowX = 'auto' | 'hidden' | 'scroll';
export type OverflowY = 'auto' | 'hidden' | 'scroll';
export type ScrollBehavior = 'smooth' | 'auto';