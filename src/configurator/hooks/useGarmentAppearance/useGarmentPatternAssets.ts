'use client';

import { type RefObject, useEffect } from 'react';

import type { Texture } from 'three';

import type { patternMaskPairType } from '@configurator/types';
import type { designPatternItemType } from '@types';
import { PATTERN_LAYER_COUNT } from '@configurator/constants';
import { emptyMaskPair, imageToMaskTexture, imageToTexture, resolveRasterDesignSrc, yieldToMain } from '@configurator/utils';
import { useConfiguratorSceneLoad } from '@store';

type garmentPatternAssetsRefsType = {
  logosTextureRef: RefObject<Texture | null>;
  maskTexturesRef: RefObject<patternMaskPairType>;
  masksPatternKeyRef: RefObject<string | null>;
  loadSessionRef: RefObject<number>;
  logosTextureFailedRef: RefObject<boolean>;
  maskTexturesFailedKeyRef: RefObject<string | null>;
};

type useGarmentPatternAssetsOptionsType = {
  productPath: string | null;
  productPathKey: string;
  defaultPattern: designPatternItemType | null;
  activePattern: designPatternItemType | null;
  activePatternKey: string | null;
  textureAnisotropy: number;
  refs: garmentPatternAssetsRefsType;
  syncAppearanceCache: (targetPath: string) => void;
  isLoadSessionActive: (session: number, targetPath: string) => boolean;
  reapplyAppearance: () => void;
};

const useGarmentPatternAssets = ({
  productPath,
  productPathKey,
  defaultPattern,
  activePattern,
  activePatternKey,
  textureAnisotropy,
  refs: { logosTextureRef, maskTexturesRef, masksPatternKeyRef, loadSessionRef, logosTextureFailedRef, maskTexturesFailedKeyRef },
  syncAppearanceCache,
  isLoadSessionActive,
  reapplyAppearance,
}: useGarmentPatternAssetsOptionsType) => {
  const isInitialSceneLoading = useConfiguratorSceneLoad((state) => state.isInitialSceneLoading);

  useEffect(() => {
    if (productPath !== productPathKey || isInitialSceneLoading) return;

    const logosSrc = defaultPattern?.parts[0]?.src ? resolveRasterDesignSrc(defaultPattern.parts[0].src) : null;
    if (!logosSrc || logosTextureRef.current) return;

    const session = loadSessionRef.current;
    const targetPath = productPathKey;
    let cancelled = false;

    void imageToTexture(logosSrc, { anisotropy: textureAnisotropy })
      .then((texture) => {
        if (cancelled || !isLoadSessionActive(session, targetPath)) return;

        logosTextureRef.current = texture;
        syncAppearanceCache(targetPath);
        reapplyAppearance();
      })
      .catch(() => {
        if (cancelled || !isLoadSessionActive(session, targetPath)) return;

        logosTextureFailedRef.current = true;
        reapplyAppearance();
      });

    return () => {
      cancelled = true;
    };
  }, [
    defaultPattern,
    isInitialSceneLoading,
    isLoadSessionActive,
    productPath,
    productPathKey,
    reapplyAppearance,
    loadSessionRef,
    logosTextureRef,
    logosTextureFailedRef,
    syncAppearanceCache,
    textureAnisotropy,
  ]);

  useEffect(() => {
    if (productPath !== productPathKey || isInitialSceneLoading) return;

    if (!activePatternKey) {
      maskTexturesRef.current = emptyMaskPair();
      masksPatternKeyRef.current = null;
      syncAppearanceCache(productPathKey);
      reapplyAppearance();
      return;
    }

    if (masksPatternKeyRef.current === activePatternKey && maskTexturesRef.current[0]) return;

    const session = loadSessionRef.current;
    const targetPath = productPathKey;
    let cancelled = false;

    const loadMasks = async () => {
      try {
        const masks = emptyMaskPair();
        const patternParts = activePattern!.parts.slice(0, PATTERN_LAYER_COUNT);

        for (let index = 0; index < patternParts.length; index += 1) {
          masks[index] = await imageToMaskTexture(resolveRasterDesignSrc(patternParts[index].src), { anisotropy: textureAnisotropy });
          await yieldToMain();
          if (cancelled || !isLoadSessionActive(session, targetPath)) return;
        }

        if (cancelled || !isLoadSessionActive(session, targetPath)) return;

        maskTexturesRef.current = masks;
        masksPatternKeyRef.current = activePatternKey;
        syncAppearanceCache(targetPath);
        reapplyAppearance();
      } catch {
        if (cancelled || !isLoadSessionActive(session, targetPath)) return;

        maskTexturesRef.current = emptyMaskPair();
        masksPatternKeyRef.current = activePatternKey;
        maskTexturesFailedKeyRef.current = activePatternKey;
        syncAppearanceCache(targetPath);
        reapplyAppearance();
      }
    };

    void loadMasks();

    return () => {
      cancelled = true;
    };
  }, [
    activePattern,
    activePatternKey,
    isInitialSceneLoading,
    isLoadSessionActive,
    productPath,
    productPathKey,
    reapplyAppearance,
    loadSessionRef,
    maskTexturesRef,
    maskTexturesFailedKeyRef,
    masksPatternKeyRef,
    syncAppearanceCache,
    textureAnisotropy,
  ]);
};

export { useGarmentPatternAssets };
export type { garmentPatternAssetsRefsType };
