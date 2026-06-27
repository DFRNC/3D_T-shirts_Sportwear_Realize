'use client';

import { type ReactNode, useMemo } from 'react';

import { useGLTF } from '@react-three/drei';

import { GarmentMaterialRegistryProvider } from '@configurator/providers';
import { GLTF_USE_DRACO, GLTF_USE_MESHOPT } from '../../utils/loading/gltfModelCache';
import { useConfiguratorProduct } from '@store';
import { resolveModelUrl } from '@configurator/utils';

import { GarmentMeshes } from '../GarmentMeshes';
import { GltfSceneProvider } from '../GltfSceneProvider';
import { buildGltfNodeIndex } from '../gltf';

const GarmentModel = ({ children }: { children?: ReactNode }) => {
  const product = useConfiguratorProduct((state) => state.product);
  const modelUrl = resolveModelUrl(product);
  const loadedGltf = useGLTF(modelUrl, GLTF_USE_DRACO, GLTF_USE_MESHOPT);
  const gltf = useMemo(() => buildGltfNodeIndex(loadedGltf), [loadedGltf]);

  return (
    <GarmentMaterialRegistryProvider key={modelUrl}>
      <GltfSceneProvider gltf={gltf}>
        <GarmentMeshes />
        {children}
      </GltfSceneProvider>
    </GarmentMaterialRegistryProvider>
  );
};

export { GarmentModel };
