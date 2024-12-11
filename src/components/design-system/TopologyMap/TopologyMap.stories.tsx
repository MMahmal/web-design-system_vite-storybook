import type { Meta, StoryObj } from '@storybook/react';
import { TopologyMap } from './TopologyMap';

const meta = {
  title: 'Design System/TopologyMap',
  component: TopologyMap,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TopologyMap>;

export default meta;
type Story = StoryObj<typeof TopologyMap>;

const mockTerrainData = {
  elevation: Array(100).fill(Array(100).fill(0)).map((row, i) =>
    row.map((_, j) => Math.sin(i / 10) * Math.cos(j / 10) * 5)
  ),
  resolution: 1,
  bounds: {
    north: 50,
    south: -50,
    east: 50,
    west: -50,
  },
};

const mockOverlays = [
  {
    id: '1',
    type: 'marker' as const,
    coordinates: [{ latitude: 0, longitude: 0, altitude: 5 }],
    content: <div>Point of Interest</div>,
    style: { color: '#ff0000' },
  },
  {
    id: '2',
    type: 'path' as const,
    coordinates: [
      { latitude: 10, longitude: -10 },
      { latitude: -10, longitude: 10 },
    ],
    style: { color: '#0000ff', width: 2 },
  },
  {
    id: '3',
    type: 'polygon' as const,
    coordinates: [
      { latitude: 20, longitude: 20 },
      { latitude: 20, longitude: -20 },
      { latitude: -20, longitude: -20 },
      { latitude: -20, longitude: 20 },
    ],
    style: { color: '#00ff00', opacity: 0.5 },
  },
];

export const Default: Story = {
  args: {
    center: { latitude: 0, longitude: 0 },
    zoom: 12,
    width: 800,
    height: 600,
    terrain: mockTerrainData,
    overlays: mockOverlays,
  },
};

export const NoTerrain: Story = {
  args: {
    center: { latitude: 0, longitude: 0 },
    zoom: 12,
    width: 800,
    height: 600,
    overlays: mockOverlays,
  },
};

export const MarkersOnly: Story = {
  args: {
    center: { latitude: 0, longitude: 0 },
    zoom: 12,
    width: 800,
    height: 600,
    terrain: mockTerrainData,
    overlays: [mockOverlays[0]],
  },
};