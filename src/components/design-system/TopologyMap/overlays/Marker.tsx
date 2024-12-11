import React from 'react';
import { MapOverlay } from '../types';
import { Html } from '@react-three/drei';

export function Marker({ coordinates, content, style }: MapOverlay) {
  const [coord] = coordinates;
  
  return (
    <group position={[coord.longitude, coord.altitude || 0, coord.latitude]}>
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color={style?.color as string || '#ff0000'} />
      </mesh>
      {content && (
        <Html position={[0, 2, 0]} center>
          <div className="bg-white p-2 rounded shadow-lg">
            {content}
          </div>
        </Html>
      )}
    </group>
  );
}