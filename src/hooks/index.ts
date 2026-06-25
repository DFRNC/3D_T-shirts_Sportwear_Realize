'use client';

export { useAppNavigate, buildAppPath } from './useAppNavigate';
export { useConfiguratorInitialSceneLoad } from './useConfiguratorInitialSceneLoad';
export { useConfiguratorProductHydration } from './useConfiguratorProductHydration';
export { useSceneTransitionTrigger } from './useSceneTransitionTrigger';
export { useCheckoutConfigurationTable } from './useCheckoutConfigurationTable';
export { useCheckoutInit } from './useCheckoutInit';
export { useCheckoutSummary } from './useCheckoutSummary';
export { useNavigateToCheckout } from './useNavigateToCheckout';
export { useNavigateToConfigurator } from './useNavigateToConfigurator';
export { useConfigurationCartSync } from './useConfigurationCartSync';
export { useConfigurationPositionPicker } from './useConfigurationPositionPicker';
export { useControlledState } from './useControlledState';
export { useSlidingIndicator } from './useSlidingIndicator';
export { useShowConfigurationSkeleton } from './useShowConfigurationSkeleton';
export { useLogoFileHandler } from './useLogoFileHandler';
export { useProductStepsConfiguration } from './useProductStepsConfiguration';
export { useStepLogo } from './useStepLogo';
export { useTintedDesignSvgSrc } from './useTintedDesignSvgSrc';

/** @deprecated Import from `@configurator/hooks` instead. */
export {
  useCartPreviewCapture,
  useGarmentAppearance,
  useGarmentLogoTextures,
  useGarmentNameTextures,
  useGarmentTextures,
  useGizmoButtonHover,
  useGizmoIconAtlas,
  useGizmoPointerContext,
  useGizmoSelection,
  usePrintGizmoDrag,
  usePrintPlacementMigration,
} from '@configurator/hooks';
export type { GizmoSelectionStore, PrintPlacementInstance } from '@configurator/hooks';
