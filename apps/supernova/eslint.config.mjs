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
      "react/prop-types": "off",
      "react/no-unescaped-entities": "off",
    },
  },
  {
    ignores: ["setupTests.js"],
  },
]
