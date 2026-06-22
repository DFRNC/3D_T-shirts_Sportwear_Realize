import { useRef } from "react";

import {
  AsideConfiguration,
  AsideConfigurationUtility,
  CartConfigurationSync,
  FooterConfiguration,
  HeaderConfiguration,
} from "@organisms";
import {
  ConfiguratorInitialLoader,
  ConfiguratorPage,
} from "@configurator";
import { useConfiguratorSceneLoad } from "@store";
import { preloadConfiguratorScene } from "@utils";

export default function ConfiguratorExperience() {
  const initialLoadStartedRef = useRef(false);

  if (!initialLoadStartedRef.current) {
    initialLoadStartedRef.current = true;
    useConfiguratorSceneLoad.getState().beginInitialSceneLoad();
    preloadConfiguratorScene();
  }

  return (
    <>
      <ConfiguratorInitialLoader />
      <CartConfigurationSync />
      <div className="relative grid min-h-0 flex-1 grid-cols-1 grid-rows-[auto_minmax(0,1fr)_auto] overflow-hidden">
        <HeaderConfiguration />
        <main className="grid min-h-0 grid-cols-[auto_minmax(0,1fr)_auto] overflow-hidden">
          <AsideConfiguration />
          <div className="min-h-0 min-w-0">
            <ConfiguratorPage />
          </div>
          <AsideConfigurationUtility />
        </main>
        <FooterConfiguration />
      </div>
    </>
  );
}
