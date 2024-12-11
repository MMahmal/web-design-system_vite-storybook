import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { TopologyMapProps, TerrainData } from './types';
import { TerrainMesh } from './TerrainMesh';
import { MapOverlays } from './MapOverlays';

export function TopologyMap({
  center,
  zoom = 12,
  width = '100%',
  height = '600px',
  terrain,
  overlays = [],
  onViewportChange,
  className,
}: TopologyMapProps) {
  const controlsRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [terrainData, setTerrainData] = useState<TerrainData | undefined>(terrain);

  useEffect(() => {
    if (terrain) {
      setTerrainData(terrain);
      setIsLoading(false);
    } else {
      // Fetch terrain data if not provided
      // This is where you'd typically fetch from a terrain API
      setIsLoading(false);
    }
  }, [terrain, center]);

  const handleCameraChange = () => {
    if (controlsRef.current && onViewportChange) {
      const camera = controlsRef.current.object;
      const target = controlsRef.current.target;
      
      // Convert camera position to geo coordinates
      // This is a simplified conversion - you'd need proper geo projection
      const newCenter = {
        latitude: target.z * (180 / Math.PI),
        longitude: target.x * (180 / Math.PI),
        altitude: camera.position.y,
      };
      
      onViewportChange(newCenter, zoom);
    }
  };

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="p-0">
        <div style={{ width, height }}>
          <Canvas shadows>
            <PerspectiveCamera
              makeDefault
              position={[0, 100, 0]}
              near={0.1}
              far={1000}
            />
            <OrbitControls
              ref={controlsRef}
              enableDamping
              dampingFactor={0.05}
              onChange={handleCameraChange}
            />
            <ambientLight intensity={0.5} />
            <directionalLight
              position={[50, 50, 25]}
              intensity={1}
              castShadow
            />
            {terrainData && <TerrainMesh terrain={terrainData} />}
            <MapOverlays overlays={overlays} />
          </Canvas>
        </div>
      </CardContent>
    </Card>
  );
}