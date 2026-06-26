'use client';

import { useEffect, useState } from 'react';

import { useFrame } from '@react-three/fiber';

import { useConfiguratorSceneLoad } from '@store';

/** Mount scene nodes one per frame while loaders are active. */
const useProgressiveSceneReveal = (totalCount: number, resetKey: string) => {
  const isInitialSceneLoading = useConfiguratorSceneLoad((state) => state.isInitialSceneLoading);
  const isSceneTransitionLoading = useConfiguratorSceneLoad((state) => state.isSceneTransitionLoading);
  const shouldRevealProgressively = isInitialSceneLoading || isSceneTransitionLoading;

  const [revealedCount, setRevealedCount] = useState(() => (shouldRevealProgressively ? 0 : totalCount));

  useEffect(() => {
    setRevealedCount(shouldRevealProgressively ? 0 : totalCount);
  }, [resetKey, shouldRevealProgressively, totalCount]);

  useFrame(() => {
    if (!shouldRevealProgressively) return;

    setRevealedCount((current) => {
      if (current >= totalCount) return current;
      return current + 1;
    });
  });

  const effectiveCount = shouldRevealProgressively ? revealedCount : totalCount;

  return {
    revealedCount: effectiveCount,
    isFullyRevealed: effectiveCount >= totalCount,
  };
};

export { useProgressiveSceneReveal };
