/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext } from "react"
import { createStore, useStore, StoreApi } from "zustand"

import createPluginSlice, { PluginSlice } from "../lib/store/createPluginSlice"
import createGlobalSlice, { GlobalsSlice } from "../lib/store/createGlobalsSlice"

const StoreContext = createContext<StoreApi<AppState> | null>(null)

export type AppState = PluginSlice & GlobalsSlice

interface StoreProviderProps {
  options?: Record<string, any> // should be defined later on for the props
  children: React.ReactNode
}

export const StoreProvider = ({ options, children }: StoreProviderProps) => {
  return (
    <StoreContext.Provider
      value={createStore<AppState>((set, get, store) => ({
        ...createPluginSlice(set, get, store),
        ...createGlobalSlice(set, get, store),
      }))}
    >
      {children}
    </StoreContext.Provider>
  )
}

const useAppStore = <T,>(selector: (state: AppState) => T): T => {
  const store = useContext(StoreContext)
  if (!store) {
    throw new Error("useAppStore must be used within a StoreProvider")
  }
  return useStore(store, selector)
}
export const useGlobalsUrlStateKey = () => useAppStore((state: any) => state.globals.urlStateKey)
export const useApiEndpoint = () => useAppStore((state: any) => state.globals.apiEndpoint)
export const useNamespace = () => useAppStore((state: any) => state.globals.namespace)
export const useToken = () => useAppStore((state: any) => state.globals.token)
export const useShowDefinitionPanel = () => useAppStore((state: any) => state.globals.showDefinitionPanel)
export const usePanel = () => useAppStore((state: any) => state.globals.panel)
export const useGlobalsActions = () => useAppStore((state: any) => state.globals.actions)

/// Plugin
export const usePluginConfig = () => useAppStore((state: any) => state.plugin.pluginConfig)
export const useFilteredPluginConfigs = () => useAppStore((state: any) => state.plugin.filteredPluginConfigs)
export const useShowDetailsFor = () => useAppStore((state: any) => state.plugin.showDetailsFor)
export const useSearchTerm = () => useAppStore((state: any) => state.plugin.searchTerm)
export const useLabelValueFilter = () => useAppStore((state: any) => state.plugin.labelValueFilter)
export const useLabelValuesFilters = () => useAppStore((state: any) => state.plugin.labelValuesFilters)
export const usePluginActions = () => useAppStore((state: any) => state.plugin.actions)

export default StoreProvider
