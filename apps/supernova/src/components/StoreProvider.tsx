/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext } from "react"
import { createStore, useStore, StoreApi } from "zustand"
import { devtools } from "zustand/middleware"

import createSilencesSlice from "../lib/createSilencesSlice"
import createAlertsSlice, { AlertsSlice } from "../lib/createAlertsSlice"
import createFiltersSlice, { FilterSlice } from "../lib/createFiltersSlice"
import createGlobalsSlice from "../lib/createGlobalsSlice"
import createUserActivitySlice from "../lib/createUserActivitySlice"

const StoreContext = createContext<StoreApi<AppState> | null>(null)

export type AppState = FilterSlice & AlertsSlice & Record<string, any>

interface StoreProviderProps {
  options?: Record<string, any> // should be defined later on for the props
  children: React.ReactNode
}

export const StoreProvider = ({ options, children }: StoreProviderProps) => {
  return (
    <StoreContext.Provider
      value={createStore<AppState>((set, get, store) => ({
        ...createGlobalsSlice(options)(set, get, store),
        ...createUserActivitySlice(set),
        ...createAlertsSlice(set, get),
        ...createFiltersSlice(options)(set, get, store),
        ...createSilencesSlice(options)(set, get, store),
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

// atomic exports only instead of exporting whole store
// See reasoning here: https://tkdodo.eu/blog/working-with-zustand

// Globals exports
export const useGlobalsIsURLRead = () => useAppStore((s: any) => s.globals.isURLRead)
export const useGlobalsEmbedded = () => useAppStore((state: any) => state.globals.embedded)
export const useShowDetailsFor = () => useAppStore((state: any) => state.globals.showDetailsFor)
export const useGlobalsApiEndpoint = () => useAppStore((state: any) => state.globals.apiEndpoint)
export const useGlobalsActiveSelectedTab = () => useAppStore((state: any) => state.globals.activeSelectedTab)
export const useGlobalsActions = () => useAppStore((state: any) => state.globals.actions)
export const useGlobalsUsername = () => useAppStore((state: any) => state.globals.username)

// UserActivity exports
export const useUserIsActive = () => useAppStore((state: any) => state.userActivity.isActive)

export const useUserActivityActions = () => useAppStore((state: any) => state.userActivity.actions)

// Alert exports
export const useAlertsItems = () => useAppStore((state: AppState) => state.alerts.items)
export const useAlertsItemsFiltered = () => useAppStore((state: AppState) => state.alerts.itemsFiltered)
export const useAlertsTotalCounts = () => useAppStore((state: AppState) => state.alerts.totalCounts)
export const useAlertsSeverityCountsPerRegion = () =>
  useAppStore((state: AppState) => state.alerts.severityCountsPerRegion)
export const useAlertsRegions = () => useAppStore((state: AppState) => state.alerts.regions)
export const useAlertsRegionsFiltered = () => useAppStore((state: AppState) => state.alerts.regionsFiltered)
export const useAlertsUpdatedAt = () => useAppStore((state: AppState) => state.alerts.updatedAt)
export const useAlertEnrichedLabels = () => useAppStore((state: AppState) => state.alerts.enrichedLabels)

export const useAlertsActions = () => useAppStore((state: AppState) => state.alerts.actions)

// Filter exports
export const useFilterLabels = () => useAppStore((state: AppState) => state.filters.labels)
export const useActiveFilters = () => useAppStore((state: AppState) => state.filters.activeFilters)
export const usePausedFilters = () => useAppStore((state: AppState) => state.filters.pausedFilters)
export const useSearchTerm = () => useAppStore((state: AppState) => state.filters.searchTerm)
export const useFilterLabelValues = () => useAppStore((state: AppState) => state.filters.filterLabelValues)
export const usePredefinedFilters = () => useAppStore((state: AppState) => state.filters.predefinedFilters)
export const useActivePredefinedFilter = () => useAppStore((state: AppState) => state.filters.activePredefinedFilter)
export const useFilterActions = () => useAppStore((state: AppState) => state.filters.actions)

// Silences exports
export const useSilencesItems = () => useAppStore((state: any) => state.silences.items)
export const useSilencesExcludedLabels = () => useAppStore((state: any) => state.silences.excludedLabels)
export const useSilencesIsUpdating = () => useAppStore((state: any) => state.silences.isUpdating)
export const useSilencesUpdatedAt = () => useAppStore((state: any) => state.silences.updatedAt)
export const useShowDetailsForSilence = () => useAppStore((state: any) => state.silences.showDetailsForSilence)
export const useSilencesStatus = () => useAppStore((state: any) => state.silences.status)
export const useSilencesRegEx = () => useAppStore((state: any) => state.silences.regEx)
export const useSilenceTemplates = () => useAppStore((state: any) => state.silences.templates)

export const useSilencesActions = () => useAppStore((state: any) => state.silences.actions)

export const useGetStateForUrl = () =>
  useAppStore((state: any) => ({
    activeFilters: state.filters.activeFilters,
    pausedFilters: state.filters.pausedFilters,
    activePredefinedFilter: state.filters.activePredefinedFilter,
    searchTerm: state.filters.searchTerm,
    activeSelectedTab: state.globals.activeSelectedTab,
    showDetailsFor: state.globals.showDetailsFor,
    silencesRegExp: state.silences.regEx,
    silencesStatus: state.silences.status,
    showDetailsForSilence: state.silences.showDetailsForSilence,
  }))
