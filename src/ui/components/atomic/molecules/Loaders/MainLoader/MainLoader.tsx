'use client';

import { AtomImage, Box, Flex, LogoYOU, Text } from '@atoms';

const MainLoader = () => {
  return (
    <Flex variant="loader_column_center_gap5" className="w-full max-sm:-translate-y-10 max-sm:gap-3">
      <Flex variant="logo_pair_row" className="max-sm:gap-3 max-sm:px-4">
        <AtomImage src="/svg/logo.svg" alt="Logo" variant="logo" priority className="max-sm:h-14" />
        <Box>
          <LogoYOU />
        </Box>
      </Flex>
      <Text variant="loader_tagline" className="max-sm:px-4 max-sm:text-[14px]">
        Made by <b className="animate-pulse motion-reduce:animate-none">YOU</b>. Worn your way.
      </Text>
    </Flex>
  );
};

export { MainLoader };
