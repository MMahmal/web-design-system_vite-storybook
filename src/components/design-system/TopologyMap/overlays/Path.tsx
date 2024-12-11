import React, { useMemo } from 'react';
import * as THREE from 'three';
import { MapOverlay } from '../types';

export function Path({ coordinates, style }: MapOverlay) {
  const geometry = useMemo(() => {
    const points = coordinates.map(
      ({ longitude, latitude, altitude }) =>
        new THREE.Vector3(longitude, altitude || 0, latitude)
    );
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [coordinates]);

  return (
    <line geometry={geometry}>
      <lineBasicMaterial
        color={style?.color as string || '#0000ff'}
        linewidth={style?.width as number || 2}
      />
    </line>
  );
}