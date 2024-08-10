import coreConfig from '../eslint.config.mjs'
import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'

export default [
  ...coreConfig,
  {
    plugins: {
      react: eslintPluginReact,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...eslintPluginReact.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    plugins: {
      'react-hooks': eslintPluginReactHooks,
    },
    rules: eslintPluginReactHooks.configs.recommended.rules,
  },
]
