module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  root: true,
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y', 'prettier', 'tailwindcss'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'eslint-config-prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: [
    'node_modules',
    '*.generated.ts',
    'graphql_types.ts',
    '/lib/types/design-type/**/*.d.ts',
    'build/**/*',
  ],
  rules: {
    '@typescript-eslint/ban-types': ['warn'],
    '@typescript-eslint/no-explicit-any': ['warn'],
    '@typescript-eslint/consistent-type-imports': ['warn'],
    'no-restricted-imports': ['error'],
  },
}
