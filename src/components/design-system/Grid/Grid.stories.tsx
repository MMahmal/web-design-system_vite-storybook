import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from './Grid';

const meta: Meta<typeof Grid> = {
  title: 'Design System/Grid',
  component: Grid,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

interface CardData {
  title: string;
  description: string;
  image: string;
}

const mockData: CardData[] = [
  {
    title: 'Mountain Landscape',
    description: 'Beautiful mountain vista at sunset',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
  },
  {
    title: 'Ocean Waves',
    description: 'Peaceful ocean waves at dawn',
    image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0',
  },
  {
    title: 'Forest Path',
    description: 'Misty morning in the forest',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
  },
  {
    title: 'Desert Dunes',
    description: 'Golden sand dunes at sunset',
    image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35',
  },
];

const CardComponent = ({ item }: { item: CardData }) => (
  <div className="rounded-lg overflow-hidden shadow-lg bg-white">
    <img
      src={item.image}
      alt={item.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
      <p className="text-gray-600">{item.description}</p>
    </div>
  </div>
);

export const Default: Story = {
  args: {
    items: mockData,
    renderItem: (item: CardData) => <CardComponent item={item} />,
    columns: 4,
    gap: 4,
    responsive: true,
  },
};

export const ThreeColumns: Story = {
  args: {
    items: mockData,
    renderItem: (item: CardData) => <CardComponent item={item} />,
    columns: 3,
    gap: 4,
    responsive: true,
  },
};

export const TwoColumns: Story = {
  args: {
    items: mockData,
    renderItem: (item: CardData) => <CardComponent item={item} />,
    columns: 2,
    gap: 4,
    responsive: true,
  },
};

export const NonResponsive: Story = {
  args: {
    items: mockData,
    renderItem: (item: CardData) => <CardComponent item={item} />,
    columns: 4,
    gap: 4,
    responsive: false,
  },
};