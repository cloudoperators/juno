/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import junoConfigs from "@cloudoperators/juno-eslint-config/juno.mjs"

export default [
  ...junoConfigs,
  {
    files: ["__tests__/**"],
    languageOptions: { sourceType: "module" },
  },
]
