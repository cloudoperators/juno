/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import junoConfigs from "@cloudoperators/juno-config/eslint/juno-typescript.mjs"

export default [
  ...junoConfigs,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.json"], // Ensure this points to your tsconfig.json
      },
    },
    // TODO: We need to make all of this checks on again, step by step
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

      "no-unused-vars": "off",
      "no-case-declarations": "off",
      "no-extra-boolean-cast": "off",

      "@typescript-eslint/restrict-plus-operands": "off",
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/await-thenable": "off",
      "react/prop-types": "off",
      "react/jsx-no-target-blank": "off",
      "react/react-in-jsx-scope": "off",
      "prefer-const": "off",
      "react/jsx-no-comment-textnodes": "off",
    },
    ignores: ["vitest.config.ts", "vite.config.ts", "tailwind.config.ts"],
  },
]
