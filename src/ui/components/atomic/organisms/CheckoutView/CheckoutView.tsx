'use client';

import { Button, Flex, Grid, SvgIcon } from '@atoms';

import { useNavigateToConfigurator } from '@hooks';
import { CheckoutProductCard, CheckoutSummaryPanel } from '@molecules';
import { useCheckout } from '@store';

const CheckoutView = () => {
  const { navigateToConfigurator } = useNavigateToConfigurator();
  const products = useCheckout((state) => state.products);

  return (
    <Grid className="grid-cols-[auto_400px]">
      <Flex className="flex-col items-start justify-start gap-6 pt-9 w-full">
        {products.map((product) => (
          <CheckoutProductCard key={product.cartItemId} product={product} />
        ))}
        <Button size="sm" className="self-start border border-gray-20 bg-white" onClick={navigateToConfigurator}>
          <SvgIcon name="plus" />
          Aggiungi altri prodotti
        </Button>
      </Flex>

      <CheckoutSummaryPanel />
    </Grid>
  );
};

export { CheckoutView };
