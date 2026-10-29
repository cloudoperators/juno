/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// Delegate the module shape to the shared Greenhouse contract — any evolution of `mount` /
// `unmount` in `@cloudoperators/greenhouse-core` propagates here automatically, and a plugin
// whose real export shape doesn't satisfy the contract fails its own typecheck.
declare module "@cloudoperators/juno-app-supernova" {
  export * from "@cloudoperators/greenhouse-core/plugin-exports"
}
