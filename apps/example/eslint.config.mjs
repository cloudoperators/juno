/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import junoConfigs from "@cloudoperators/juno-config/eslint/juno-typescript.mjs"

const customRulesConfig = {
  rules: {
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
  },
}

export default [
  ...junoConfigs,
  {
    ...customRulesConfig,
  },
  {
    files: ["**/*.test.js"],
    languageOptions: { sourceType: "module" },
  },
  {
    ignores: ["setupTests.js", "appProps.template.ts"],
  },
]
