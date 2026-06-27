'use client';





import { Configurator } from '@organisms/Configurator';
import { ConfiguratorCanvasLoader } from '@organisms/ConfiguratorCanvasLoader';
import { useConfiguratorSceneLoad } from '@store';
import { useEffect } from 'react';
const INITIAL_SCENE_WATCHDOG_MS = 8_000;

const ConfiguratorView = () => {
  const isRouteHydrated = useConfiguratorSceneLoad((state) => state.isRouteHydrated);
  const isInitialSceneLoading = useConfiguratorSceneLoad((state) => state.isInitialSceneLoading);
  const loaderSession = useConfiguratorSceneLoad((state) => state.loaderSession);

  useEffect(() => {
    if (!isRouteHydrated || !isInitialSceneLoading) return;

    const session = loaderSession;
    const timeoutId = window.setTimeout(() => {
      const state = useConfiguratorSceneLoad.getState();
      if (state.loaderSession !== session || !state.isInitialSceneLoading) return;
      state.markInitialSceneLoaded();
    }, INITIAL_SCENE_WATCHDOG_MS);

    return () => window.clearTimeout(timeoutId);
  }, [isRouteHydrated, isInitialSceneLoading, loaderSession]);

  if (!isRouteHydrated) {
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
