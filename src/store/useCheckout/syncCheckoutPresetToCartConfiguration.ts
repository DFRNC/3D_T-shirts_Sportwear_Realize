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

  if (nextConfiguration.name.instances[0] && nextConfiguration.name.instances[0].text !== preset.name) {
    nextConfiguration.name.instances[0] = { ...nextConfiguration.name.instances[0], text: preset.name };
    changed = true;
  }

  if (nextConfiguration.number.instances[0] && nextConfiguration.number.instances[0].text !== sanitizedNumber) {
    nextConfiguration.number.instances[0] = { ...nextConfiguration.number.instances[0], text: sanitizedNumber };
    changed = true;
  }

  if (changed) {
    useConfigurationCart.getState().saveConfiguration(cartItemId, nextConfiguration);
  }
};

export { syncCheckoutPresetToCartConfiguration };
