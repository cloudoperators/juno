/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import junoConfigs from "@cloudoperators/juno-config/eslint/vite-ts.mjs"

export default [
  // `template/` is generated from apps/template by scripts/sync-template.ts.
  // It is emitted content, not CLI source — never lint it (and never let ESLint
  // discover the generated flat config nested inside it).
  { ignores: ["build/**", "template/**"] },
  ...junoConfigs,
]
