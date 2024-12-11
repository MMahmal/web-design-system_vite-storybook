import React from 'react';
import { cn } from '@/lib/utils';
import { flexRender } from '@tanstack/react-table';
import type { Cell } from '@tanstack/react-table';

interface TableCellProps<T> {
  cell: Cell<T, unknown>;
}

export function TableCell<T>({ cell }: TableCellProps<T>) {
  return (
    <td
      key={cell.id}
      className={cn(
        "p-4 align-middle",
        cell.column.columnDef.size as string
      )}
    >
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </td>
  );
}