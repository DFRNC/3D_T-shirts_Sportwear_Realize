'use client';

import type { headerConfigItemType } from '@types';
import type { configuratorStepValueType } from '@configurator/types';
import { CONFIGURATOR_STEP_META } from '@constants';

import { ConfigurationColorize } from './ConfigurationColorize';
import { ConfigurationDesign } from './ConfigurationDesign';
import { ConfigurationLogo } from './ConfigurationLogo';
import { ConfigurationNaming } from './ConfigurationNaming';
import { ConfigurationNumbers } from './ConfigurationNumbers';
import { ConfigurationShading } from './ConfigurationShading';
import { ConfigurationTesto } from './ConfigurationTesto';

const CONFIGURATION_STEP_CONTENT: Record<configuratorStepValueType, headerConfigItemType['content']> = {
  colore: ConfigurationColorize,
  design: ConfigurationDesign,
  shading: ConfigurationShading,
  name: ConfigurationNaming,
  number: ConfigurationNumbers,
  testo: ConfigurationTesto,
  logo: ConfigurationLogo,
};

const STEPS_CONFIGURATION: headerConfigItemType[] = CONFIGURATOR_STEP_META.map((step) => ({
  ...step,
  content: CONFIGURATION_STEP_CONTENT[step.value],
}));

export { STEPS_CONFIGURATION };
