import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChartCardProps } from './types';
import { ChartContainer } from './ChartContainer';
import { cn } from '@/lib/utils';

export function ChartCard({
  title,
  subtitle,
  description,
  footer,
  className,
  data,
  type,
  options,
  showLegend = true,
  showFilters = false,
  showSorting = false,
  onFilterChange,
  onSortChange,
}: ChartCardProps) {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader>
        {title && <CardTitle>{title}</CardTitle>}
        {subtitle && <div className="text-sm text-muted-foreground">{subtitle}</div>}
        {description && <CardDescription>{description}</CardDescription>}
        {(showFilters || showSorting) && (
          <div className="flex gap-4 mt-4">
            {showFilters && (
              <Select onValueChange={onFilterChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                </SelectContent>
              </Select>
            )}
            {showSorting && (
              <Select onValueChange={onSortChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asc">Ascending</SelectItem>
                  <SelectItem value="desc">Descending</SelectItem>
                </SelectContent>
              </Select>
            )}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <ChartContainer
          data={data}
          type={type}
          options={{
            ...options,
            plugins: {
              ...options?.plugins,
              legend: {
                display: showLegend,
                position: 'bottom' as const,
                ...options?.plugins?.legend,
              },
            },
          }}
        />
      </CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
}