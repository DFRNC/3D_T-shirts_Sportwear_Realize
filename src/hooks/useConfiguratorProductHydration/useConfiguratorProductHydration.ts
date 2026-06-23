import { useLayoutEffect } from 'react';

import type { garmentBusinessType, modelIdType } from '@types';
import { useConfigurationCart } from '@store';
import { DEFAULT_MODEL_ID, deriveLocalBusiness, hasModel } from '@utils';

type configuratorProductType = {
  modelId: modelIdType;
  business: garmentBusinessType;
};

/**
 * Hydrates the configurator from the `/configurator/:slug` route loader:
 * stamps the Shopify product (model id + business data) onto the active cart item,
 * which in turn loads the matching local geometry into the configurator product store.
 *
 * Falls back to the default model when the product has no `custom.id` mapping
 * (or maps to an unknown model) so the configurator still opens.
 */
const useConfiguratorProductHydration = (slug: string, product: configuratorProductType | null) => {
  useLayoutEffect(() => {
    const isMapped = product != null && hasModel(product.modelId);

    const modelId = isMapped ? product.modelId : DEFAULT_MODEL_ID;
    const business = isMapped ? product.business : deriveLocalBusiness(modelId);

    useConfigurationCart.getState().setActiveItemProduct({ slug, modelId, business });
  }, [slug, product]);
};

export { useConfiguratorProductHydration };
