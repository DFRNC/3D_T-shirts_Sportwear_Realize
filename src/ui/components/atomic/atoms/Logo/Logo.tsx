'use client';

import Link from 'next/link';

import { AtomImage, Flex } from '@atoms';
import type { logoPropsType } from '@types';

const Logo = ({ href = '/' }: logoPropsType) => {
  return (
    <Flex variant="full_width">
      <Link href={href}>
        <AtomImage src="/svg/logo_full.svg" alt="Logo" variant="logo_full" priority />
      </Link>
    </Flex>
  );
};

export { Logo };
