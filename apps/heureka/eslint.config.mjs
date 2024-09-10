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
    },
  },
  {
    ignores: ["setupTests.js"],
  },
]
