import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar, Pie, Doughnut, Radar, PolarArea, Bubble, Scatter } from 'react-chartjs-2';
import { ChartContainerProps } from './types';
import { cn } from '@/lib/utils';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Filler,
  Tooltip,
  Legend
);

export function ChartContainer({ data, type, options, className }: ChartContainerProps) {
  const chartComponents = {
    line: Line,
    bar: Bar,
    pie: Pie,
    doughnut: Doughnut,
    radar: Radar,
    polar: PolarArea,
    bubble: Bubble,
    scatter: Scatter,
    area: Line,
    mixed: Line,
  };

  const ChartComponent = chartComponents[type];

  if (!ChartComponent) {
    return <div>Unsupported chart type</div>;
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    ...options,
  };

  const chartData = type === 'area' 
    ? {
        ...data,
        datasets: data.datasets.map(dataset => ({
          ...dataset,
          fill: true,
        })),
      }
    : data;

  return (
    <div className={cn("w-full h-[300px]", className)}>
      <ChartComponent data={chartData} options={chartOptions} />
    </div>
  );
}