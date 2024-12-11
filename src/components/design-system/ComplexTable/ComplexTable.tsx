import React, { useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  type SortingState,
  type ColumnFiltersState,
} from '@tanstack/react-table';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ComplexTableProps, columnSizeMap } from './types';

export function ComplexTable<T extends object>({
  data,
  columns,
  virtualizeRows = true,
}: ComplexTableProps<T>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState('');

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
      enableSorting: col.sortable,
      enableFiltering: col.filterable,
    })),
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting,
      columnFilters,
      globalFilter,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
  });

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Complex Data Table</CardTitle>
          <Input
            placeholder="Search all columns..."
            value={globalFilter ?? ''}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="max-w-sm"
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    {table.getHeaderGroups().map((headerGroup) => (
                      <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                          <th
                            key={header.id}
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                          >
                            <div className="flex items-center gap-2">
                              <div
                                className={cn(
                                  "flex items-center gap-2",
                                  header.column.getCanSort() && "cursor-pointer select-none"
                                )}
                                onClick={header.column.getToggleSortingHandler()}
                              >
                                <>{header.column.columnDef.header}</>
                                {header.column.getCanSort() && (
                                  <span>
                                    {{
                                      asc: <ChevronUp className="h-4 w-4" />,
                                      desc: <ChevronDown className="h-4 w-4" />,
                                    }[header.column.getIsSorted() as string] ?? (
                                      <ChevronsUpDown className="h-4 w-4" />
                                    )}
                                  </span>
                                )}
                              </div>
                              {header.column.getCanFilter() && (
                                <Input
                                  placeholder={`Filter ${header.column.columnDef.header}...`}
                                  value={header.column.getFilterValue() as string ?? ''}
                                  onChange={(e) =>
                                    header.column.setFilterValue(e.target.value)
                                  }
                                  className="h-8 w-[150px]"
                                />
                              )}
                            </div>
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
                    {table.getRowModel().rows.map((row) => (
                      <tr
                        key={row.id}
                        className="hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        {row.getVisibleCells().map((cell) => (
                          <td
                            key={cell.id}
                            className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100"
                          >
                            {cell.getValue() as React.ReactNode}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-900 border-t">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Next
              </Button>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Page {table.getState().pagination.pageIndex + 1} of{' '}
              {table.getPageCount()}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}