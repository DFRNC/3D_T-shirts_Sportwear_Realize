'use client';

import { useLayoutEffect } from 'react';

import { GarmentMaterialRegistryProvider } from '@providers';
import { preloadGarmentProductAssets } from '../../../../../../utils/preloadGarmentProduct';
import { resolveModelUrl } from '../../../../../../utils/resolveModelUrl';
import { resolvePbrTexturePaths } from '../../../../../../utils/resolvePbrTexturePaths';
import { useConfiguratorProduct } from '@store';

import { GarmentMeshes } from '../GarmentMeshes';
import { PbrMapsLoader } from '../PbrMapsLoader';

const GarmentModel = () => {
  const product = useConfiguratorProduct((state) => state.product);
  const modelUrl = resolveModelUrl(product);
  const pbrPaths = resolvePbrTexturePaths(product);

  useLayoutEffect(() => {
    preloadGarmentProductAssets(product);
  }, [modelUrl, product]);

  const scene = <GarmentMeshes key={modelUrl} />;

  return (
    <GarmentMaterialRegistryProvider key={modelUrl}>
      <PbrMapsLoader paths={pbrPaths}>{scene}</PbrMapsLoader>
    </GarmentMaterialRegistryProvider>
  );
};

export { GarmentModel };
