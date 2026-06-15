'use client';

import type { ColumnDef } from '@tanstack/react-table';

import { AtomInput, Button, SvgIcon } from '@atoms';

import { CHECKOUT_CONFIGURATION_TABLE_COLUMNS } from '@constants';
import type { checkoutConfigurationTableColumnHandlersType, checkoutLineRowType } from '@types';

import { CheckoutQuantityStepper } from '../CheckoutQuantityStepper';
import { CheckoutSizePopover } from '../CheckoutSizePopover';

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
}: checkoutConfigurationTableColumnHandlersType): ColumnDef<checkoutLineRowType>[] => [
  {
    id: 'row',
    header: 'Riga',
    ...getColumnSizing('row'),
    cell: ({ row }) => <span className="text-[14px] font-medium">{row.index + 1}</span>,
  },
  {
    id: 'size',
    header: 'Taglia',
    accessorKey: 'size',
    ...getColumnSizing('size'),
    cell: ({ row }) => <CheckoutSizePopover value={row.original.size} onChange={(size) => onPatchRow(row.original.id, { size })} />,
    meta: { cellClassName: 'p-0' },
  },
  {
    id: 'name',
    header: 'Nome',
    accessorKey: 'name',
    ...getColumnSizing('name'),
    meta: { grow: true },
    cell: ({ row }) => (
      <AtomInput
        variant="checkout"
        value={row.original.name}
        onChange={(event) => onPatchRow(row.original.id, { name: event.target.value })}
        placeholder="Nome"
      />
    ),
  },
  {
    id: 'number',
    header: 'Numero',
    accessorKey: 'number',
    ...getColumnSizing('number'),
    cell: ({ row }) => (
      <AtomInput
        variant="checkout"
        value={row.original.number}
        onChange={(event) => onPatchRow(row.original.id, { number: event.target.value })}
        placeholder="N."
      />
    ),
  },
  {
    id: 'quantity',
    header: 'Quantità',
    accessorKey: 'quantity',
    ...getColumnSizing('quantity'),
    cell: ({ row }) => (
      <CheckoutQuantityStepper
        quantity={row.original.quantity}
        onDecrease={() => onPatchRow(row.original.id, { quantity: row.original.quantity - 1 })}
        onIncrease={() => onPatchRow(row.original.id, { quantity: row.original.quantity + 1 })}
      />
    ),
  },
  {
    id: 'actions',
    header: 'Modifica',
    ...getColumnSizing('actions'),
    cell: ({ row }) => (
      <Button type="button" variant="delete" size="delete" className="mx-auto" onClick={() => onRemoveRow(row.original.id)}>
        <SvgIcon name="delete" className="w-[14px] h-[15.75px]" />
        Eliminare
      </Button>
    ),
  },
];

export { createCheckoutConfigurationTableColumns };
