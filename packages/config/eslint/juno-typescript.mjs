/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js"
import { fixupConfigRules } from "@eslint/compat"
export default [
  {
    settings: {
      react: {
        version: "19.1.0",
      },
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      sourceType: "module",
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ["**/*.test.js", "**/*.config.js", "__tests__/**", "test/__mocks__/**"],
    languageOptions: { sourceType: "commonjs" },
  },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommendedTypeCheckedOnly,
  {
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
  },
  {
    files: ["**/*.js", "**/*.jsx", "*.js", "*.jsx", "*.config.js", "*.config.ts", "*.test.js", "*.mjs", "*.config.mts"],
    ...tseslint.configs.disableTypeChecked,
  },
  ...fixupConfigRules(pluginReactConfig),
  {
    rules: {
      // ignore unused vars starting with _
      // "no-unused-vars": "off",
      "no-unused-vars": [
        "error",
        {
          caughtErrorsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    ignores: [
      "**/build/*",
      "**/dist/*",
      "**/vite.config.ts.timestamp-*",
      "**/src/deprecated_js/*",
      "**/storybook-static/*",
    ],
  },
]
