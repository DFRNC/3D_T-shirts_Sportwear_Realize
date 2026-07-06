'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { CHECKOUT_CREATE_ORDER_LABEL, CHECKOUT_CUTTING_EXPORT_LABEL, CHECKOUT_CUTTING_EXPORT_PATH } from '@constants';
import { useCheckoutOrderExport } from '@hooks';
import { registerCheckoutE2eDebug } from '@store/useCheckout/registerCheckoutE2eDebug';
import { Button, Flex } from '@atoms';
import { CheckoutOrderExportDocument } from '@molecules/CheckoutOrderExport/CheckoutOrderExportDocument';

const CheckoutOrderExport = () => {
  const { documentRef, exportData, exportOrder } = useCheckoutOrderExport();
  const [isDocumentReady, setIsDocumentReady] = useState(false);

  useEffect(() => registerCheckoutE2eDebug(), []);

  useEffect(() => {
    setTimeout(() => {
      setIsDocumentReady(true);
    }, 100);
  }, []);

  return (
    <div className="w-full">
      <Flex className="flex-wrap items-center gap-3">
        <Button
          type="button"
          variant="default"
          size="sm"
          onClick={() => void exportOrder()}
          data-testid="checkout-create-order-button"
          className="h-12 rounded-[8px] bg-base-black px-8 text-[16px] font-semibold text-white hover:bg-base-black/90"
        >
          {CHECKOUT_CREATE_ORDER_LABEL}
        </Button>

        <Link
          href={CHECKOUT_CUTTING_EXPORT_PATH}
          data-testid="checkout-cutting-export-link"
          className="inline-flex h-12 items-center justify-center rounded-[8px] border border-gray-20 bg-white px-8 text-[16px] font-semibold text-default transition-colors hover:bg-gray-100"
        >
          {CHECKOUT_CUTTING_EXPORT_LABEL}
        </Link>
      </Flex>

      {isDocumentReady ? (
        <div
          ref={documentRef}
          data-testid="checkout-order-export-host"
          aria-hidden
          className="pointer-events-none fixed top-0 left-[-9999px] w-[794px] overflow-hidden opacity-0"
        >
          <CheckoutOrderExportDocument exportData={exportData} />
        </div>
      ) : null}
    </div>
  );
};

export { CheckoutOrderExport };
