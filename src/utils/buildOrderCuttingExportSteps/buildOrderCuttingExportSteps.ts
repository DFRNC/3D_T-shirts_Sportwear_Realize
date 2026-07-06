import type { configuratorStepValueType } from '@configurator/types';
import { buildPatternColors } from '@configurator/hooks/useSyncGarmentMaterials/buildPatternColors';
import { mapProductDesigns } from '@configurator/mappers';
import { CONFIGURATOR_STEP_META, ORDER_CUTTING_EXPORT_DATA_NOT_SPECIFIED } from '@constants';
import type {
  cartItemConfigurationType,
  garmentConfigType,
  orderCuttingExportConfigurationStepType,
  orderCuttingExportDownloadFileType,
  orderCuttingExportStepDetailType,
} from '@types';

const resolvePatternIndex = (activePatternKey: string | null): number => {
  if (!activePatternKey) return 0;
  const match = /^pattern-(\d+)$/.exec(activePatternKey);
  return match ? Number(match[1]) : 0;
};

const buildColorStepDetails = (
  configuration: cartItemConfigurationType,
  model: garmentConfigType,
): orderCuttingExportStepDetailType[] =>
  model.parts.map((part) => ({
    label: part.label || part.name,
    value: configuration.color.byPart[part.id] ?? configuration.color.byPart[part.name] ?? '—',
  }));

const hasEnabledGradient = (configuration: cartItemConfigurationType): boolean =>
  Object.values(configuration.color.gradientsByPart).some((gradient) => gradient.enabled);

const buildGradientStepDetails = (
  configuration: cartItemConfigurationType,
  model: garmentConfigType,
): orderCuttingExportStepDetailType[] =>
  model.parts
    .filter((part) => !part.colorOnly)
    .map((part) => {
      const gradient = configuration.color.gradientsByPart[part.id] ?? configuration.color.gradientsByPart[part.name];
      if (!gradient?.enabled) {
        return { label: part.label || part.name, value: ORDER_CUTTING_EXPORT_DATA_NOT_SPECIFIED };
      }

      return {
        label: part.label || part.name,
        value: `${configuration.color.byPart[part.id] ?? configuration.color.byPart[part.name] ?? '—'} → ${gradient.color2}`,
      };
    });

const buildTextInstancesDetails = (
  instances: { label: string; text: string; font: string; textColor: string }[],
): orderCuttingExportStepDetailType[] =>
  instances
    .filter((instance) => instance.text.trim())
    .map((instance) => ({
      label: instance.label,
      value: `${instance.text.trim()} (${instance.font}, ${instance.textColor})`,
    }));

const resolvePartColor = (configuration: cartItemConfigurationType, partId: string, partName: string): string =>
  configuration.color.byPart[partId] ?? configuration.color.byPart[partName] ?? '#FFFFFF';

const buildColorDownloadFiles = (
  configuration: cartItemConfigurationType,
  model: garmentConfigType,
): orderCuttingExportDownloadFileType[] => {
  const parts = model.parts;
  const atlasWidth = model.printAtlas?.width ?? 2048;
  const atlasHeight = model.printAtlas?.height ?? 2048;
  const modelSrc = `${model.path}${model.modelFile ?? 'model.glb'}`;

  if (parts.length === 0) return [];

  return [
    {
      key: 'color-atlas',
      label: 'UV Colore',
      fileName: 'color_uv_atlas.png',
      downloadUrl: '',
      composeKind: 'color-atlas' as const,
      modelSrc,
      atlasWidth,
      atlasHeight,
      colorParts: parts.map((part) => ({
        label: part.label || part.name,
        color: resolvePartColor(configuration, part.id, part.name),
        meshNames: part.meshNames,
      })),
    },
  ];
};

const buildColoredDesignFileName = (pathName: string, color: string): string => {
  const baseName = pathName.replace(/\.[^.]+$/, '');
  const colorSlug = color.replace('#', '').toLowerCase();
  return `${baseName}_uv_${colorSlug}.png`;
};

const buildDesignDownloadFiles = (
  configuration: cartItemConfigurationType,
  model: garmentConfigType,
): orderCuttingExportDownloadFileType[] => {
  const patternIndex = resolvePatternIndex(configuration.design.activePatternKey);
  const pattern = model.patterns[patternIndex];
  if (!pattern) return [];

  const designPattern = mapProductDesigns(model)[patternIndex];
  const layerColors = buildPatternColors(designPattern ?? null, configuration.design.patternColors, configuration.design.designLayerColors);
  const opacity = configuration.design.designOpacity;

  const files: orderCuttingExportDownloadFileType[] = pattern.parts.map((part, index) => {
    const maskSrc = `${model.path}designs/${part.path_name}`;
    const color = layerColors[index] ?? layerColors[0] ?? '#000000';

    return {
      key: `design-layer-${index}`,
      label: `Texture ${index + 1}`,
      fileName: buildColoredDesignFileName(part.path_name, color),
      downloadUrl: '',
      composeKind: 'design-layer' as const,
      maskSrc,
      color,
      opacity,
    };
  });

  if (pattern.parts.length > 1) {
    files.push({
      key: 'design-mix',
      label: 'MIX',
      fileName: `${pattern.name.replace(/\s+/g, '_').toLowerCase()}_uv_mix.png`,
      downloadUrl: '',
      composeKind: 'design-mix' as const,
      opacity,
      layers: pattern.parts.map((part, index) => ({
        maskSrc: `${model.path}designs/${part.path_name}`,
        color: layerColors[index] ?? layerColors[0] ?? '#000000',
      })),
    });
  }

  return files;
};

const buildLogoDownloadFiles = (configuration: cartItemConfigurationType): orderCuttingExportDownloadFileType[] =>
  configuration.logo.instances
    .filter((instance) => !instance.isDefault && instance.src.trim())
    .map((instance) => ({
      key: `logo-${instance.id}`,
      label: instance.label || instance.fileName || 'Logo',
      fileName: instance.fileName || `logo-${instance.id}`,
      downloadUrl: instance.src,
      previewSrc: instance.src,
    }));

const buildDesignStepDetails = (
  configuration: cartItemConfigurationType,
  model: garmentConfigType,
): orderCuttingExportStepDetailType[] => {
  const patternIndex = resolvePatternIndex(configuration.design.activePatternKey);
  const pattern = model.patterns[patternIndex];
  if (!pattern) return [];

  const details: orderCuttingExportStepDetailType[] = [
    { label: 'Design', value: pattern.name },
    { label: 'Opacità pattern', value: `${Math.round(configuration.design.designOpacity * 100)}%` },
  ];

  Object.entries(configuration.design.designLayerColors).forEach(([layerIndex, color]) => {
    details.push({ label: `Colore layer ${Number(layerIndex) + 1}`, value: color });
  });

  return details;
};

const buildStep = (
  key: configuratorStepValueType,
  configuration: cartItemConfigurationType,
  model: garmentConfigType,
): orderCuttingExportConfigurationStepType => {
  const meta = CONFIGURATOR_STEP_META.find((item) => item.value === key);
  const title = meta?.label ?? key;
  const step = meta?.step ?? 0;
  const emptyMessage = ORDER_CUTTING_EXPORT_DATA_NOT_SPECIFIED;

  switch (key) {
    case 'colore': {
      const details = buildColorStepDetails(configuration, model);
      return {
        step,
        key,
        title,
        isConfigured: details.length > 0,
        emptyMessage,
        details,
        downloadFiles: buildColorDownloadFiles(configuration, model),
      };
    }
    case 'design': {
      const isConfigured = configuration.design.activePatternKey !== null;
      return {
        step,
        key,
        title,
        isConfigured,
        emptyMessage,
        details: isConfigured ? buildDesignStepDetails(configuration, model) : [],
        downloadFiles: isConfigured ? buildDesignDownloadFiles(configuration, model) : [],
      };
    }
    case 'shading': {
      const isConfigured = hasEnabledGradient(configuration);
      return {
        step,
        key,
        title,
        isConfigured,
        emptyMessage,
        details: isConfigured ? buildGradientStepDetails(configuration, model) : [],
        downloadFiles: [],
      };
    }
    case 'name': {
      const details = buildTextInstancesDetails(configuration.name.instances);
      return {
        step,
        key,
        title,
        isConfigured: details.length > 0,
        emptyMessage,
        details,
        downloadFiles: [],
      };
    }
    case 'number': {
      const details = buildTextInstancesDetails(configuration.number.instances);
      return {
        step,
        key,
        title,
        isConfigured: details.length > 0,
        emptyMessage,
        details,
        downloadFiles: [],
      };
    }
    case 'testo': {
      const details = buildTextInstancesDetails(configuration.testo.instances);
      return {
        step,
        key,
        title,
        isConfigured: details.length > 0,
        emptyMessage,
        details,
        downloadFiles: [],
      };
    }
    case 'logo': {
      const userLogos = configuration.logo.instances.filter((instance) => !instance.isDefault && instance.src.trim());
      const details = userLogos.map((instance) => ({
        label: instance.label || instance.fileName || 'Logo',
        value: instance.fileName || 'file caricato',
      }));
      return {
        step,
        key,
        title,
        isConfigured: details.length > 0,
        emptyMessage,
        details,
        downloadFiles: buildLogoDownloadFiles(configuration),
      };
    }
    default:
      return {
        step,
        key,
        title,
        isConfigured: false,
        emptyMessage,
        details: [],
        downloadFiles: [],
      };
  }
};

const buildOrderCuttingExportSteps = (
  configuration: cartItemConfigurationType,
  model: garmentConfigType,
): orderCuttingExportConfigurationStepType[] =>
  CONFIGURATOR_STEP_META.filter((meta) => !model.hiddenSteps?.includes(meta.value)).map((meta) =>
    buildStep(meta.value, configuration, model),
  );

export { buildOrderCuttingExportSteps };
