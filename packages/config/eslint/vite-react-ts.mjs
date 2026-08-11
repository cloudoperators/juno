/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import js from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"

export default tseslint.config(
  // Global ignores
  {
    ignores: ["**/build/*", "**/dist/*", "**/vite.config.ts.timestamp-*", "**/storybook-static/*"],
  },

  // TypeScript and React configuration
  // Uses tseslint.config() to resolve 'extends' at config-creation time so ESLint
  // never sees the key — required for compatibility with ESLint flat config.
  // Scopes all rules to TypeScript files only, preventing JS/TS rule conflicts.
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        project: true, // Use nearest tsconfig.json
      },
    },
    rules: {
      // Allow unused vars starting with underscore
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
  }
)
