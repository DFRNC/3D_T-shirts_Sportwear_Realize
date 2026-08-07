'use client';

import { useCallback } from 'react';
import { AiOutlineBorderOuter } from 'react-icons/ai';
import { IoMdRedo, IoMdUndo } from 'react-icons/io';

import { Box, Button, Flex, Grid, SvgIcon, Text } from '@atoms';

import { useProductStepsConfiguration } from '@hooks';
import { useConfigurationControl, useTutorialDialog } from '@store';

const AsideConfigurationUtility = () => {
  const activeStep = useConfigurationControl((state) => state.activeStep);
  const goToPreviousStep = useConfigurationControl((state) => state.goToPreviousStep);
  const goToNextStep = useConfigurationControl((state) => state.goToNextStep);
  const isGizmoVisible = useConfigurationControl((state) => state.isGizmoVisible);
  const toggleGizmoVisible = useConfigurationControl((state) => state.toggleGizmoVisible);
  const setTutorialOpen = useTutorialDialog((state) => state.setIsOpen);
  const availableSteps = useProductStepsConfiguration();
  const firstStep = availableSteps[0]?.step ?? 1;
  const lastStep = availableSteps[availableSteps.length - 1]?.step ?? 1;

  const handleTutorial = useCallback(() => {
    setTutorialOpen(true);
  }, [setTutorialOpen]);

  const handleToggleGizmo = useCallback(() => {
    toggleGizmoVisible();
  }, [toggleGizmoVisible]);

  return (
    <Box variant="aside_utility" asChild>
      <aside>
        <Flex variant="aside_utility_column">
          <Grid variant="aside_utility_actions">
            <Button size="sm" onClick={goToPreviousStep} disabled={activeStep === firstStep} className="max-xl:size-8 max-xl:p-0 max-sm:size-9">
              <IoMdUndo className="size-4 max-sm:size-4" />
              <span className="max-xl:hidden">Annulla</span>
            </Button>
            <Button size="sm" onClick={goToNextStep} disabled={activeStep === lastStep} className="max-xl:size-8 max-xl:p-0 max-sm:size-9">
              <span className="max-xl:hidden">Ripristina</span>
              <IoMdRedo className="size-4 max-sm:size-4" />
            </Button>
          </Grid>
          <Flex variant="aside_utility_help_panel">
            <Text variant="aside_help_title">Hai bisogno di aiuto?</Text>
            <Button size="sm" variant="center" className="w-full max-xl:h-auto max-xl:flex-col max-xl:gap-1 max-xl:p-1.5 max-sm:h-20" onClick={handleTutorial}>
              <SvgIcon name="question" />
              <span className="max-xl:[writing-mode:vertical-rl] max-xl:text-[14px] max-sm:text-[11px]">Tutorial</span>
            </Button>
          </Flex>
          <Button
            size="sm"
            onClick={handleToggleGizmo}
            aria-pressed={isGizmoVisible}
            aria-label={isGizmoVisible ? 'Nascondi gizmo' : 'Mostra gizmo'}
            data-active={isGizmoVisible}
            className="hidden max-xl:flex max-xl:size-8 max-xl:p-0 max-sm:size-9 data-[active=false]:opacity-50"
          >
            <AiOutlineBorderOuter className="size-4 max-sm:size-4 shrink-0" aria-hidden />
          </Button>
        </Flex>
      </aside>
    </Box>
  );
};

export { AsideConfigurationUtility };
