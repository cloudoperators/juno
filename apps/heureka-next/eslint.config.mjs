/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import junoConfigs from "@cloudoperators/juno-config/eslint/juno-typescript.mjs"

export default [
  ...junoConfigs,
  {
    files: ["test/__mocks__/svgLib.js", "src/**/*.test.js"],
    languageOptions: { sourceType: "module" },
  },

  {
    ignores: ["setupTests.js"],
  },
  {
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended",
      "plugin:tailwindcss/recommended",
    ],
  },

  { plugins: ["react", "react-hooks", "@typescript-eslint", "tailwindcss"] },
  {
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "tailwindcss/no-contradicting-classname": "error",
    },
  },
]
