/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/// <reference types="vite-plugin-svgr/client" />
/// <reference types="vite/client" />

declare module "@cloudoperators/juno-app-doop" {
  export function mount(container: HTMLElement, options?: Record<string, any>): void
  export function unmount(): void
}

declare module "@cloudoperators/juno-app-supernova" {
  export function mount(container: HTMLElement, options?: Record<string, any>): void
  export function unmount(): void
}

declare module "@cloudoperators/juno-app-heureka" {
  export function mount(container: HTMLElement, options?: Record<string, any>): void
  export function unmount(): void
}
