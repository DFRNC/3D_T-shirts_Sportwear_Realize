import { requestConfiguratorCameraFocus } from '@configurator';
import type { uvPointType } from '@types';

const focusGarmentCamera = (target: { partId: string; uv: uvPointType }) => {
  requestConfiguratorCameraFocus({ partId: target.partId, uv: target.uv });
};

export { focusGarmentCamera };
