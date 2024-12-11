import { useState, useRef, useEffect } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  type SortingState,
  type ColumnResizeMode,
  type ColumnSizingState
} from '@tanstack/react-table';
import { cn } from '@/lib/utils';
import { TableProps, columnSizeMap } from './types';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

export function Table<T extends object>({
  data,
  columns,
  stickyHeader = false,
  resizableColumns = false,
  expandableRows = false,
  renderExpandedRow,
}: TableProps<T>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({});
  const [columnResizing, setColumnResizing] = useState<ColumnSizingState>({});
  const tableRef = useRef<HTMLTableElement>(null);

  const table = useReactTable({
    data,
    columns: columns.map(col => ({
      id: col.id,
      header: col.header,
      accessorKey: col.accessorKey as string,
      cell: (info: any) => {
        const value = info.getValue();
        return col.formatter ? col.formatter(value) : value;
      },
      size: columnSizeMap[col.size],
    })),
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
      columnSizing: columnResizing,
    },
    onSortingChange: setSorting,
    onColumnSizingChange: setColumnResizing,
    columnResizeMode: 'onChange' as ColumnResizeMode,
    enableColumnResizing: resizableColumns,
  });

  const toggleRow = (rowId: string) => {
    setExpandedRows(prev => ({
      ...prev,
      [rowId]: !prev[rowId],
    }));
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (tableRef.current) {
        const rect = tableRef.current.getBoundingClientRect();
        const isResizing = Object.keys(columnResizing).length > 0;
        if (isResizing) {
          document.body.style.cursor = 'col-resize';
        }
      }
    };

    const handleMouseUp = () => {
      document.body.style.cursor = '';
    };

    if (resizableColumns) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [columnResizing, resizableColumns]);

  return (
    <div className="w-full overflow-auto">
      <table ref={tableRef} className="w-full border-collapse">
        <thead className={cn(
          "bg-background",
          stickyHeader && "sticky top-0 z-10"
        )}>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <TableHeader
                  key={header.id}
                  header={header}
                  resizableColumns={resizableColumns}
                />
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <TableRow
              key={row.id}
              row={row}
              expandable={expandableRows}
              expanded={expandedRows[row.id]}
              onToggle={() => toggleRow(row.id)}
              renderExpanded={renderExpandedRow}
              columnsCount={columns.length}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}