'use client';

import { AtomImage, Flex, LogoYOU, Text } from '@atoms';

const MainLoader = () => {
  return (
    <Flex variant="loader_column_center_gap5">
      <Flex variant="logo_pair_row">
        <AtomImage src="/svg/logo.svg" alt="Logo" variant="logo" priority />
        <LogoYOU />
      </Flex>
      <Text variant="loader_tagline">
        Made by <b className="animate-pulse motion-reduce:animate-none">YOU</b>. Worn your way.
      </Text>
    </Flex>
  );
};

export { MainLoader };
