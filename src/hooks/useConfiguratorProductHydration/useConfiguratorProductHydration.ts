'use client';

import { useLayoutEffect, useRef } from 'react';

import type { configuratorProductHydrationType } from '@configurator/types';

import { applyConfiguratorRouteProduct } from '@configurator';

const useConfiguratorProductHydration = (slug: string, product: configuratorProductHydrationType | null) => {
  const appliedRouteKeyRef = useRef<string | null>(null);

  useLayoutEffect(() => {
    const routeKey = `${slug}:${product?.modelId ?? 'local'}`;
    if (appliedRouteKeyRef.current === routeKey) return;

    appliedRouteKeyRef.current = routeKey;
    applyConfiguratorRouteProduct(slug, product);
  }, [slug, product]);
};

export { useConfiguratorProductHydration };
