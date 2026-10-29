/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { PluginModule } from "@cloudoperators/greenhouse-core"

// Declare this plugin's module shape so the host's `await import("@cloudoperators/juno-app-heureka")`
// is typed as `{ plugin: PluginModule }` instead of `any`. This declaration is NOT verified
// against src/index.{ts,tsx} at build time — a plugin that renames or removes its `plugin`
// export would still compile. The real safety against runtime drift (external plugins loaded via
// dynamic URL) comes from Phase 3's runtime validation at the host, not from this file.
declare module "@cloudoperators/juno-app-heureka" {
  export const plugin: PluginModule
}
