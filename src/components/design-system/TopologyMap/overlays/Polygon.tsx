import React, { useMemo } from 'react';
import * as THREE from 'three';
import { MapOverlay } from '../types';

export function Polygon({ coordinates, style }: MapOverlay) {
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    coordinates.forEach(({ longitude, latitude }, i) => {
      if (i === 0) {
        shape.moveTo(longitude, latitude);
      } else {
        shape.lineTo(longitude, latitude);
      }
    });
    return new THREE.ShapeGeometry(shape);
  }, [coordinates]);

  return (
    <mesh geometry={geometry} rotation={[-Math.PI / 2, 0, 0]}>
      <meshStandardMaterial
        color={style?.color as string || '#00ff00'}
        opacity={style?.opacity as number || 0.5}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}