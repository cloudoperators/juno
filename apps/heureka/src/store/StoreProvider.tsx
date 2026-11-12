/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, ReactNode } from "react"
import { StoreContext, StoreContextType } from "./StoreContext"

interface StoreProviderProps {
  children: ReactNode
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const [hasAppliedInitialFilters, setHasAppliedInitialFilters] = useState(false)

  const markInitialFiltersApplied = () => {
    setHasAppliedInitialFilters(true)
  }

  const storeValue: StoreContextType = {
    hasAppliedInitialFilters,
    markInitialFiltersApplied,
  }

  return <StoreContext.Provider value={storeValue}>{children}</StoreContext.Provider>
}
