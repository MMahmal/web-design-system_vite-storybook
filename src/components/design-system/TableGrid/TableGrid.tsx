import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Column } from '../Table/types';
import { cn } from '@/lib/utils';

interface TableGridProps<T> {
  data: T[];
  columns: Column<T>[];
  className?: string;
}

export function TableGrid<T extends object>({ 
  data, 
  columns,
  className 
}: TableGridProps<T>) {
  return (
    <div className={cn(
      "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
      className
    )}>
      {data.map((item, index) => (
        <Card key={index} className="overflow-hidden">
          <CardHeader className="bg-muted/50 p-4">
            <h3 className="font-semibold">Record #{index + 1}</h3>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {columns.map((column) => {
                const value = item[column.accessorKey];
                return (
                  <div key={column.id} className="flex p-3">
                    <div className="w-1/3 font-medium text-muted-foreground">
                      {column.header}
                    </div>
                    <div className="w-2/3">
                      {column.formatter ? column.formatter(value) : value?.toString()}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}