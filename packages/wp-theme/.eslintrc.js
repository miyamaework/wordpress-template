module.exports = {
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
        alwaysTryTypes: true,
      },
    },
  },
  extends: ['eslint-config-pj'],
  ignorePatterns: ['src/static/**/*'],
};
