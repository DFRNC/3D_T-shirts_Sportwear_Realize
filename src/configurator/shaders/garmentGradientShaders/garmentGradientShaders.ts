const garmentGradientMapFragment = `
#ifdef USE_GRADIENT
  garmentBaseAlbedo = diffuseColor.rgb;
  float gradMask = garmentGradientMask( garmentGradientWorldT( vGarmentWorldPos ) ) * uGradientEnabled;
  diffuseColor.rgb = mix( diffuseColor.rgb, uGradientColor2, gradMask );
#endif
`;

export { garmentGradientMapFragment };
