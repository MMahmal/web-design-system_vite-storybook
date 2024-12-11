import React from 'react';
import { ChevronDown, ChevronUp, GripVertical } from 'lucide-react';
import { cn } from '@/lib/utils';
import { flexRender } from '@tanstack/react-table';
import type { Header } from '@tanstack/react-table';

interface TableHeaderProps<T> {
  header: Header<T, unknown>;
  resizableColumns?: boolean;
}

export function TableHeader<T>({ header, resizableColumns }: TableHeaderProps<T>) {
  return (
    <th
      key={header.id}
      className={cn(
        "border-b p-4 text-left align-middle font-medium text-muted-foreground",
        header.column.columnDef.size as string,
        resizableColumns && "relative"
      )}
      style={{
        width: header.getSize(),
      }}
    >
      <div className="flex items-center gap-2">
        {flexRender(
          header.column.columnDef.header,
          header.getContext()
        )}
        {header.column.getCanSort() && (
          <button
            onClick={header.column.getToggleSortingHandler()}
            className="ml-2"
          >
            {header.column.getIsSorted() === 'asc' ? (
              <ChevronUp className="h-4 w-4" />
            ) : header.column.getIsSorted() === 'desc' ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronUp className="h-4 w-4 opacity-0 group-hover:opacity-50" />
            )}
          </button>
        )}
      </div>
      {resizableColumns && (
        <div
          onMouseDown={header.getResizeHandler()}
          onTouchStart={header.getResizeHandler()}
          className={cn(
            "absolute right-0 top-0 h-full w-1 cursor-col-resize select-none touch-none hover:bg-primary/50",
            header.column.getIsResizing() && "bg-primary"
          )}
        />
      )}
    </th>
  );
}