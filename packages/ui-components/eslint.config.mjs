/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import junoConfigs from "@cloudoperators/juno-config/eslint/juno-typescript.mjs"
import { RuleTester } from "eslint"

export default [
  ...junoConfigs,
  {
    files: ["test/__mocks__/svgLib.js", "src/**/*.test.js"],
    languageOptions: { sourceType: "module" },
  },
  {
    rules: {
      "@typescript-eslint/no-unsafe-call": "off",
      "no-unused-vars": "off",
      "no-undef": "off",
    },
  },
]
