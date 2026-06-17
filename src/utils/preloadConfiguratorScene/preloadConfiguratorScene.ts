'use client';

import { useConfiguratorProduct } from '@store';

import { preloadGarmentProductAssets } from '../preloadGarmentProduct/preloadGarmentProduct';

const preloadConfiguratorScene = () => {
  const product = useConfiguratorProduct.getState().product;
  preloadGarmentProductAssets(product);
};

export { preloadConfiguratorScene };
