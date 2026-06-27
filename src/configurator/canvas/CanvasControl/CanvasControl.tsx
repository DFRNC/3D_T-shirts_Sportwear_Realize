'use client';

import { ViewControls } from '@configurator/canvas';
import { useCartPreviewCapture } from '@configurator/hooks';
import { Environment } from '@react-three/drei';
const CanvasControl = () => {
  useCartPreviewCapture();

  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[2, 4, 3]} intensity={0.1} />
      <directionalLight position={[-2, 1, -1]} intensity={0.1} />
      <ViewControls />
      <Environment preset="studio" environmentIntensity={0.2} background={false} />
    </>
  );
};

export { CanvasControl };
