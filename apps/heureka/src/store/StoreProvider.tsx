/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, ReactNode } from "react"

// Store state interface - easily extensible for future global state
interface StoreState {
  hasAppliedInitialFilters: boolean
}

// Store actions interface - easily extensible for future actions
interface StoreActions {
  markInitialFiltersApplied: () => void
}

// Combined store context type
interface StoreContextType extends StoreState, StoreActions {}

const StoreContext = createContext<StoreContextType | undefined>(undefined)

interface StoreProviderProps {
  children: ReactNode
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  // State management
  const [hasAppliedInitialFilters, setHasAppliedInitialFilters] = useState(false)

  // Actions
  const markInitialFiltersApplied = () => {
    setHasAppliedInitialFilters(true)
  }
  // Future actions can be added here

  const storeValue: StoreContextType = {
    // State
    hasAppliedInitialFilters,

    // Actions
    markInitialFiltersApplied,
  }

  return <StoreContext.Provider value={storeValue}>{children}</StoreContext.Provider>
}

export const useStore = () => {
  const context = useContext(StoreContext)
  if (context === undefined) {
    throw new Error("useStore must be used within a StoreProvider")
  }
  return context
}
