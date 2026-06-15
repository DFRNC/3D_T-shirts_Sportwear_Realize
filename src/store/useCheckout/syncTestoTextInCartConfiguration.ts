import { cloneCartItemConfiguration } from '../useConfigurationCart/cartItemConfiguration';
import { useConfigurationCart } from '../useConfigurationCart/useConfigurationCart';

const syncTestoTextInCartConfiguration = (cartItemId: string, previousText: string, nextText: string) => {
  const configuration = useConfigurationCart.getState().getConfiguration(cartItemId);
  if (!configuration || configuration.testo.instances.length === 0) return;

  if (!configuration.testo.instances.some((instance) => instance.text === previousText)) return;

  const nextConfiguration = cloneCartItemConfiguration(configuration);
  nextConfiguration.testo.instances = nextConfiguration.testo.instances.map((instance) =>
    instance.text === previousText ? { ...instance, text: nextText } : instance,
  );

  useConfigurationCart.getState().saveConfiguration(cartItemId, nextConfiguration);
};

export { syncTestoTextInCartConfiguration };
