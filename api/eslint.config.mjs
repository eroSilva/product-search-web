import coreConfig from '../eslint.config.mjs'

export default [
  ...coreConfig,
  {
    files: ['**/*.test.ts'],
    '@typescript-eslint/no-require-imports': 'off',
  },
]
