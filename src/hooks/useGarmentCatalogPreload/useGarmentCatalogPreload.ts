'use client';

import { useCallback, useEffect } from 'react';

import { preloadGarmentAppearance, preloadGarmentProduct, preloadGarmentScene } from '@configurator';
import type { modelIdType } from '@types';
import { hasModel } from '@utils';

const warmGarmentCatalogAssets = (modelId: modelIdType) => {
  preloadGarmentProduct(modelId);
  preloadGarmentAppearance(modelId);
  preloadGarmentScene(modelId);
};

const useGarmentCatalogPreload = () => {
  const warmBySlug = useCallback((slug: string) => {
    if (!hasModel(slug)) return;
    warmGarmentCatalogAssets(slug as modelIdType);
  }, []);

  const warmByModelId = useCallback((modelId: modelIdType) => {
    warmGarmentCatalogAssets(modelId);
  }, []);

  return { warmBySlug, warmByModelId };
};

const useGarmentCatalogPreloadEffect = (modelIds: modelIdType[]) => {
  useEffect(() => {
    for (const modelId of modelIds) {
      preloadGarmentProduct(modelId);
    }
  }, [modelIds]);
};

export { useGarmentCatalogPreload, useGarmentCatalogPreloadEffect, warmGarmentCatalogAssets };
