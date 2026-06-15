import type { garmentConfigType, printGizmoElementKindType, uvPointType } from '@types';
import { resolvePartUvBounds } from '@utils';

const roundUv = (uv: uvPointType, digits = 3): uvPointType => ({
  x: Number(uv.x.toFixed(digits)),
  y: Number(uv.y.toFixed(digits)),
});

const resolveZoneFromPartId = (partId: string) => {
  const lower = partId.toLowerCase();
  if (lower.includes('front')) return 'front';
  if (lower.includes('back')) return 'back';
  return partId;
};

const atlasUvToZoneLocalUv = (product: garmentConfigType, partId: string, atlasUv: uvPointType): uvPointType => {
  const part = product.parts.find((item) => item.id === partId);
  if (!part) return roundUv(atlasUv);

  const bounds = resolvePartUvBounds(part);
  const width = bounds.maxX - bounds.minX;
  const height = bounds.maxY - bounds.minY;

  return roundUv({
    x: width > 0 ? (atlasUv.x - bounds.minX) / width : atlasUv.x,
    y: height > 0 ? (atlasUv.y - bounds.minY) / height : atlasUv.y,
  });
};

interface LogGizmoPlacementInput {
  kind: printGizmoElementKindType;
  label: string;
  partId: string;
  uv: uvPointType;
  product: garmentConfigType;
}

const logGizmoPlacementForConfig = ({ kind, label, partId, uv, product }: LogGizmoPlacementInput) => {
  const atlasUv = roundUv(uv);

  if (kind === 'number') {
    const zone = resolveZoneFromPartId(partId);
    const localUv = atlasUvToZoneLocalUv(product, partId, uv);

    console.log(
      `[gizmo] ${label} — numberPositions JSON snippet:\n` +
        JSON.stringify(
          {
            label,
            zone,
            uv: localUv,
          },
          null,
          2,
        ),
    );
    return;
  }

  if (kind === 'name') {
    console.log(
      `[gizmo] ${label} — namePositions JSON snippet:\n` +
        JSON.stringify(
          {
            label,
            partId,
            uv: atlasUv,
          },
          null,
          2,
        ),
    );
    return;
  }

  console.log(
    `[gizmo] ${label} — logoPositions JSON snippet:\n` +
      JSON.stringify(
        {
          label,
          partId,
          uv: atlasUv,
        },
        null,
        2,
      ),
  );
};

export { logGizmoPlacementForConfig };
