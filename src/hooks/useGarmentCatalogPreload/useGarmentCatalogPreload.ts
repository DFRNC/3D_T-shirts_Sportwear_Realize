'use client';

import { useCallback, useEffect } from 'react';

import { preloadGarmentAppearance, preloadGarmentProduct, preloadGarmentScene } from '@configurator';
import type { modelIdType } from '@types';
import { getModel, hasModel } from '@utils';

const warmGarmentCatalogAssets = (modelId: modelIdType) => {
  const product = getModel(modelId);
  if (!product) return;

  preloadGarmentProduct(product);
  preloadGarmentAppearance(product);
  preloadGarmentScene(product);
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
      const product = getModel(modelId);
      if (product) preloadGarmentProduct(product);
    }
  }, [modelIds]);
};

export { useGarmentCatalogPreload, useGarmentCatalogPreloadEffect, warmGarmentCatalogAssets };
