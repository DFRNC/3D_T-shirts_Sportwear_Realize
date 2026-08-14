'use client';

import { ConfiguratorView } from '@organisms';
import { ModalAddProductDesign, ModalInfo, ModalShare, ModalTutorial } from '@molecules';

const ConfiguratorPage = () => {
  return (
    <>
      <ConfiguratorView />
      <ModalAddProductDesign />
      <ModalInfo />
      <ModalShare />
      <ModalTutorial />
    </>
  );
};

export { ConfiguratorPage };
