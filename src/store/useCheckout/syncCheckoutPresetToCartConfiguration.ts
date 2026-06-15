import type { checkoutRowPresetType } from '@types';

import { cloneCartItemConfiguration } from '../useConfigurationCart/cartItemConfiguration';
import { useConfigurationCart } from '../useConfigurationCart/useConfigurationCart';
import { sanitizeNumberText } from '../useGarmentNumber';

const syncCheckoutPresetToCartConfiguration = (cartItemId: string, preset: checkoutRowPresetType) => {
  const configuration = useConfigurationCart.getState().getConfiguration(cartItemId);
  if (!configuration) return;

  const nextConfiguration = cloneCartItemConfiguration(configuration);
  const sanitizedNumber = sanitizeNumberText(preset.number);
  let changed = false;

  if (nextConfiguration.name.instances.length > 0 && nextConfiguration.name.instances.some((instance) => instance.text !== preset.name)) {
    nextConfiguration.name.instances = nextConfiguration.name.instances.map((instance) => ({ ...instance, text: preset.name }));
    changed = true;
  }

  if (nextConfiguration.number.instances.length > 0 && nextConfiguration.number.instances.some((instance) => instance.text !== sanitizedNumber)) {
    nextConfiguration.number.instances = nextConfiguration.number.instances.map((instance) => ({ ...instance, text: sanitizedNumber }));
    changed = true;
  }

  if (changed) {
    useConfigurationCart.getState().saveConfiguration(cartItemId, nextConfiguration);
  }
};

export { syncCheckoutPresetToCartConfiguration };
