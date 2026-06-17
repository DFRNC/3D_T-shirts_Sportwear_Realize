'use client';

import { useCallback } from 'react';

import { AtomTabs } from '@atoms';
import { useProductStepsConfiguration } from '@hooks';
import { useConfigurationControl } from '@store';

const HeaderConfiguration = () => {
  const activeStep = useConfigurationControl((state) => state.activeStep);
  const setActiveStep = useConfigurationControl((state) => state.setActiveStep);
  const availableSteps = useProductStepsConfiguration();
  const activeItem = availableSteps.find((item) => item.step === activeStep) ?? availableSteps[0];

  const handleValueChange = useCallback(
    (value: string) => {
      const step = availableSteps.find((item) => item.value === value)?.step;
      if (step) setActiveStep(step);
    },
    [availableSteps, setActiveStep],
  );

  if (!activeItem) return null;

  return (
    <header className="flex items-center justify-center bg-white py-2">
      <AtomTabs variant="configurator" items={availableSteps} value={activeItem.value} onValueChange={handleValueChange} hideContent />
    </header>
  );
};

export { HeaderConfiguration };
