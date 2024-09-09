/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import junoConfigs from "@cloudoperators/juno-config/eslint/juno.mjs"

export default [
  ...junoConfigs,
  {
    files: ["**/*.js", "**/*.mjs", "**/*.jsx"],
    languageOptions: { sourceType: "module" },
    rules: {
      // disable for now, till we switch to TypeScript
      "react/prop-types": "off",
      "no-unused-vars": "off",
      "react/no-unescaped-entities": "off",
      "react/jsx-no-target-blank": "off",
      "jest/no-identical-title": "off",
    },
  },
  {
    ignores: ["setupTests.js"],
  },
]
