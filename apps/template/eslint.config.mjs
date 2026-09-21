/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import junoConfigs from "@cloudoperators/juno-config/eslint/vite-react-ts.mjs"

export default [
  ...junoConfigs,
  {
    ignores: ["vite.config.ts", "vitest.config.ts"],
  },
]
