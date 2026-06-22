
import {
  AsideConfiguration,
  AsideConfigurationUtility,
  CartConfigurationSync,
  ConfiguratorInitialLoader,
  ConfiguratorView,
  FooterConfiguration,
  HeaderConfiguration,
} from '@organisms';
import { ModalInfo, ModalTutorial } from '@molecules';
import { ClientOnly } from '@shared';
import { useConfiguratorInitialSceneLoad } from '@hooks';

const ConfiguratorPage = () => {
  useConfiguratorInitialSceneLoad();

  return (
    <ClientOnly>
      <ConfiguratorInitialLoader />
      <CartConfigurationSync />
      <div className="relative grid min-h-0 flex-1 grid-cols-1 grid-rows-[auto_minmax(0,1fr)_auto] overflow-hidden">
        <HeaderConfiguration />
        <main className="grid min-h-0 grid-cols-[auto_minmax(0,1fr)_auto] overflow-hidden">
          <AsideConfiguration />
          <div className="min-h-0 min-w-0">
            <ConfiguratorView />
          </div>
          <AsideConfigurationUtility />
        </main>
        <FooterConfiguration />
      </div>
      <ModalInfo />
      <ModalTutorial />
    </ClientOnly>
  );
};

export { ConfiguratorPage };
