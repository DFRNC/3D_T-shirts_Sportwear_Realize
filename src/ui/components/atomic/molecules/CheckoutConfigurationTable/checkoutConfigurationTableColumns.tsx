'use client';

import { Button, SvgIcon } from '@atoms';

import { CHECKOUT_CONFIGURATION_TABLE_COLUMNS } from '@constants';
import type { checkoutConfigurationTableColumnHandlersType, checkoutConfigurationTableColumnType } from '@types';
import { NUMBER_MAX_LENGTH, sanitizeNumberText } from '@store';

import { CheckoutQuantityStepper } from '../CheckoutQuantityStepper';
import { CheckoutSizePopover } from '../CheckoutSizePopover';
import { CheckoutTableEditableCell } from '../CheckoutTableEditableCell';

const getColumnSizing = (id: (typeof CHECKOUT_CONFIGURATION_TABLE_COLUMNS)[number]['id']) => {
  const column = CHECKOUT_CONFIGURATION_TABLE_COLUMNS.find((item) => item.id === id);

  if (!column) {
    throw new Error(`Unknown checkout configuration table column: ${id}`);
  }

  const { size, minSize } = column;

  return {
    size,
    minSize,
    ...('maxSize' in column ? { maxSize: column.maxSize } : {}),
  };
};

const createCheckoutConfigurationTableColumns = ({
  onPatchRow,
  onRemoveRow,
}: checkoutConfigurationTableColumnHandlersType): checkoutConfigurationTableColumnType[] => [
  {
    id: 'row',
    header: 'Riga',
    ...getColumnSizing('row'),
    cell: ({ index }) => <span className="text-[16px]">{index + 1}</span>,
  },
  {
    id: 'size',
    header: 'Taglia',
    ...getColumnSizing('size'),
    meta: { cellClassName: 'p-0' },
    cell: ({ row }) => <CheckoutSizePopover value={row.size} onChange={(size) => onPatchRow(row.id, { size })} />,
  },
  {
    id: 'name',
    header: 'Nome',
    ...getColumnSizing('name'),
    meta: { grow: true },
    cell: ({ row }) => <CheckoutTableEditableCell value={row.name} placeholder="Nome" onChange={(name) => onPatchRow(row.id, { name })} />,
  },
  {
    id: 'number',
    header: 'Numero',
    ...getColumnSizing('number'),
    cell: ({ row }) => (
      <CheckoutTableEditableCell
        value={row.number}
        placeholder="00"
        inputMode="numeric"
        maxLength={NUMBER_MAX_LENGTH}
        formatValue={sanitizeNumberText}
        onChange={(number) => onPatchRow(row.id, { number })}
      />
    ),
  },
  {
    id: 'quantity',
    header: 'Quantità',
    ...getColumnSizing('quantity'),
    cell: ({ row }) => (
      <CheckoutQuantityStepper
        quantity={row.quantity}
        onDecrease={() => onPatchRow(row.id, { quantity: row.quantity - 1 })}
        onIncrease={() => onPatchRow(row.id, { quantity: row.quantity + 1 })}
      />
    ),
  },
  {
    id: 'actions',
    header: 'Modifica',
    ...getColumnSizing('actions'),
    cell: ({ row }) => (
      <Button type="button" variant="delete" size="delete" className="mx-auto" onClick={() => onRemoveRow(row.id)}>
        <SvgIcon name="delete" className="w-[14px] h-[15.75px]" />
        Eliminare
      </Button>
    ),
  },
];

export { createCheckoutConfigurationTableColumns };
