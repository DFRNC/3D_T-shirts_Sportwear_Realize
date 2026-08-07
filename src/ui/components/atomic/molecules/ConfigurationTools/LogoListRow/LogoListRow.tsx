'use client';

import { AtomImage, Button, Flex, Grid, SvgIcon, Text } from '@atoms';

import type { logoListRowPropsType } from '@types';

const LogoListRow = ({ part, onEdit, onDelete }: logoListRowPropsType) => (
  <Grid variant="logo_list_row">
    <Grid variant="logo_list_identity">
      <AtomImage src={part.src} alt={part.fileName} width={16} height={16} className="object-contain shrink-0 max-xl:w-3.25 max-xl:h-3.25" />
      <Text variant="configurator_brand_logo_title_clamped">{part.fileName}</Text>
    </Grid>
    {onEdit && onDelete && (
      <Flex variant="logo_list_actions">
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="w-[26px] h-[26px] max-xl:w-5.25 max-xl:h-5.25 border border-gray-30 hover:bg-white"
          onClick={onEdit}
          aria-label="Modifica logo"
        >
          <SvgIcon name="edit" className="max-xl:size-3.25" />
        </Button>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="w-[26px] h-[26px] max-xl:w-5.25 max-xl:h-5.25 border border-error text-error hover:bg-white hover:text-error"
          onClick={onDelete}
          aria-label="Elimina logo"
        >
          <SvgIcon name="delete" className="max-xl:size-3.25" />
        </Button>
      </Flex>
    )}
  </Grid>
);

export { LogoListRow };
