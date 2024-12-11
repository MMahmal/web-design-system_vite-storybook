import { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ScrollContainerProps, OverflowX, OverflowY, ScrollBehavior } from './types';
import { useScrollPosition } from './hooks/useScrollPosition';
import { ScrollControls } from './components/ScrollControls';
import { VirtualizedList } from './components/VirtualizedList';

export function ScrollContainer({
  children,
  className,
  height = '100%',
  width = '100%',
  direction = 'vertical',
  smoothScroll = true,
  hideScrollbar = false,
  onScroll,
  scrollToTopButton = true,
  virtualize = false,
  itemHeight,
  overscan = 3,
}: ScrollContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const { scrollPosition, scrollToTop } = useScrollPosition(containerRef, onScroll);

  useEffect(() => {
    setShowScrollToTop(scrollPosition.y > 200);
  }, [scrollPosition.y]);

  const scrollStyles: { 
    overflowY: OverflowX;
    overflowX: OverflowY;
    scrollBehavior: ScrollBehavior;
   } = {
    overflowY: direction !== 'horizontal' ? 'auto' : 'hidden',
    overflowX: direction !== 'vertical' ? 'auto' : 'hidden',
    scrollBehavior: smoothScroll ? 'smooth' : 'auto',
  };

  if (hideScrollbar) {
    scrollStyles.overflowY = 'scroll';
    scrollStyles.overflowX = 'scroll';
  }

  const content = virtualize && Array.isArray(children) && itemHeight ? (
    <VirtualizedList
      items={children}
      itemHeight={itemHeight}
      height={typeof height === 'number' ? height : 400}
      width={typeof width === 'number' ? width : 400}
      overscan={overscan}
      renderItem={(item) => item}
    />
  ) : (
    children
  );

  return (
    <>
      <div
        ref={containerRef}
        className={cn(
          "relative",
          hideScrollbar && "scrollbar-hide",
          className
        )}
        style={{
          height,
          width,
          overflowX: scrollStyles.overflowX,
          overflowY: scrollStyles.overflowY,
          scrollBehavior: scrollStyles.scrollBehavior
        }}
      >
        {content}
      </div>
      <ScrollControls
        containerRef={containerRef}
        showScrollToTop={scrollToTopButton && showScrollToTop}
        onScrollToTop={scrollToTop}
      />
    </>
  );
}