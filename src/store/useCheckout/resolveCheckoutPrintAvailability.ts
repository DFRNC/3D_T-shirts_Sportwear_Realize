import type { cartItemConfigurationType, checkoutPrintAvailabilityType, garmentConfigType } from '@types';
import { isConfiguratorStepAvailable } from '@utils';

const resolveCheckoutPrintAvailability = (product?: garmentConfigType, _configuration?: cartItemConfigurationType): checkoutPrintAvailabilityType => {
  if (!product) {
    return {
      hasName: true,
      hasNumber: true,
      hasTesto: true,
    };
  }

  return {
    hasName: isConfiguratorStepAvailable(product, 'name'),
    hasNumber: isConfiguratorStepAvailable(product, 'number'),
    hasTesto: isConfiguratorStepAvailable(product, 'testo'),
  };
};

export { resolveCheckoutPrintAvailability };
