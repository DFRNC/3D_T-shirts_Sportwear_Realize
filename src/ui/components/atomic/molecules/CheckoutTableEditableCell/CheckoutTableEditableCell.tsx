'use client';

import { useCallback, useState } from 'react';

import { AtomInput, Button, Flex, SvgIcon } from '@atoms';

import type { checkoutTableEditableCellPropsType } from '@types';

const CheckoutTableEditableCell = ({ value, placeholder, onChange, formatValue, inputMode = 'text', maxLength }: checkoutTableEditableCellPropsType) => {
  const [isEditing, setIsEditing] = useState(false);
  const isEmpty = value.trim() === '';

  const handleActivate = useCallback(() => {
    setIsEditing(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsEditing(false);
  }, []);

  const handleClear = useCallback(() => {
    onChange('');
    setIsEditing(false);
  }, [onChange]);

  const handleChange = useCallback(
    (nextValue: string) => {
      onChange(formatValue ? formatValue(nextValue) : nextValue);
    },
    [formatValue, onChange],
  );

  if (!isEditing && isEmpty) {
    return (
      <Flex className="w-full items-center justify-center">
        <Button type="button" variant="ghost" size="icon" className="size-8" onClick={handleActivate} aria-label={`Aggiungi ${placeholder}`}>
          <SvgIcon name="plus" className="size-4 text-default" />
        </Button>
      </Flex>
    );
  }

  if (!isEditing) {
    return (
      <Flex className="w-full items-center justify-center gap-1.5">
        <button type="button" className="text-center text-[16px] leading-none text-default" onClick={handleActivate}>
          {value}
        </button>
        <Button type="button" variant="ghost" size="icon" className="size-6 shrink-0" onClick={handleClear} aria-label={`Cancella ${placeholder}`}>
          <SvgIcon name="delete" className="size-3.5 text-error" />
        </Button>
      </Flex>
    );
  }

  return (
    <AtomInput
      autoFocus
      variant="checkout"
      className="w-full text-center placeholder:text-center"
      value={value}
      placeholder={placeholder}
      inputMode={inputMode}
      maxLength={maxLength}
      onChange={(event) => handleChange(event.target.value)}
      onBlur={handleBlur}
    />
  );
};

export { CheckoutTableEditableCell };
