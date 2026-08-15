'use client';

import { Container } from '@atoms';
import { CheckoutView } from '@organisms';
import { useCheckoutInit } from '@hooks';
import { CheckoutPreviewCaptureHost } from '@configurator';

const CheckoutPage = () => {
  useCheckoutInit();

  return (
    <Container className="flex min-h-0 flex-1 flex-col max-sm:pb-32 pt-[75px] max-[1023px]:pt-[72px] max-[767px]:pt-[64px] max-[767px]:pt-[64px]">
      <CheckoutPreviewCaptureHost />
      <CheckoutView />
    </Container>
  );
};

export { CheckoutPage };
