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
      "no-unused-vars": "off",
      "@typescript-eslint/restrict-plus-operands": "off",
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/await-thenable": "off",
      "react/prop-types": "off",
      "react/jsx-no-comment-textnodes": "off",
    },
    ignores: ["vitest.config.ts", "vite.config.ts", "tailwind.config.ts"],
  },
]
