import type { garmentConfigType } from '@types';
import type { MeshStandardMaterial } from 'three';

import { compileGarmentShader } from '../createGarmentMaterial/createGarmentMaterial';

type CompileGarmentShadersOverFramesOptions = {
  parts: garmentConfigType['parts'];
  getMaterials: (registryKey: string) => readonly MeshStandardMaterial[];
  invalidate: () => void;
  onComplete: () => void;
};

/** Compiles full garment print shaders one material per animation frame. */
const compileGarmentShadersOverFrames = ({ parts, getMaterials, invalidate, onComplete }: CompileGarmentShadersOverFramesOptions) => {
  const materialQueue = [...new Set(parts.flatMap((part) => [...getMaterials(part.id)]))];

  if (materialQueue.length === 0) {
    onComplete();
    return () => {};
  }

  let cancelled = false;
  let queueIndex = 0;
  let frameId = 0;

  const configureNext = () => {
    if (cancelled) return;

    if (queueIndex >= materialQueue.length) {
      onComplete();
      return;
    }

    compileGarmentShader(materialQueue[queueIndex]);
    queueIndex += 1;
    invalidate();
    frameId = requestAnimationFrame(configureNext);
  };

  frameId = requestAnimationFrame(configureNext);

  return () => {
    cancelled = true;
    cancelAnimationFrame(frameId);
  };
};

export { compileGarmentShadersOverFrames };
