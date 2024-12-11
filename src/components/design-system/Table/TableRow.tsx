import React from 'react';
import { cn } from '@/lib/utils';
import type { Row } from '@tanstack/react-table';
import { TableCell } from './TableCell';

interface TableRowProps<T> {
  row: Row<T>;
  expandable?: boolean;
  expanded?: boolean;
  onToggle?: () => void;
  renderExpanded?: (row: T) => React.ReactNode;
  columnsCount: number;
}

export function TableRow<T>({
  row,
  expandable,
  expanded,
  onToggle,
  renderExpanded,
  columnsCount,
}: TableRowProps<T>) {
  return (
    <React.Fragment>
      <tr
        className={cn(
          "border-b transition-colors hover:bg-muted/50",
          expandable && "cursor-pointer"
        )}
        onClick={() => expandable && onToggle?.()}
      >
        {row.getVisibleCells().map(cell => (
          <TableCell key={cell.id} cell={cell} />
        ))}
      </tr>
      {expandable && expanded && renderExpanded && (
        <tr>
          <td colSpan={columnsCount} className="p-4 bg-muted/30">
            {renderExpanded(row.original)}
          </td>
        </tr>
      )}
    </React.Fragment>
  );
}