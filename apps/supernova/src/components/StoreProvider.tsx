/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext } from "react"
import { createStore, useStore } from "zustand"
import { devtools } from "zustand/middleware"

import createSilencesSlice from "../lib/createSilencesSlice"
import createAlertsSlice from "../lib/createAlertsSlice"
import createFiltersSlice from "../lib/createFiltersSlice"
import createGlobalsSlice from "../lib/createGlobalsSlice"
import createUserActivitySlice from "../lib/createUserActivitySlice"

// @ts-expect-error TS(2554) FIXME: Expected 1 arguments, but got 0.
const StoreContext = createContext()

export const StoreProvider = ({ options, children }: any) => {
  return (
    <StoreContext.Provider
      value={createStore(
        devtools((set, get) => ({
          ...createGlobalsSlice(set, get, options),
          // @ts-expect-error TS(2554) FIXME: Expected 1 arguments, but got 0.
          ...createUserActivitySlice(set, get),
          ...createAlertsSlice(set, get),
          ...createFiltersSlice(set, get, options),
          ...createSilencesSlice(set, get, options),
        }))
      )}
    >
      {children}
    </StoreContext.Provider>
  )
}
// @ts-expect-error TS(2554) FIXME: Expected 1 arguments, but got 0.
const useAppStore = (selector: any) => useStore(useContext(StoreContext), selector)

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
export const useAlertsItems = () => useAppStore((state: any) => state.alerts.items)
export const useAlertsItemsFiltered = () => useAppStore((state: any) => state.alerts.itemsFiltered)
export const useAlertsTotalCounts = () => useAppStore((state: any) => state.alerts.totalCounts)
export const useAlertsSeverityCountsPerRegion = () => useAppStore((state: any) => state.alerts.severityCountsPerRegion)
export const useAlertsRegions = () => useAppStore((state: any) => state.alerts.regions)
export const useAlertsRegionsFiltered = () => useAppStore((state: any) => state.alerts.regionsFiltered)
export const useAlertsUpdatedAt = () => useAppStore((state: any) => state.alerts.updatedAt)
export const useAlertEnrichedLabels = () => useAppStore((state: any) => state.alerts.enrichedLabels)

export const useAlertsActions = () => useAppStore((state: any) => state.alerts.actions)

// Filter exports
export const useFilterLabels = () => useAppStore((state: any) => state.filters.labels)
export const useActiveFilters = () => useAppStore((state: any) => state.filters.activeFilters)
export const usePausedFilters = () => useAppStore((state: any) => state.filters.pausedFilters)
export const useSearchTerm = () => useAppStore((state: any) => state.filters.searchTerm)
export const useFilterLabelValues = () => useAppStore((state: any) => state.filters.filterLabelValues)
export const usePredefinedFilters = () => useAppStore((state: any) => state.filters.predefinedFilters)
export const useActivePredefinedFilter = () => useAppStore((state: any) => state.filters.activePredefinedFilter)
export const useFilterPills = () => useAppStore((state: any) => state.filters.filterPills)

export const useFilterActions = () => useAppStore((state: any) => state.filters.actions)

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
