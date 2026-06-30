'use client';

import { GarmentMaterialRegistryProvider } from '@configurator/providers';
import { buildGltfNodeIndex, GarmentMeshes, GltfSceneProvider } from '@configurator/scene';
import { GLTF_USE_DRACO, GLTF_USE_MESHOPT, isGltfModelReady, resolveModelUrl } from '@configurator/utils';
import { useGLTF } from '@react-three/drei';
import { useConfiguratorProduct } from '@store';
import { type ReactNode, useMemo } from 'react';

const GarmentModelLoaded = ({ modelUrl, children }: { modelUrl: string; children?: ReactNode }) => {
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

const GarmentModel = ({ children }: { children?: ReactNode }) => {
  const product = useConfiguratorProduct((state) => state.product);
  const modelUrl = resolveModelUrl(product);

  if (!isGltfModelReady(modelUrl)) {
    return null;
  }

  return <GarmentModelLoaded modelUrl={modelUrl}>{children}</GarmentModelLoaded>;
};

export { GarmentModel };
