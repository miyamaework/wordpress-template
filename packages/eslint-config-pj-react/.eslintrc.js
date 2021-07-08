module.exports = {
  extends: ['eslint-config-pj', 'plugin:react/recommended', 'plugin:react-hooks/recommended'],
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/display-name': ['off', { ignoreTranspilerName: false }],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/button-has-type': 'error',
    'react/self-closing-comp': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-sort-props': ['error', { callbacksLast: true, shorthandLast: true, reservedFirst: ['key'] }],
  },
};
