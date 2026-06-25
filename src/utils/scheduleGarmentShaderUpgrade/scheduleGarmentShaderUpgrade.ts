import type { garmentConfigType } from '@types';
import type { MeshStandardMaterial } from 'three';

import { upgradeGarmentMaterialShader } from '../createGarmentMaterial/createGarmentMaterial';

const SHADER_UPGRADE_FRAME_BUDGET_MS = 6;

type ScheduleGarmentShaderUpgradeOptions = {
  parts: garmentConfigType['parts'];
  getMaterials: (registryKey: string) => readonly MeshStandardMaterial[];
  invalidate: () => void;
  onComplete: () => void;
};

const scheduleGarmentShaderUpgrade = ({ parts, getMaterials, invalidate, onComplete }: ScheduleGarmentShaderUpgradeOptions) => {
  const materialQueue = [...new Set(parts.flatMap((part) => [...getMaterials(part.id)]))];

  if (materialQueue.length === 0) {
    onComplete();
    return () => {};
  }

  let cancelled = false;
  let queueIndex = 0;
  let frameId = 0;

  const now = () => (typeof performance !== 'undefined' ? performance.now() : Date.now());

  const runBatch = () => {
    if (cancelled) return;

    const frameStart = now();

    while (queueIndex < materialQueue.length) {
      upgradeGarmentMaterialShader(materialQueue[queueIndex]);
      queueIndex += 1;

      if (now() - frameStart >= SHADER_UPGRADE_FRAME_BUDGET_MS) {
        break;
      }
    }

    invalidate();

    if (queueIndex >= materialQueue.length) {
      onComplete();
      return;
    }

    frameId = requestAnimationFrame(runBatch);
  };

  frameId = requestAnimationFrame(runBatch);

  return () => {
    cancelled = true;
    cancelAnimationFrame(frameId);
  };
};

export { scheduleGarmentShaderUpgrade };
