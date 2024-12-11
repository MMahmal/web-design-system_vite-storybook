import { useMemo } from 'react';
import { UseVirtualization } from '../types';

export function useVirtualization(
  itemCount: number,
  itemHeight: number,
  containerHeight: number,
  scrollTop: number,
  overscan = 3
): UseVirtualization {
  return useMemo(() => {
    const totalHeight = itemCount * itemHeight;
    const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
    const visibleItems = Math.ceil(containerHeight / itemHeight);
    const endIndex = Math.min(
      itemCount - 1,
      startIndex + visibleItems + overscan * 2
    );

    const virtualItems = [];
    for (let i = startIndex; i <= endIndex; i++) {
      virtualItems.push({
        index: i,
        start: i * itemHeight,
      });
    }

    return {
      virtualItems,
      totalHeight,
      startIndex,
      endIndex,
    };
  }, [itemCount, itemHeight, containerHeight, scrollTop, overscan]);
}