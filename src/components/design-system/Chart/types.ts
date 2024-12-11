import { ReactNode } from 'react';
import { ChartData, ChartOptions } from 'chart.js';

export type ChartType = 
  | 'line' 
  | 'bar' 
  | 'pie' 
  | 'doughnut' 
  | 'radar' 
  | 'polar' 
  | 'bubble' 
  | 'scatter' 
  | 'area' 
  | 'mixed';

export interface ChartCardProps {
  title?: string;
  subtitle?: string;
  description?: string;
  footer?: ReactNode;
  className?: string;
  data: ChartData<any>;
  type: ChartType;
  options?: ChartOptions<any>;
  showLegend?: boolean;
  showFilters?: boolean;
  showSorting?: boolean;
  onFilterChange?: (filters: any) => void;
  onSortChange?: (sort: any) => void;
}

export interface ChartContainerProps {
  data: ChartData<any>;
  type: ChartType;
  options?: ChartOptions<any>;
  className?: string;
}