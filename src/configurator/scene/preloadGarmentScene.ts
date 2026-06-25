'use client';

import { useGLTF } from '@react-three/drei';

import { useConfiguratorProduct } from '@store';
import type { modelIdType } from '@types';
import { getModel } from '@utils';
import { resolveModelUrl } from '@configurator/utils';

const preloadGarmentScene = (modelId?: modelIdType) => {
  const product = modelId ? getModel(modelId) : useConfiguratorProduct.getState().product;
  if (!product) return;

  useGLTF.preload(resolveModelUrl(product));
};

export { preloadGarmentScene };
