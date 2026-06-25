import type { buildTestoGizmoElementsInputType, printGizmoElementType } from '@configurator/types';

import { buildLineHeightTextGizmoElements } from '../buildLineHeightTextGizmoElements';

const buildTestoGizmoElements = ({ product, instances, fontSizeMin, fontSizeMax }: buildTestoGizmoElementsInputType): printGizmoElementType[] =>
  buildLineHeightTextGizmoElements({ kind: 'testo', product, instances, fontSizeMin, fontSizeMax });

export { buildTestoGizmoElements };
