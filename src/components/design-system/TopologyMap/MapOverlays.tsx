import React from 'react';
import { MapOverlay } from './types';
import { Marker } from './overlays/Marker';
import { Path } from './overlays/Path';
import { Polygon } from './overlays/Polygon';

interface MapOverlaysProps {
  overlays: MapOverlay[];
}

export function MapOverlays({ overlays }: MapOverlaysProps) {
  return (
    <group>
      {overlays.map((overlay) => {
        switch (overlay.type) {
          case 'marker':
            return <Marker key={overlay.id} {...overlay} />;
          case 'path':
            return <Path key={overlay.id} {...overlay} />;
          case 'polygon':
            return <Polygon key={overlay.id} {...overlay} />;
          default:
            return null;
        }
      })}
    </group>
  );
}