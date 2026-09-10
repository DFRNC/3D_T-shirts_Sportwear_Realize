'use client';

import { useEffect } from 'react';

const IS_IOS =
  typeof navigator !== 'undefined' &&
  (/iP(hone|od|ad)/.test(navigator.platform || '') ||
    /iP(hone|od|ad)/.test(navigator.userAgent || '') ||
    (navigator.platform === 'MacIntel' && (navigator.maxTouchPoints || 0) > 1));

const readViewportHeight = (): number => {
  const vv = window.visualViewport;
  const vpH = vv ? Math.round(vv.height) : window.innerHeight;
  const screenH = window.screen?.availHeight ?? 0;
  const clientH = document.documentElement.clientHeight;

  let height = vpH;

  const isClamped = IS_IOS && Math.abs(window.innerHeight - clientH) > 40 && screenH - vpH > 60;
  if (isClamped) {
    height = screenH;
  }

  if (!(height > 120 && height < 4000)) {
    height = window.innerHeight;
  }

  return height;
};

const EmbeddedViewportKickBridge = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let lastVh = 0;
    const apply = () => {
      const height = readViewportHeight();
      if (height > 120 && (height > lastVh || height < lastVh - 60)) {
        lastVh = height;
        document.documentElement.style.setProperty('--configurator-vh', `${Math.round(height)}px`);
      }
    };

    apply();
    const raf = requestAnimationFrame(apply);
    const timers = [150, 400, 900, 1500, 2500, 4000].map((ms) => window.setTimeout(apply, ms));

    const onOrientation = () => {
      apply();
      window.setTimeout(apply, 300);
    };

    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', apply);
      window.visualViewport.addEventListener('scroll', apply);
    } else {
      window.addEventListener('resize', apply);
    }
    window.addEventListener('orientationchange', onOrientation);
    window.addEventListener('pageshow', apply);

    return () => {
      cancelAnimationFrame(raf);
      timers.forEach(window.clearTimeout);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', apply);
        window.visualViewport.removeEventListener('scroll', apply);
      } else {
        window.removeEventListener('resize', apply);
      }
      window.removeEventListener('orientationchange', onOrientation);
      window.removeEventListener('pageshow', apply);
    };
  }, []);

  return null;
};

export { EmbeddedViewportKickBridge };
