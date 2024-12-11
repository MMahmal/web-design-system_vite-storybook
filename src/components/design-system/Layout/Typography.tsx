import React from 'react';
import { cn } from '@/lib/utils';
import { HeadingProps, TextProps } from './types';

export function Heading({
  level = 1,
  children,
  className,
}: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const sizes = {
    1: 'text-4xl font-extrabold',
    2: 'text-3xl font-bold',
    3: 'text-2xl font-bold',
    4: 'text-xl font-semibold',
    5: 'text-lg font-semibold',
    6: 'text-base font-semibold',
  };

  return (
    <Tag className={cn(sizes[level], 'tracking-tight', className)}>
      {children}
    </Tag>
  );
}

export function Text({
  variant = 'default',
  size = 'base',
  children,
  className,
}: TextProps) {
  const variants = {
    default: 'text-foreground',
    muted: 'text-muted-foreground',
    lead: 'text-muted-foreground font-medium',
  };

  const sizes = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
  };

  return (
    <p className={cn(variants[variant], sizes[size], className)}>
      {children}
    </p>
  );
}