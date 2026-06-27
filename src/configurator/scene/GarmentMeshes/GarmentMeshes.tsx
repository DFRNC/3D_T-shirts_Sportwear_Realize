'use client';

import { useCallback, useMemo } from 'react';

import type { Object3D } from 'three';

import { resolveModelUrl } from '@configurator/utils';
import { useConfiguratorProduct } from '@store';

import { GarmentPartMesh } from '../GarmentPartMesh';
import { useGltfScene } from '../GltfSceneProvider';
import { PreserveGltfMesh } from '../PreserveGltfMesh';
import { resolvePreserveMeshes } from '../resolvePreserveMeshes';
import { StaticGltfMesh } from '../StaticGltfMesh';
import { useProgressiveSceneReveal } from '../useProgressiveSceneReveal';

type garmentMeshEntryType = {
  key: string;
  registryKey: string;
  meshName: string;
  node: Object3D;
  renderOrder: number;
};

const GarmentMeshes = () => {
  const product = useConfiguratorProduct((state) => state.product);
  const modelUrl = resolveModelUrl(product);
  const { meshes, nodes } = useGltfScene();

  const resolveMeshNode = useCallback((meshName: string) => meshes[meshName] ?? nodes[meshName], [meshes, nodes]);
  const preserveMeshes = resolvePreserveMeshes(product.preserveGltfMeshes);

  const garmentEntries = useMemo(() => {
    return product.parts.flatMap((part) =>
      part.meshNames.flatMap((meshName): garmentMeshEntryType[] => {
        const node = resolveMeshNode(meshName);
        if (!node) return [];

        return [
          {
            key: `${part.id}-${meshName}`,
            registryKey: part.id,
            meshName,
            node,
            renderOrder: part.renderOrder ?? 0,
          },
        ];
      }),
    );
  }, [product.parts, resolveMeshNode]);

  const { revealedCount, isFullyRevealed } = useProgressiveSceneReveal(garmentEntries.length, modelUrl);

  return (
    <group>
      {garmentEntries.slice(0, revealedCount).map((entry) => (
        <GarmentPartMesh key={entry.key} registryKey={entry.registryKey} meshName={entry.meshName} node={entry.node} renderOrder={entry.renderOrder} />
      ))}
      {isFullyRevealed &&
        product.staticMeshes?.flatMap((group) =>
          group.meshNames.map((meshName) => {
            const node = resolveMeshNode(meshName);
            if (!node) return null;

            return <StaticGltfMesh key={`static-${meshName}`} meshName={meshName} node={node} renderOrder={group.renderOrder} />;
          }),
        )}
      {isFullyRevealed &&
        preserveMeshes.map(({ meshName, renderOrder }) => {
          const node = resolveMeshNode(meshName);
          if (!node) return null;

          return <PreserveGltfMesh key={`preserve-${meshName}`} meshName={meshName} node={node} renderOrder={renderOrder} />;
        })}
    </group>
  );
};

export { GarmentMeshes };
