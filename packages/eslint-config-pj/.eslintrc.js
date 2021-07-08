module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:import/errors'],
  plugins: ['prettier', 'import'],
  rules: {
    'import/no-unresolved': [2, { ignore: ['^packages/'] }],
  },
  overrides: [
    {
      files: ['**/*.js', '**/*.ts'],
      rules: {
        'import/exports-last': 'error',
      },
    },
    {
      files: ['**/*.tsx', '**/*.ts'],
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:import/typescript',
      ],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
  ],
};
