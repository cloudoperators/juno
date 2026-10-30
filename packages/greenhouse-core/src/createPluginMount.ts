/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createElement, type ComponentType } from "react"
import { createRoot, type Root } from "react-dom/client"

import type { MountOptions, PluginModule, PluginProps } from "./types"

/**
 * Create the `{ mount, unmount }` pair that Greenhouse's plugin loader calls.
 *
 * A plugin's `src/index.tsx` becomes a single line:
 *
 * @example
 * ```tsx
 * import { createPluginMount } from "@cloudoperators/greenhouse-core"
 * import App from "./App"
 *
 * export const plugin = createPluginMount(App)
 * ```
 *
 * The returned object `satisfies PluginModule` by construction. Centralising this here means that:
 *
 * - The `createRoot` lifecycle (duplicated across every plugin's `index.tsx`) lives in one place.
 * - Mount-mechanics fixes reach every plugin via a `pnpm update` — no edits to plugin files.
 * - A plugin's hand-written mount can no longer silently drift from the contract; a plugin that
 *   wants a different mount shape writes it directly and adds its own `satisfies PluginModule`.
 *
 * `P` is the plugin's own App-props shape. The constraint is `P extends object` — the minimum
 * React requires for a component's props type — not `P extends PluginProps`. Plugins typically
 * declare `AppProps` as a plain object type without an index signature, and a `P extends
 * PluginProps` constraint would fail because `PluginProps` carries `[key: string]: unknown`.
 * The host↔plugin contract lives on `PluginProps` for consumers who want to narrow it; this
 * helper stays shape-agnostic so any React component can be mounted.
 */
export function createPluginMount<P extends object = PluginProps>(App: ComponentType<P>): PluginModule {
  // Scope `root` per returned module so repeated mount/unmount cycles do not leak React roots.
  let root: Root | null = null

  const mount: PluginModule["mount"] = (container, options: MountOptions = {}) => {
    // Idempotent re-mount: tear down any prior root before creating a new one for the same module.
    if (root) root.unmount()
    root = createRoot(container)
    // `options.props` is typed as the shared `PluginProps` here (because `MountOptions` defaults
    // to it). Greenhouse always passes `props` compatible with the plugin's expected shape; when
    // `options.props` is absent we fall back to `{}`. The cast is at runtime safe and expresses
    // the trust boundary (host → plugin) that the type system cannot verify through a dynamic
    // import.
    const props = (options.props ?? {}) as P
    root.render(createElement<P>(App, props))
  }

  const unmount: PluginModule["unmount"] = () => {
    root?.unmount()
    root = null
  }

  return { mount, unmount }
}
