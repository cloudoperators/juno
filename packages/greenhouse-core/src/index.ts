/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// Contract types — the single versioned source of truth imported by both plugins and the Greenhouse
// host (`apps/greenhouse/src/hooks/usePluginLoader.ts`).
export type { PluginModule, PluginProps, MountOptions } from "./types"

// Plugin factory — produces the whole `PluginModule` value (currently `{ mount, unmount }`), so
// each plugin's `src/index.{ts,tsx}` collapses to a single named export.
export { createPlugin } from "./createPlugin"
