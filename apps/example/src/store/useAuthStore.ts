/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { create } from "zustand"

interface AuthState {
  isUserAuthenticated: boolean
  setIsUserAuthenticated: (_isUserAuthenticated: boolean) => void
}

const useAuthStore = create<AuthState>((set) => ({
  isUserAuthenticated: true,
  setIsUserAuthenticated: (isUserAuthenticated) => set({ isUserAuthenticated }),
}))

export default useAuthStore
