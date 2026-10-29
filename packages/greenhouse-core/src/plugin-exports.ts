/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// Declaration shim for a plugin's `.d.ts` module augmentation.
//
// Each plugin's `src/index.{ts,tsx}` exports a single `plugin: PluginModule`, and each plugin's
// `types/index.d.ts` re-exports from this file so TypeScript knows that shape when the Greenhouse
// host does `await import("@cloudoperators/juno-app-<name>")`.
//
// Why a single `plugin` export (and not `export const { mount, unmount } = createPluginMount(App)`):
// the whole plugin surface is the `PluginModule` value. If `PluginModule` grows a new required
// method in the future, plugins don't need any code change — their `plugin` export still carries
// the full contract shape. The shell is the only side that has to adapt. See the greenhouse-core
// README for the full rationale.
//
// A plugin's `types/index.d.ts` collapses to:
//
// ```ts
// declare module "@cloudoperators/juno-app-<name>" {
//   export * from "@cloudoperators/greenhouse-core/plugin-exports"
// }
// ```

import type { PluginModule } from "./types"

export declare const plugin: PluginModule
