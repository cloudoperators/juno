/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js"
import { fixupConfigRules } from "@eslint/compat"
import jest from "eslint-plugin-jest"
export default [
  {
    settings: {
      react: {
        version: "detect",
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
    files: ["**/*.js", "*.js", "*.config.js", "*.test.js", "*.mjs"],
    ...tseslint.configs.disableTypeChecked,
  },
  ...fixupConfigRules(pluginReactConfig),
  // ######### JEST ##########
  {
    files: ["__tests__/**", "**/*.test.js", "__mocks__/**"],
    ...jest.configs["flat/recommended"],
    rules: {
      ...jest.configs["flat/recommended"].rules,
      "jest/prefer-expect-assertions": "off",
      "jest/no-disabled-tests": "off",
    },
  },
  {
    rules: {
      // ignore unused vars starting with _
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
    ignores: ["**/build/*"],
  },
]
