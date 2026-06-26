import { CONFIGURATOR_STEP_META } from '@constants';
import type { configuratorStepMetaItemType } from '@constants';
import type { garmentConfigType } from '@types';

import { isConfiguratorStepAvailable } from './isConfiguratorStepAvailable';

const resolveProductStepsConfiguration = (product: garmentConfigType): configuratorStepMetaItemType[] =>
  CONFIGURATOR_STEP_META.filter((step) => isConfiguratorStepAvailable(product, step.value));

export { resolveProductStepsConfiguration };
