import React, { useMemo } from 'react';
import * as THREE from 'three';
import { TerrainData } from './types';

interface TerrainMeshProps {
  terrain: TerrainData;
}

export function TerrainMesh({ terrain }: TerrainMeshProps) {
  const geometry = useMemo(() => {
    const { elevation, resolution, bounds } = terrain;
    const width = bounds.east - bounds.west;
    const height = bounds.north - bounds.south;
    
    const geometry = new THREE.PlaneGeometry(
      width,
      height,
      elevation[0].length - 1,
      elevation.length - 1
    );

    // Update vertices based on elevation data
    const vertices = geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < vertices.length; i += 3) {
      const x = Math.floor(i / 3) % elevation[0].length;
      const y = Math.floor(i / (3 * elevation[0].length));
      if (y < elevation.length) {
        vertices[i + 2] = elevation[y][x] * resolution;
      }
    }

    geometry.computeVertexNormals();
    return geometry;
  }, [terrain]);

  return (
    <mesh
      geometry={geometry}
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow
      castShadow
    >
      <meshStandardMaterial
        color="#4a8"
        wireframe={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}