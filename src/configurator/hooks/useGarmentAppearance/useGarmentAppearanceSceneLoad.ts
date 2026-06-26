'use client';

import { type RefObject, useCallback, useEffect, useRef } from 'react';

import type { MeshStandardMaterial, Texture } from 'three';

import type { patternMaskPairType, pbrMapsType } from '@configurator/types';
import type { designPatternItemType, garmentConfigType } from '@types';
import { useConfiguratorSceneLoad } from '@store';
import { hasPrintableGarmentParts, resolveRasterDesignSrc, scheduleGarmentShaderUpgrade } from '@configurator/utils';

type garmentAppearanceSceneLoadRefsType = {
  logosTextureRef: RefObject<Texture | null>;
  maskTexturesRef: RefObject<patternMaskPairType>;
  masksPatternKeyRef: RefObject<string | null>;
  pendingFrameReapplyRef: RefObject<boolean>;
  initialLoadCompletedRef: RefObject<boolean>;
  transitionLoadCompletedRef: RefObject<boolean>;
  shaderUpgradePendingRef: RefObject<boolean>;
  cancelShaderUpgradeRef: RefObject<(() => void) | null>;
  logosTextureFailedRef: RefObject<boolean>;
  maskTexturesFailedKeyRef: RefObject<string | null>;
};

type useGarmentAppearanceSceneLoadOptionsType = {
  product: garmentConfigType;
  partIds: readonly string[];
  productPath: string | null;
  productPathKey: string;
  activePatternKey: string | null;
  defaultPattern: designPatternItemType | null;
  pbrMaps: pbrMapsType | null;
  hasMaterialsForParts: (partIds: readonly string[]) => boolean;
  getMaterials: (partId: string) => readonly MeshStandardMaterial[];
  bumpRevision: () => void;
  invalidate: () => void;
  isInitialSceneLoading: boolean;
  isSceneTransitionLoading: boolean;
  markInitialSceneLoaded: () => void;
  markSceneTransitionLoaded: () => void;
  loaderSession: number;
  refs: garmentAppearanceSceneLoadRefsType;
  reapplyAppearanceCore: () => void;
};

const useGarmentAppearanceSceneLoad = ({
  product,
  partIds,
  productPath,
  productPathKey,
  activePatternKey,
  defaultPattern,
  pbrMaps,
  hasMaterialsForParts,
  getMaterials,
  bumpRevision,
  invalidate,
  isInitialSceneLoading,
  isSceneTransitionLoading,
  markInitialSceneLoaded,
  markSceneTransitionLoaded,
  loaderSession,
  refs: {
    logosTextureRef,
    maskTexturesRef,
    masksPatternKeyRef,
    initialLoadCompletedRef,
    transitionLoadCompletedRef,
    shaderUpgradePendingRef,
    cancelShaderUpgradeRef,
    logosTextureFailedRef,
    maskTexturesFailedKeyRef,
  },
  reapplyAppearanceCore,
}: useGarmentAppearanceSceneLoadOptionsType) => {
  const hasPrintableParts = hasPrintableGarmentParts(product);

  const isCoreSceneReady = useCallback(() => {
    if (!hasMaterialsForParts(partIds)) return false;
    if (hasPrintableParts && !pbrMaps) return false;
    if (productPath !== productPathKey) return false;
    return true;
  }, [hasMaterialsForParts, hasPrintableParts, partIds, pbrMaps, productPath, productPathKey]);

  const isTransitionAppearanceReady = useCallback(() => {
    if (!isCoreSceneReady()) return false;

    const logosSrc = defaultPattern?.parts[0]?.src ? resolveRasterDesignSrc(defaultPattern.parts[0].src) : null;
    if (logosSrc && !logosTextureRef.current && !logosTextureFailedRef.current) return false;

    if (activePatternKey) {
      const masksReady =
        masksPatternKeyRef.current === activePatternKey && (Boolean(maskTexturesRef.current[0]) || maskTexturesFailedKeyRef.current === activePatternKey);
      if (!masksReady) return false;
    }

    return true;
  }, [
    activePatternKey,
    defaultPattern,
    isCoreSceneReady,
    logosTextureRef,
    logosTextureFailedRef,
    masksPatternKeyRef,
    maskTexturesRef,
    maskTexturesFailedKeyRef,
  ]);

  const finishSceneLoad = useCallback(
    (onLoaded: () => void) => {
      invalidate();
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          onLoaded();
        });
      });
    },
    [invalidate],
  );

  const runShaderUpgrade = useCallback(
    (onLoaded?: () => void): boolean => {
      if (shaderUpgradePendingRef.current) return false;

      shaderUpgradePendingRef.current = true;
      cancelShaderUpgradeRef.current?.();

      cancelShaderUpgradeRef.current = scheduleGarmentShaderUpgrade({
        parts: product.parts,
        getMaterials,
        invalidate,
        onComplete: () => {
          shaderUpgradePendingRef.current = false;
          reapplyAppearanceCore();
          bumpRevision();
          invalidate();
          if (onLoaded) finishSceneLoad(onLoaded);
        },
      });

      return true;
    },
    [
      bumpRevision,
      cancelShaderUpgradeRef,
      finishSceneLoad,
      getMaterials,
      invalidate,
      product.parts,
      reapplyAppearanceCore,
      shaderUpgradePendingRef,
    ],
  );

  const pendingInitialPaintRef = useRef(false);

  const completeInitialLoadAfterPaint = useCallback(() => {
    if (!pendingInitialPaintRef.current || initialLoadCompletedRef.current) return;

    pendingInitialPaintRef.current = false;
    initialLoadCompletedRef.current = true;
    const completeInitialLoad = () => {
      finishSceneLoad(() => {
        markInitialSceneLoaded();

        const sceneLoad = useConfiguratorSceneLoad.getState();
        if (sceneLoad.isSceneTransitionLoading) {
          sceneLoad.markSceneTransitionLoaded();
        }
      });
    };

    // Keep the initial loader visible until shader compilation finishes.
    runShaderUpgrade(completeInitialLoad);
  }, [finishSceneLoad, initialLoadCompletedRef, markInitialSceneLoaded, runShaderUpgrade]);

  const completeSceneLoadersIfReady = useCallback(() => {
    if (!initialLoadCompletedRef.current && isCoreSceneReady()) {
      pendingInitialPaintRef.current = true;
    }

    if (initialLoadCompletedRef.current) return;

    if (!isTransitionAppearanceReady()) return;

    if (isSceneTransitionLoading && !transitionLoadCompletedRef.current) {
      transitionLoadCompletedRef.current = true;
      if (!runShaderUpgrade(markSceneTransitionLoaded)) {
        finishSceneLoad(markSceneTransitionLoaded);
      }
    }
  }, [
    finishSceneLoad,
    initialLoadCompletedRef,
    isCoreSceneReady,
    isSceneTransitionLoading,
    isTransitionAppearanceReady,
    markSceneTransitionLoaded,
    runShaderUpgrade,
    transitionLoadCompletedRef,
  ]);

  useEffect(() => {
    initialLoadCompletedRef.current = false;
    pendingInitialPaintRef.current = false;
    transitionLoadCompletedRef.current = false;
    shaderUpgradePendingRef.current = false;
    cancelShaderUpgradeRef.current?.();
    cancelShaderUpgradeRef.current = null;
  }, [cancelShaderUpgradeRef, initialLoadCompletedRef, loaderSession, shaderUpgradePendingRef, transitionLoadCompletedRef]);

  useEffect(() => {
    transitionLoadCompletedRef.current = false;
    shaderUpgradePendingRef.current = false;
  }, [activePatternKey, shaderUpgradePendingRef, transitionLoadCompletedRef]);

  return { completeSceneLoadersIfReady, completeInitialLoadAfterPaint };
};

export { useGarmentAppearanceSceneLoad };
