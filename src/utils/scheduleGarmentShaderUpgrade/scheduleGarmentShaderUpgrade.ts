import type { garmentConfigType } from '@types';
import type { MeshStandardMaterial } from 'three';

import { upgradeGarmentMaterialShader } from '../createGarmentMaterial/createGarmentMaterial';

type ScheduleGarmentShaderUpgradeOptions = {
  parts: garmentConfigType['parts'];
  getMaterials: (registryKey: string) => readonly MeshStandardMaterial[];
  invalidate: () => void;
  onComplete: () => void;
};

const IDLE_TIMEOUT_MS = 200;
const IDLE_WATCHDOG_MS = IDLE_TIMEOUT_MS + 100;

const scheduleIdleWork = (run: () => void, isCancelled: () => boolean): (() => void) => {
  let settled = false;
  let idleCallbackId = 0;
  let watchdogId = 0;

  const invoke = () => {
    if (settled || isCancelled()) return;
    settled = true;
    if (watchdogId) clearTimeout(watchdogId);
    if (idleCallbackId) cancelIdleCallback(idleCallbackId);
    run();
  };

  if (typeof requestIdleCallback === 'function') {
    idleCallbackId = requestIdleCallback(invoke, { timeout: IDLE_TIMEOUT_MS });
    watchdogId = window.setTimeout(invoke, IDLE_WATCHDOG_MS);
  } else {
    watchdogId = window.setTimeout(invoke, 0);
  }

  return () => {
    settled = true;
    if (watchdogId) clearTimeout(watchdogId);
    if (idleCallbackId) cancelIdleCallback(idleCallbackId);
  };
};

const scheduleGarmentShaderUpgrade = ({ parts, getMaterials, invalidate, onComplete }: ScheduleGarmentShaderUpgradeOptions) => {
  const materialQueue = parts.flatMap((part) => [...getMaterials(part.id)]);

  if (materialQueue.length === 0) {
    onComplete();
    return () => {};
  }

  let index = 0;
  let cancelled = false;
  let cancelPendingStep: (() => void) | null = null;

  const step = () => {
    if (cancelled) return;

    if (index >= materialQueue.length) {
      invalidate();
      onComplete();
      return;
    }

    upgradeGarmentMaterialShader(materialQueue[index]!);
    index += 1;
    invalidate();

    if (index >= materialQueue.length) {
      onComplete();
      return;
    }

    cancelPendingStep = scheduleIdleWork(step, () => cancelled);
  };

  cancelPendingStep = scheduleIdleWork(step, () => cancelled);

  return () => {
    cancelled = true;
    cancelPendingStep?.();
    cancelPendingStep = null;
  };
};

export { scheduleGarmentShaderUpgrade };
