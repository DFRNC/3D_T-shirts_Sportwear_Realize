'use client';

import { memo, useEffect, useMemo } from 'react';

import type { Mesh, Object3D } from 'three';

import type { preserveGltfMeshPropsType } from '@types';

const disposeMeshResources = (object: Object3D) => {
  object.traverse((child) => {
    if (!('isMesh' in child) || !child.isMesh) return;

    const mesh = child as Mesh;
    mesh.geometry?.dispose();

    const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    for (const material of materials) {
      material?.dispose();
    }
  });
};

const tagGarmentMeshes = (object: Object3D) => {
  object.traverse((child) => {
    if ('isMesh' in child && child.isMesh) child.userData.configuratorGarment = true;
  });
};

const PreserveGltfMesh = memo(({ meshName, node, renderOrder = 0 }: preserveGltfMeshPropsType) => {
  const instance = useMemo(() => {
    const clone = node.clone(true);
    tagGarmentMeshes(clone);
    return clone;
  }, [node]);

  useEffect(() => {
    return () => disposeMeshResources(instance);
  }, [instance]);

  return <primitive name={meshName} object={instance} renderOrder={renderOrder} />;
});

PreserveGltfMesh.displayName = 'PreserveGltfMesh';

export { PreserveGltfMesh };
