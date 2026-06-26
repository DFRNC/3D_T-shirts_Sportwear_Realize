'use client';

import { useEffect, useMemo, useState } from 'react';

import { ensureGarmentGltfParsed, resolveModelUrl } from '@configurator';
import { useConfiguratorProduct, useConfiguratorSceneLoad } from '@store';

import { Configurator } from '../Configurator';
import { ConfiguratorCanvasLoader } from '../ConfiguratorCanvasLoader';

const INITIAL_SCENE_WATCHDOG_MS = 8_000;

const ConfiguratorView = () => {
  const isRouteHydrated = useConfiguratorSceneLoad((state) => state.isRouteHydrated);
  const isInitialSceneLoading = useConfiguratorSceneLoad((state) => state.isInitialSceneLoading);
  const loaderSession = useConfiguratorSceneLoad((state) => state.loaderSession);
  const product = useConfiguratorProduct((state) => state.product);
  const modelUrl = useMemo(() => resolveModelUrl(product), [product]);
  const [isGltfReady, setIsGltfReady] = useState(false);

  useEffect(() => {
    if (!isRouteHydrated) {
      setIsGltfReady(false);
      return;
    }

    let cancelled = false;
    setIsGltfReady(false);

    void ensureGarmentGltfParsed(modelUrl)
      .then(() => {
        if (!cancelled) setIsGltfReady(true);
      })
      .catch(() => {
        if (!cancelled) setIsGltfReady(true);
      });

    return () => {
      cancelled = true;
    };
  }, [isRouteHydrated, modelUrl]);

  useEffect(() => {
    if (!isRouteHydrated || !isGltfReady || !isInitialSceneLoading) return;

    const session = loaderSession;
    const timeoutId = window.setTimeout(() => {
      const state = useConfiguratorSceneLoad.getState();
      if (state.loaderSession !== session || !state.isInitialSceneLoading) return;
      state.markInitialSceneLoaded();
    }, INITIAL_SCENE_WATCHDOG_MS);

    return () => window.clearTimeout(timeoutId);
  }, [isGltfReady, isInitialSceneLoading, isRouteHydrated, loaderSession]);

  if (!isRouteHydrated || !isGltfReady) {
    return <div className="relative h-full min-h-0 min-w-0 w-full" />;
  }

  return (
    <div className="relative h-full min-h-0 min-w-0 w-full">
      <Configurator />
      <ConfiguratorCanvasLoader />
    </div>
  );
};

export { ConfiguratorView };
