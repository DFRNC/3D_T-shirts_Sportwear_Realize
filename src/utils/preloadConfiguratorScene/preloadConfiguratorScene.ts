'use client';

import { useConfiguratorProduct } from '../../store/useConfiguratorProduct/useConfiguratorProduct';

import { preloadGarmentProductAssets } from '../preloadGarmentProduct/preloadGarmentProduct';

const preloadConfiguratorScene = () => {
  const product = useConfiguratorProduct.getState().product;
  preloadGarmentProductAssets(product);
};

export { preloadConfiguratorScene };
