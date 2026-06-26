'use client';

import { useGLTF } from '@react-three/drei';

import { useConfiguratorProduct } from '@store';
import type { garmentConfigType } from '@types';

import { resolveModelUrl } from '../utils/resolveModelUrl/resolveModelUrl';

const preloadGarmentScene = (product?: garmentConfigType) => {
  const resolved = product ?? useConfiguratorProduct.getState().product;
  if (!resolved) return;

  useGLTF.preload(resolveModelUrl(resolved));
};

export { preloadGarmentScene };
