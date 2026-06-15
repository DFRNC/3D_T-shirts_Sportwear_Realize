import { CHECKOUT_DEFAULT_SIZE } from '@constants';
import type { cartItemConfigurationType, checkoutRowPresetType } from '@types';

import { sanitizeNumberText } from '../useGarmentNumber';

const createCheckoutRow = (size: string, name = '', number = '', quantity = 1) => ({
  id: crypto.randomUUID(),
  size,
  name,
  number,
  quantity,
});

const extractCheckoutRowPreset = (configuration?: cartItemConfigurationType): checkoutRowPresetType => ({
  size: CHECKOUT_DEFAULT_SIZE,
  name: configuration?.name.instances[0]?.text ?? '',
  number: sanitizeNumberText(configuration?.number.instances[0]?.text ?? ''),
});

const createCheckoutRowFromPreset = (preset: checkoutRowPresetType) => createCheckoutRow(preset.size, preset.name, preset.number);

const buildCheckoutRows = (configuration?: cartItemConfigurationType) => [createCheckoutRowFromPreset(extractCheckoutRowPreset(configuration))];

export { buildCheckoutRows, createCheckoutRow, createCheckoutRowFromPreset, extractCheckoutRowPreset };
