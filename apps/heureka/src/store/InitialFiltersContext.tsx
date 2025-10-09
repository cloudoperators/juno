/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, ReactNode } from "react"

interface InitialFiltersContextType {
  hasAppliedInitialFilters: boolean
  markInitialFiltersApplied: () => void
}

const InitialFiltersContext = createContext<InitialFiltersContextType | undefined>(undefined)

interface InitialFiltersProviderProps {
  children: ReactNode
}

export const InitialFiltersProvider = ({ children }: InitialFiltersProviderProps) => {
  const [hasAppliedInitialFilters, setHasAppliedInitialFilters] = useState(false)

  const markInitialFiltersApplied = () => {
    setHasAppliedInitialFilters(true)
  }

  return (
    <InitialFiltersContext.Provider
      value={{
        hasAppliedInitialFilters,
        markInitialFiltersApplied,
      }}
    >
      {children}
    </InitialFiltersContext.Provider>
  )
}

export const useInitialFilters = () => {
  const context = useContext(InitialFiltersContext)
  if (context === undefined) {
    throw new Error("useInitialFilters must be used within an InitialFiltersProvider")
  }
  return context
}
