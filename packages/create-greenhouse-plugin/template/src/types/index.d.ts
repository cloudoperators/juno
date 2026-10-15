/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/// <reference types="vite/client" />

declare module "@cloudoperators/juno-app-__PLUGIN_NAME__" {
  export type PluginModule = {
    mount: (container: HTMLElement, options?: Record<string, unknown>) => void
    unmount: () => void
  }
  export function mount(container: HTMLElement, options?: Record<string, unknown>): void
  export function unmount(): void
}
