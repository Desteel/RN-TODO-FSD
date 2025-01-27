const pluginImport = {
  rules: {
    'import/no-self-import': 'error',
    'import/no-unassigned-import': 'error',
    'import/no-useless-path-segments': [
      'error',
      {
        noUselessIndex: true,
      },
    ],
    'import/no-duplicates': [
      'error',
      {
        'prefer-inline': true,
      },
    ],
    'import/no-cycle': [
      'error',
      {
        ignoreExternal: true,
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        alphabetize: {
          order: 'asc',
        },
      },
    ],
  },

  overrides: [
    {
      files: ['**/*.test.*'],
      rules: {
        'import/no-unassigned-import': ['error', { allow: ['react-native'] }],
      },
    },
    {
      files: ['src/shared/lib/id.*'],
      rules: {
        'import/no-unassigned-import': [
          'error',
          { allow: ['react-native-get-random-values'] },
        ],
      },
    },
  ],

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
      node: {
        paths: ['src'],
        extensions: ['.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
};

const noRestrictedImports = {
  rules: {
    'no-restricted-imports': 'off',
    '@typescript-eslint/no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['@react-navigation/*'],
            message:
              'The use of "react-navigation" is allowed only in "src/navigation"',
            allowTypeImports: false,
          },
        ],
      },
    ],
  },

  overrides: [
    {
      files: ['./src/navigation/**'],
      rules: {
        '@typescript-eslint/no-restricted-imports': [
          'error',
          {
            patterns: [
              {
                group: ['!@react-navigation/*'],
              },
            ],
          },
        ],
      },
    },
  ],
};

const pluginReact = {
  rules: {
    'react/no-unused-prop-types': 'error',
    'react/jsx-fragments': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-key': [
      'error',
      {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
        warnOnDuplicates: true,
      },
    ],
    'react/no-unstable-nested-components': [
      'warn',
      {
        allowAsProps: true,
      },
    ],
    'react/no-danger': 'error',
    'react/no-danger-with-children': 'error',
  },
};

module.exports = {
  root: true,
  extends: '@react-native', // https://www.npmjs.com/package/@react-native/eslint-config?activeTab=code,
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
  },
  plugins: ['import'],
  rules: {
    'no-implicit-coercion': ['error', { allow: ['!!'] }],
    'no-restricted-globals': ['error', 'AppStore'],
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
      },
    ],
    ...noRestrictedImports.rules,
    ...pluginImport.rules,
    ...pluginReact.rules,
  },
  overrides: [
    {
      files: ['src/shared/infrastructure/store/**'],
      rules: { 'no-restricted-globals': 'off' },
    },
    ...noRestrictedImports.overrides,
    ...pluginImport.overrides,
  ],
  settings: {
    ...pluginImport.settings,
  },
};
