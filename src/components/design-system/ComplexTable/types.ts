import { ReactNode } from 'react';

export type ColumnSize = 'XS' | 'S' | 'M' | 'L' | 'XL';

export interface Column<T> {
  id: string;
  header: string;
  accessorKey: keyof T;
  size: ColumnSize;
  formatter?: (value: any) => ReactNode;
  sortable?: boolean;
  filterable?: boolean;
}

export interface ComplexTableProps<T> {
  data: T[];
  columns: Column<T>[];
  virtualizeRows?: boolean;
}

export const columnSizeMap: Record<ColumnSize, number> = {
  XS: 20,
  S: 32,
  M: 48,
  L: 64,
  XL: 96
};