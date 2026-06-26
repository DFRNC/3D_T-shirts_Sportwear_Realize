import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

const eslintConfig = defineConfig([
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts', 'public/**']),
  ...nextVitals,
  ...nextTs,
  {
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
        node: true,
      },
    },
    rules: {
      'object-curly-newline': 'off',

      'import/no-duplicates': ['error', { 'prefer-inline': false }],

      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@atoms/*', '@molecules/*', '@organisms/*', '@templates/*', '@pages/*', '@hooks/*', '@utils/*', '@store/*'],
              message: 'Import via barrel alias only (e.g. @molecules), not subpaths.',
            },
            {
              group: ['@configurator/hooks/*', '@configurator/utils/*'],
              message: 'Import via @configurator/hooks or @configurator/utils barrels, or use relative paths inside the module.',
            },
          ],
        },
      ],

      'sort-imports': [
        'error',
        {
          ignoreDeclarationSort: true,
          ignoreCase: true,
        },
      ],
    },
  },
  eslintConfigPrettier,
  {
    files: ['src/store/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@configurator/utils', '@configurator/utils/*', '@configurator/scene', '@configurator/scene/*', '@configurator/runtime', '@configurator/runtime/*', '@configurator/canvas', '@configurator/canvas/*', '@configurator/hooks', '@configurator/hooks/*', '@configurator/gizmo', '@configurator/gizmo/*', '@configurator/shaders', '@configurator/shaders/*', '@configurator/providers', '@configurator/providers/*'],
              message: 'Use @configurator bootstrap facade, @configurator/mappers, or @configurator/constants from store code.',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['src/ui/components/atomic/atoms/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          paths: [
            { name: '@store', message: 'Atoms are presentational — pass data via props from organisms/molecules.' },
          ],
          patterns: [
            {
              group: ['@configurator', '@configurator/*'],
              message: 'Atoms must not import the 3D configurator module.',
            },
          ],
        },
      ],
    },
  },
]);

export default eslintConfig;
