module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['airbnb-typescript/base'],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'import/prefer-default-export': 0,
    'no-param-reassign': 0,
    'no-restricted-syntax': 0,
    'no-console': 0,
    'class-methods-use-this': 0
  }
};
