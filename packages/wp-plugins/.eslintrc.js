module.exports = {
  extends: ['eslint-config-pj'],
  ignorePatterns: ['src/plugins/**/build/*'],
  rules: {
    'no-unused-vars': 'off',
    'import/no-unresolved': 'off',
  },
};
