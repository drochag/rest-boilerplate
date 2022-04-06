module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  settings: {
    'import/resolver': {
      node: {
        paths: './src',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'import/extensions': 0,
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', 'always-multiline'],
    indent: ['error', 2],
    'object-curly-spacing': [
      'error',
      'always',
      { arraysInObjects: true, objectsInObjects: false },
    ],
    semi: ['error', 'never'],
  },
}
