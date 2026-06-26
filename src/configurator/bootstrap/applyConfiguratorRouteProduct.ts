import type { configuratorProductHydrationType } from '@configurator/types';
import { useConfigurationCart, useConfiguratorSceneLoad } from '@store';

import { DEFAULT_MODEL_ID, deriveLocalBusiness, hasModel } from '@utils';
import { preloadGarmentScene } from '../scene';
import { preloadGarmentAppearance, preloadGarmentProduct } from '../utils';

const resolveRouteModel = (slug: string, product: configuratorProductHydrationType | null) => {
  const slugModelId = hasModel(slug) ? slug : null;
  const isMapped = product != null && hasModel(product.modelId);

  const modelId = isMapped ? product.modelId : slugModelId ?? DEFAULT_MODEL_ID;
  const business = isMapped
    ? product.business
    : slugModelId
      ? { ...deriveLocalBusiness(slugModelId), handle: slug }
      : deriveLocalBusiness(modelId);

  return { modelId, business };
};

const applyConfiguratorRouteProduct = (slug: string, product: configuratorProductHydrationType | null) => {
  const { modelId, business } = resolveRouteModel(slug, product);

  useConfiguratorSceneLoad.getState().beginInitialSceneLoad();
  useConfigurationCart.getState().setActiveItemProduct({ slug, modelId, business });
  preloadGarmentProduct(modelId);
  preloadGarmentAppearance(modelId);
  preloadGarmentScene();
  useConfiguratorSceneLoad.getState().markRouteHydrated();
};

export { applyConfiguratorRouteProduct, resolveRouteModel };
