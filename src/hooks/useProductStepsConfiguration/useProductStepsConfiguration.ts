'use client';

import { useEffect, useMemo } from 'react';

import { STEPS_CONFIGURATION } from '@molecules';
import type { configuratorStepValueType } from '@configurator/types';
import { useConfigurationControl, useConfiguratorProduct } from '@store';

import { resolveProductStepsConfiguration } from '../resolveProductStepsConfiguration';

const useProductStepsConfiguration = () => {
  const product = useConfiguratorProduct((state) => state.product);
  const activeStep = useConfigurationControl((state) => state.activeStep);
  const setActiveStep = useConfigurationControl((state) => state.setActiveStep);

  const availableSteps = useMemo(() => {
    const availableValues = new Set<configuratorStepValueType>(resolveProductStepsConfiguration(product).map((step) => step.value));

    return STEPS_CONFIGURATION.filter((step) => availableValues.has(step.value as configuratorStepValueType));
  }, [product]);

  useEffect(() => {
    if (availableSteps.some((step) => step.step === activeStep)) return;
    setActiveStep(availableSteps[0]?.step ?? 1);
  }, [activeStep, availableSteps, setActiveStep]);

  return availableSteps;
};

export { useProductStepsConfiguration };
