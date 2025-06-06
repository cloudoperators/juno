/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { create } from "zustand"
import { Pages } from "../components/constants"

interface NavigationState {
  currentPage: string
  setCurrentPage: (_page: string) => void
}

const useNavigationStore = create<NavigationState>((set) => ({
  currentPage: Pages.PEAKS,
  setCurrentPage: (page) => set({ currentPage: page }),
}))

export default useNavigationStore
