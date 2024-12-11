import type { Meta, StoryObj } from '@storybook/react';
import { ChartCard } from './ChartCard';

const meta = {
  title: 'Design System/Chart',
  component: ChartCard,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ChartCard>;

export default meta;
type Story = StoryObj<typeof ChartCard>;

const lineData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};

const barData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
    },
  ],
};

const pieData = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

const radarData = {
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [65, 59, 90, 81, 56, 55, 40],
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
    },
  ],
};

const polarData = {
  labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
  datasets: [
    {
      data: [11, 16, 7, 3, 14],
      backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(75, 192, 192, 0.5)', 'rgba(255, 206, 86, 0.5)', 'rgba(201, 203, 207, 0.5)', 'rgba(54, 162, 235, 0.5)'],
    },
  ],
};

const bubbleData = {
  datasets: [
    {
      label: 'Dataset 1',
      data: [
        {
          x: 20,
          y: 30,
          r: 15,
        },
        {
          x: 40,
          y: 10,
          r: 10,
        },
        {
          x: 30,
          y: 20,
          r: 5,
        },
        {
          x: 60,
          y: 40,
          r: 20,
        }
      ],
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
    },
  ],
};

export const Line: Story = {
  args: {
    title: 'Line Chart',
    subtitle: 'Monthly Data',
    description: 'A simple line chart example',
    data: lineData,
    type: 'line',
    showLegend: true,
    showFilters: true,
    showSorting: true,
  },
};

export const Bar: Story = {
  args: {
    title: 'Bar Chart',
    subtitle: 'Monthly Data',
    description: 'A simple bar chart example',
    data: barData,
    type: 'bar',
    showLegend: true,
  },
};

export const Pie: Story = {
  args: {
    title: 'Pie Chart',
    subtitle: 'Distribution',
    description: 'A simple pie chart example',
    data: pieData,
    type: 'pie',
    showLegend: true,
  },
};

export const Radar: Story = {
  args: {
    title: 'Radar Chart',
    subtitle: 'Skills',
    description: 'A simple radar chart example',
    data: radarData,
    type: 'radar',
    showLegend: true,
  },
};

export const Polar: Story = {
  args: {
    title: 'Polar Chart',
    subtitle: 'Distribution',
    description: 'A simple polar chart example',
    data: polarData,
    type: 'polar',
    showLegend: true,
  },
};

export const Bubble: Story = {
  args: {
    title: 'Bubble Chart',
    subtitle: 'Distribution',
    description: 'A simple bubble chart example',
    data: bubbleData,
    type: 'bubble',
    showLegend: true,
  },
};