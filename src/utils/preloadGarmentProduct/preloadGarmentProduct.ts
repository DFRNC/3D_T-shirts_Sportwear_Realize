
import { useGLTF } from '@react-three/drei';

import type { garmentConfigType, modelIdType } from '@types';

import { getModel } from '../garmentCatalog/garmentCatalog';
import { resolveModelUrl } from '../resolveModelUrl/resolveModelUrl';
import { resolvePbrTexturePaths } from '../resolvePbrTexturePaths/resolvePbrTexturePaths';

const preloadedPbrUrls = new Set<string>();

const preloadPbrTextureUrl = (url: string) => {
  if (preloadedPbrUrls.has(url)) return;
  preloadedPbrUrls.add(url);

  void fetch(url, { priority: 'low' })
    .then((response) => response.blob())
    .then((blob) => {
      if (!('createImageBitmap' in window)) return;
      return createImageBitmap(blob);
    })
    .then((bitmap) => bitmap?.close())
    .catch(() => {
      preloadedPbrUrls.delete(url);
    });
};

const preloadGarmentProductAssets = (product: garmentConfigType) => {
  useGLTF.preload(resolveModelUrl(product));

  const pbrPaths = resolvePbrTexturePaths(product);
  if (!pbrPaths) return;

  for (const url of Object.values(pbrPaths)) {
    preloadPbrTextureUrl(url);
  }
};

const preloadGarmentProduct = (modelId: modelIdType) => {
  const product = getModel(modelId);
  if (!product) return;

  preloadGarmentProductAssets(product);
};

export { preloadGarmentProduct, preloadGarmentProductAssets };
