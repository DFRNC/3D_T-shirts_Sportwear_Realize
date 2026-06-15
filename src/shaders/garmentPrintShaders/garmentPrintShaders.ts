import { garmentLogoMapFragment } from '../garmentLogoShaders';
import { garmentNameMapFragment } from '../garmentNameShaders';
import { garmentNumberMapFragment } from '../garmentNumberShaders';
import { garmentTestoMapFragment } from '../garmentTestoShaders';

const garmentPrintMapFragment = /* glsl */ `
#ifdef USE_PRINT
  vec4 printColor = vec4( 0.0 );
  garmentGizmoUiColor = vec4( 0.0 );

  vec4 layer0 = vec4(
    uPatternColor0,
    texture2D( uPatternMask0, vPrintUv ).a * uPatternOpacity
  );
  printColor = layer0;

  vec4 layer1 = vec4(
    uPatternColor1,
    texture2D( uPatternMask1, vPrintUv ).a * uPatternOpacity
  );
  printColor.rgb = layer1.rgb * layer1.a + printColor.rgb * ( 1.0 - layer1.a );
  printColor.a = layer1.a + printColor.a * ( 1.0 - layer1.a );

${garmentLogoMapFragment}

${garmentNameMapFragment}

${garmentTestoMapFragment}

${garmentNumberMapFragment}

  diffuseColor.rgb = printColor.rgb * printColor.a + diffuseColor.rgb * ( 1.0 - printColor.a );

  vec4 defaultDesign = texture2D( uDefaultLogos, vPrintUv );
  diffuseColor.rgb = defaultDesign.rgb * defaultDesign.a + diffuseColor.rgb * ( 1.0 - defaultDesign.a );
#endif
`;

export { garmentPrintMapFragment };
