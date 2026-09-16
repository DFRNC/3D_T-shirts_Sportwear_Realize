'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

import { SvgIcon } from '@atoms';
import { CHECKOUT_PRODUCT_ACTIONS } from '@constants';
import { useShareConfiguration } from '@hooks';
import { useInfoDialog } from '@store';
import type { checkoutProductActionIdType, checkoutProductActionsMenuPropsType } from '@types';
import { cn, downloadImageSource } from '@utils';

const CheckoutProductActionsMenu = ({ cartItemId, productName, previewSrc, sizeChart, className }: checkoutProductActionsMenuPropsType) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { shareConfiguration } = useShareConfiguration();
  const openInfoWithSizeChart = useInfoDialog((state) => state.openWithSizeChart);

  const handleAction = (actionId: checkoutProductActionIdType) => {
    setIsOpen(false);

    if (actionId === 'save-image') {
      void downloadImageSource(previewSrc, productName);
      return;
    }

    if (actionId === 'share') {
      void shareConfiguration(cartItemId);
      return;
    }

    if (actionId === 'order-info') openInfoWithSizeChart(sizeChart ?? null);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setIsOpen(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className={cn('relative flex flex-col items-center', className)} onClick={(event) => event.stopPropagation()}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-label="Azioni prodotto"
        className="flex cursor-pointer text-primary-10 transition-colors hover:text-default"
      >
        <SvgIcon name="three_dots" className="size-5" />
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute left-1/2 top-full z-30 -translate-x-1/2 pt-1.25 max-sm:left-auto max-sm:right-0 max-sm:translate-x-0"
          >
            <span
              className="absolute left-1/2 top-1.25 h-5 w-px -translate-x-1/2 bg-gray-30 max-sm:left-auto max-sm:right-[9.5px] max-sm:translate-x-0"
              aria-hidden
            />
            <div role="menu" className="mt-6 flex w-37.75 flex-col gap-1">
              {CHECKOUT_PRODUCT_ACTIONS.map((action) => (
                <button
                  key={action.id}
                  type="button"
                  role="menuitem"
                  onClick={() => handleAction(action.id)}
                  className="flex h-[28.5px] w-full shrink-0 cursor-pointer items-center gap-2 rounded-sm bg-primary px-3 py-1.5 text-left text-[12px] leading-3.75 font-semibold text-default transition-colors hover:bg-primary-button"
                >
                  <SvgIcon name={action.icon} className="size-3.5 shrink-0" />
                  {action.label}
                </button>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export { CheckoutProductActionsMenu };
