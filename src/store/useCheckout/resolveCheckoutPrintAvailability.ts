import type { cartItemConfigurationType, checkoutPrintAvailabilityType } from '@types';

const resolveCheckoutPrintAvailability = (configuration?: cartItemConfigurationType): checkoutPrintAvailabilityType => ({
  hasName: (configuration?.name.instances.length ?? 0) > 0,
  hasNumber: (configuration?.number.instances.length ?? 0) > 0,
  hasTesto: (configuration?.testo.instances.length ?? 0) > 0,
});

export { resolveCheckoutPrintAvailability };
