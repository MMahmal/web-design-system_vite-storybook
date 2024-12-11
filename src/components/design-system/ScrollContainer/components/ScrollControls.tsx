import { Button } from "@/components/ui/button";
import { ArrowUp } from 'lucide-react';
import { ScrollControlsProps } from '../types';
import { cn } from '@/lib/utils';

export function ScrollControls({
  containerRef,
  showScrollToTop,
  onScrollToTop,
}: ScrollControlsProps) {
  if (!showScrollToTop) return null;

  return (
    <Button
      variant="outline"
      size="icon"
      className={cn(
        "fixed bottom-4 right-4 z-50 rounded-full opacity-0 transition-opacity duration-200",
        showScrollToTop && "opacity-100"
      )}
      onClick={onScrollToTop}
    >
      <ArrowUp className="h-4 w-4" />
    </Button>
  );
}