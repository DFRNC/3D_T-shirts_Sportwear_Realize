'use client';

import { useConfiguratorProduct } from '@store';
import type { garmentConfigType } from '@types';

import { GLTF_USE_DRACO, GLTF_USE_MESHOPT, preloadGarmentGltf } from './ensureGarmentGltfParsed';
import { resolveModelUrl } from '../utils/resolveModelUrl';

const preloadGarmentScene = (product?: garmentConfigType) => {
  const resolved = product ?? useConfiguratorProduct.getState().product;
  if (!resolved) return;

  preloadGarmentGltf(resolveModelUrl(resolved));
};

export { GLTF_USE_DRACO, GLTF_USE_MESHOPT, preloadGarmentScene };
