'use client';

import { Flex } from '@atoms';

import { getCatalogProductEntry, getProduct, resolveCartItemPreviewSrc } from '@utils';
import { useConfigurationCart } from '@store';

import { ProductCatalogPopover } from '../ProductCatalogPopover';
import { ProductSessionAddButton } from '../ProductSessionAddButton';
import { ProductSessionRow } from '../ProductSessionRow';

const CardAddProduct = () => {
  const items = useConfigurationCart((state) => state.items);
  const activeItemId = useConfigurationCart((state) => state.activeItemId);
  const addItem = useConfigurationCart((state) => state.addItem);
  const selectItem = useConfigurationCart((state) => state.selectItem);
  const removeItem = useConfigurationCart((state) => state.removeItem);

  const activeItem = items.find((item) => item.id === activeItemId) ?? items[0];

  return (
    <Flex className="absolute left-4 top-4 z-30 flex-col gap-0">
      {items.map((item) => {
        const product = getProduct(item.styleId, item.productIndex);
        if (!product) return null;

        const catalogEntry = getCatalogProductEntry(item.collection, item.slug);
        const displayName = catalogEntry?.name ?? product.name;

        return (
          <ProductSessionRow
            key={item.id}
            name={displayName}
            previewSrc={resolveCartItemPreviewSrc(item)}
            active={item.id === activeItemId}
            canRemove={items.length > 1}
            onSelect={() => selectItem(item.id)}
            onRemove={() => removeItem(item.id)}
          />
        );
      })}
      <ProductCatalogPopover activeCollection={activeItem.collection} onSelect={addItem}>
        <ProductSessionAddButton />
      </ProductCatalogPopover>
    </Flex>
  );
};

export { CardAddProduct };
