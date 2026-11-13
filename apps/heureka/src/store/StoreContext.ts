/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createContext, useContext } from "react"

interface StoreState {
  hasAppliedInitialFilters: boolean
}

interface StoreActions {
  markInitialFiltersApplied: () => void
}

export interface StoreContextType extends StoreState, StoreActions {}

export const StoreContext = createContext<StoreContextType | undefined>(undefined)

export const useStore = () => {
  const context = useContext(StoreContext)
  if (context === undefined) {
    throw new Error("useStore must be used within a StoreProvider")
  }
  return context
}
