import React from 'react';
import { VirtualizedProps } from '../types';
import { useVirtualization } from '../hooks/useVirtualization';

export function VirtualizedList({
  items,
  itemHeight,
  height,
  width,
  overscan = 3,
  renderItem,
}: VirtualizedProps) {
  const [scrollTop, setScrollTop] = React.useState(0);

  const { virtualItems, totalHeight } = useVirtualization(
    items.length,
    itemHeight,
    height,
    scrollTop,
    overscan
  );

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  return (
    <div
      style={{ height, width, overflow: 'auto' }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        {virtualItems.map(({ index, start }) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: 0,
              transform: `translateY(${start}px)`,
              width: '100%',
            }}
          >
            {renderItem(items[index], index)}
          </div>
        ))}
      </div>
    </div>
  );
}