import React from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';
import { SubNavProps } from './types';

export function SubNav({ items, className, orientation = 'horizontal' }: SubNavProps) {
  return (
    <Tabs
      defaultValue={items[0]?.id}
      className={cn(
        "w-full",
        orientation === 'vertical' && "flex space-x-4",
        className
      )}
      orientation={orientation === 'vertical' ? 'vertical' : 'horizontal'}
    >
      <TabsList
        className={cn(
          orientation === 'vertical' && "flex-col h-full"
        )}
      >
        {items.map((item) => (
          <TabsTrigger key={item.id} value={item.id}>
            {item.icon}
            <span className="ml-2">{item.label}</span>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}