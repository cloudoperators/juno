/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import junoConfigs from "@cloudoperators/juno-config/eslint/vite-ts.mjs"

export default [
  ...junoConfigs,
  {
    ignores: ["vitest.config.ts", "vite.config.ts"],
  },
]
