/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { create } from "zustand"

interface AuthState {
  loggedIn: boolean
  // eslint-disable-next-line no-unused-vars
  setLoggedIn: (loggedIn: boolean) => void
}

const useAuthStore = create<AuthState>((set) => ({
  loggedIn: true,
  setLoggedIn: (loggedIn) => set({ loggedIn }),
}))

export default useAuthStore
