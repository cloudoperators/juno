/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import type { AuthState, EmbeddedAuth } from "../shared/auth-contract"

export type AuthStore = EmbeddedAuth & {
  setAuthState(_state: AuthState): void
}

export function createAuthStore(): AuthStore {
  let state: AuthState = { status: "anonymous" }

  return {
    getSnapshot: () => ({ ...state }),
    setAuthState: (next) => {
      state = next
    },
  }
}
