/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import junoConfigs from "@cloudoperators/juno-config/eslint/juno-typescript.mjs"

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
      "@typescript-eslint/restrict-plus-operands": "off",
      "@typescript-eslint/await-thenable": "off",
      "prefer-const": "off",
      "no-unsafe-optional-chaining": "off",
      "@typescript-eslint/restrict-template-expressions": "off",
      "react/prop-types": "off",
      "no-unused-vars": "off",
    },
  },
  {
    ignores: ["setupTests.js", "appProps.template.ts"],
  },
]
