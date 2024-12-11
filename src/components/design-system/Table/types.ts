import { ReactNode } from 'react';

export type ColumnSize = 'XS' | 'S' | 'M' | 'L';

export interface Column<T> {
  id: string;
  header: string;
  accessorKey: keyof T;
  size: ColumnSize;
  formatter?: (value: any) => ReactNode;
  sortable?: boolean;
  filterable?: boolean;
}

export interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  stickyHeader?: boolean;
  resizableColumns?: boolean;
  expandableRows?: boolean;
  renderExpandedRow?: (row: T) => ReactNode;
  onSort?: (columnId: string, direction: 'asc' | 'desc') => void;
  onFilter?: (columnId: string, value: string) => void;
}

export const columnSizeMap: Record<ColumnSize, number> = {
  XS: 20,
  S: 32,
  M: 48,
  L: 64
};