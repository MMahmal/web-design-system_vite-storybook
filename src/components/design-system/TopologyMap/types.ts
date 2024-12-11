import { ReactNode } from 'react';

export interface Coordinates {
  latitude: number;
  longitude: number;
  altitude?: number;
}

export interface MapBounds {
  north: number;
  south: number;
  east: number;
  west: number;
}

export interface TerrainData {
  elevation: number[][];
  resolution: number;
  bounds: MapBounds;
}

export interface MapOverlay {
  id: string;
  type: 'marker' | 'path' | 'polygon';
  coordinates: Coordinates[];
  style?: Record<string, unknown>;
  content?: ReactNode;
}

export interface TopologyMapProps {
  center: Coordinates;
  zoom?: number;
  width?: number | string;
  height?: number | string;
  terrain?: TerrainData;
  overlays?: MapOverlay[];
  onViewportChange?: (center: Coordinates, zoom: number) => void;
  className?: string;
}