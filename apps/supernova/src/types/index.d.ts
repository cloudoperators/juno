/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/// <reference types="vite/client" />

declare module "@cloudoperators/juno-app-supernova" {
  export type PluginModule = {
    mount: (container: HTMLElement, options?: Record<string, any>) => void
    unmount: () => void
  }

  export function mount(container: HTMLElement, options?: Record<string, any>): void
  export function unmount(): void
}
