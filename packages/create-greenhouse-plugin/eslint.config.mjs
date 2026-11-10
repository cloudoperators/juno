/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import junoConfigs from "@cloudoperators/juno-config/eslint/vite-ts.mjs"

export default [
  // The generated template/ directory is produced by scripts/sync-template.mjs and is a
  // standalone app blueprint (its own eslint config, its own deps), not source of this package.
  {
    ignores: ["build/**", "template/**", "scripts/**"],
  },
  ...junoConfigs,
]
