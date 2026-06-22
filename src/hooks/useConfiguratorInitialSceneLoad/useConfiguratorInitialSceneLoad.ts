import { useEffect } from 'react';

import { useConfiguratorSceneLoad } from '@store';
import { preloadConfiguratorScene } from '@utils';

const useConfiguratorInitialSceneLoad = () => {
  useEffect(() => {
    useConfiguratorSceneLoad.getState().beginInitialSceneLoad();
    preloadConfiguratorScene();
  }, []);
};

export { useConfiguratorInitialSceneLoad };
