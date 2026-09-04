'use client';

import { useEffect } from 'react';

import { isEmbeddedSession } from '@utils';

// iOS WebKit inside in-app browsers (Viber, Telegram) can compute dvh/svh against a stale
// viewport on the very first paint of a cross-origin iframe: the toolbar chrome hasn't
// settled yet, so both the host page and this frame lay out against the wrong height —
// the Shopify header and our step tabs end up pushed outside the visible area. Returning
// from another site (bfcache restore / visibility change) always fixes it, because that
// transition forces WebKit to recompute viewport units. This bridge forces that same
// recompute proactively: nudging this frame's own height by a fraction of a pixel
// invalidates layout enough for WebKit to re-resolve dvh/svh across the frame chain.
const kickViewportRecalculation = () => {
  const { documentElement } = document;
  const previousMinHeight = documentElement.style.minHeight;

  documentElement.style.minHeight = 'calc(100dvh + 0.01px)';

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      documentElement.style.minHeight = previousMinHeight;
    });
  });
};

const EmbeddedViewportKickBridge = () => {
  useEffect(() => {
    if (!isEmbeddedSession() || window.parent === window) return;

    kickViewportRecalculation();

    const onVisible = () => {
      if (document.visibilityState === 'visible') kickViewportRecalculation();
    };

    window.addEventListener('pageshow', kickViewportRecalculation);
    document.addEventListener('visibilitychange', onVisible);
    window.addEventListener('focus', kickViewportRecalculation);

    return () => {
      window.removeEventListener('pageshow', kickViewportRecalculation);
      document.removeEventListener('visibilitychange', onVisible);
      window.removeEventListener('focus', kickViewportRecalculation);
    };
  }, []);

  return null;
};

export { EmbeddedViewportKickBridge };
