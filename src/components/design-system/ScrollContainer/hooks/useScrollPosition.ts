import { useState, useCallback, RefObject, useEffect } from 'react';
import { ScrollPosition, UseScrollPosition } from '../types';
import { debounce } from '../utils/scroll';

export function useScrollPosition(
  containerRef: RefObject<HTMLDivElement>,
  onScroll?: (position: ScrollPosition) => void
): UseScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({ x: 0, y: 0 });

  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      const position = {
        x: containerRef.current.scrollLeft,
        y: containerRef.current.scrollTop,
      };
      setScrollPosition(position);
      onScroll?.(position);
    }
  }, [onScroll]);

  useEffect(() => {
    const container = containerRef.current;
    const debouncedScroll = debounce(handleScroll, 10);

    if (container) {
      container.addEventListener('scroll', debouncedScroll);
      return () => container.removeEventListener('scroll', debouncedScroll);
    }
  }, [handleScroll]);

  const scrollToPosition = useCallback(
    (position: Partial<ScrollPosition>) => {
      if (containerRef.current) {
        containerRef.current.scrollTo({
          left: position.x ?? scrollPosition.x,
          top: position.y ?? scrollPosition.y,
          behavior: 'smooth',
        });
      }
    },
    [scrollPosition]
  );

  const scrollToTop = useCallback(() => {
    scrollToPosition({ y: 0 });
  }, [scrollToPosition]);

  const scrollToBottom = useCallback(() => {
    if (containerRef.current) {
      scrollToPosition({ y: containerRef.current.scrollHeight });
    }
  }, [scrollToPosition]);

  return {
    scrollPosition,
    scrollToPosition,
    scrollToTop,
    scrollToBottom,
  };
}