'use client';

import { Container } from '@atoms';
import { ModalInfo, ModalShare } from '@molecules';
import { CheckoutView } from '@organisms';
import { useCheckoutInit } from '@hooks';
import { CheckoutPreviewCaptureHost } from '@configurator';

const CheckoutPage = () => {
  useCheckoutInit();

  return (
    <Container className="flex min-h-0 flex-1 flex-col pt-(--header-height,0px)">
      <CheckoutPreviewCaptureHost />
      <CheckoutView />
      <ModalInfo />
      <ModalShare />
    </Container>
  );
};

export { CheckoutPage };
