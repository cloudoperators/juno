/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import junoConfigs from "./configs/eslint/juno.mjs"

export default [
  ...junoConfigs,
  {
    files: ["**/*.ts", "**/*.mjs", "**/*.tsx"],
    languageOptions: { sourceType: "module" },
    rules: {
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-floating-promises": "off",
      "@typescript-eslint/require-await": "off",
      "@typescript-eslint/unbound-method": "off",
      "@typescript-eslint/restrict-template-expressions": "off",
      "@typescript-eslint/no-unnecessary-type-assertion": "off",
      "@typescript-eslint/no-redundant-type-constituents": "off",
      "@typescript-eslint/no-misused-promises": "off",
      "@typescript-eslint/no-base-to-string": "off",
      "no-empty": "off",
      "no-unused-vars": "off",
      "prefer-const": "off",
      "no-fallthrough": "off",
      // disable for now, till we switch to TypeScript
      "react/prop-types": "off",
    },
  },
  {
    ignores: ["setupTests.js"],
  },
]
