import React, { useState } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from '@/lib/utils';
import { ImageProps } from './types';

export function Image({
  src,
  alt,
  className,
  fallback = '/placeholder.png',
  aspectRatio,
  objectFit = 'cover',
  loading = 'lazy',
  ...props
}: ImageProps) {
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
  };

  const content = (
    <img
      src={error ? fallback : src}
      alt={alt}
      className={cn(
        'w-full h-full transition-opacity duration-300',
        `object-${objectFit}`,
        className
      )}
      loading={loading}
      onError={handleError}
      {...props}
    />
  );

  if (aspectRatio) {
    return (
      <AspectRatio ratio={aspectRatio}>
        {content}
      </AspectRatio>
    );
  }

  return content;
}