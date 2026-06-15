'use client';

import { useMemo } from 'react';

import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

import { AtomTable, AtomTableBody, AtomTableCell, AtomTableHead, AtomTableHeader, AtomTableRow, Button, SvgIcon } from '@atoms';

import { CHECKOUT_CONFIGURATION_TABLE_MIN_WIDTH, CHECKOUT_TABLE_ADD_ROW_LABEL } from '@constants';
import { useCheckoutConfigurationTable } from '@hooks';
import type { checkoutConfigurationTablePropsType } from '@types';
import { cn } from '@utils';

import { createCheckoutConfigurationTableColumns } from './checkoutConfigurationTableColumns';
import { getCheckoutColumnStyle } from './getCheckoutColumnStyle';

const CheckoutConfigurationTable = ({ cartItemId, rows }: checkoutConfigurationTablePropsType) => {
  const { handleAddRow, handleRemoveRow, handlePatchRow } = useCheckoutConfigurationTable(cartItemId);

  const columns = useMemo(
    () =>
      createCheckoutConfigurationTableColumns({
        onPatchRow: handlePatchRow,
        onRemoveRow: handleRemoveRow,
      }),
    [handlePatchRow, handleRemoveRow],
  );

  const table = useReactTable({
    data: rows,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getRowId: (row) => row.id,
  });

  return (
    <div className="w-full min-w-0">
      <AtomTable variant="checkout" className="table-fixed w-full" style={{ minWidth: CHECKOUT_CONFIGURATION_TABLE_MIN_WIDTH }}>
        <AtomTableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <AtomTableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <AtomTableHead key={header.id} style={getCheckoutColumnStyle(header.column)}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </AtomTableHead>
              ))}
            </AtomTableRow>
          ))}
        </AtomTableHeader>
        <AtomTableBody>
          {table.getRowModel().rows.map((row) => (
            <AtomTableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <AtomTableCell key={cell.id} className={cn(cell.column.columnDef.meta?.cellClassName)} style={getCheckoutColumnStyle(cell.column)}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </AtomTableCell>
              ))}
            </AtomTableRow>
          ))}
        </AtomTableBody>
      </AtomTable>

      <Button type="button" variant="ghost" size="sm" className="mt-4 border border-gray-20 bg-white" onClick={handleAddRow}>
        <SvgIcon name="plus" />
        {CHECKOUT_TABLE_ADD_ROW_LABEL}
      </Button>
    </div>
  );
};

export { CheckoutConfigurationTable };
