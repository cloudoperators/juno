/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */
export type AuthState = { status: "anonymous" } | { status: "authenticated"; token: string; userId: string }

export interface EmbeddedAuth {
  getSnapshot: () => AuthState
}
