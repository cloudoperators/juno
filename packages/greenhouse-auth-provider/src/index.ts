/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export type { AuthState, EmbeddedAuth } from "./shared/auth-contract"
export { createAuthStore } from "./shell/createAuthStore"
export type { AuthStore } from "./shell/createAuthStore"
export { AuthProvider, useAuth } from "./plugin/AuthProvider"
