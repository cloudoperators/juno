/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext } from "react"
import { createStore, useStore } from "zustand"
import { devtools } from "zustand/middleware"

import createFiltersSlice from "../lib/slices/createFiltersSlice"
import createAuthDataSlice from "../lib/slices/createAuthDataSlice"
import createGlobalsSlice from "../lib/slices/createGlobalsSlice"
import createUserActivitySlice from "../lib/slices/createUserActivitySlice"

// Entity constants
const ISSUEMATCHES = "IssueMatches"
const SERVICES = "Services"
const COMPONENTS = "Components"

const StoreContext = createContext()

export const StoreProvider = ({ options, children }) => {
  return (
    <StoreContext.Provider
      value={createStore(
        devtools((set, get) => ({
          ...createGlobalsSlice(set, get, options),
          ...createAuthDataSlice(set, get),
          ...createUserActivitySlice(set, get),
          ...createFiltersSlice(set, get),
        }))
      )}
    >
      {children}
    </StoreContext.Provider>
  )
}

const useAppStore = (selector) => useStore(useContext(StoreContext), selector)

// Globals exports
export const useGlobalsEmbedded = () => useAppStore((state) => state.globals.embedded)
export const useGlobalsQueryClientFnReady = () => useAppStore((state) => state.globals.queryClientFnReady)
export const useGlobalsActiveView = () => useAppStore((state) => state.globals.activeView)
export const useGlobalsQueryOptions = (viewName) => useAppStore((state) => state.globals.views[viewName].queryOptions)
export const useGlobalsApiEndpoint = () => useAppStore((state) => state.globals.apiEndpoint)
export const useGlobalsShowPanel = () => useAppStore((state) => state.globals.showPanel)
export const useGlobalsShowServiceDetail = () => useAppStore((state) => state.globals.showServiceDetail)
export const useGlobalsShowIssueDetail = () => useAppStore((state) => state.globals.showIssueDetail)
export const useGlobalsActions = () => useAppStore((state) => state.globals.actions)

// AUTH exports
export const useAuthData = () => useAppStore((state) => state.auth.data)
export const useAuthIsProcessing = () => useAppStore((state) => state.auth.isProcessing)
export const useAuthLoggedIn = () => useAppStore((state) => state.auth.loggedIn)
export const useAuthError = () => useAppStore((state) => state.auth.error)
export const useAuthLastAction = () => useAppStore((state) => state.auth.lastAction)
export const useAuthAppLoaded = () => useAppStore((state) => state.auth.appLoaded)
export const useAuthAppIsLoading = () => useAppStore((state) => state.auth.appIsLoading)
export const useAuthActions = () => useAppStore((state) => state.auth.actions)

// UserActivity exports
export const useUserIsActive = () => useAppStore((state) => state.userActivity.isActive)

export const useUserActivityActions = () => useAppStore((state) => state.userActivity.actions)

// Filter exports for Issues
export const useIssueMatchesFilterLabels = () => useAppStore((state) => state.filters[ISSUEMATCHES].labels)
export const useIssueMatchesActiveFilters = () => useAppStore((state) => state.filters[ISSUEMATCHES].activeFilters)
export const useIssueMatchesSearchTerm = () => useAppStore((state) => state.filters[ISSUEMATCHES].search)
export const useIssueMatchesFilterLabelValues = () =>
  useAppStore((state) => state.filters[ISSUEMATCHES].filterLabelValues)
export const useIssueMatchesPredefinedFilters = () =>
  useAppStore((state) => state.filters[ISSUEMATCHES].predefinedFilters)
export const useIssueMatchesActivePredefinedFilter = () =>
  useAppStore((state) => state.filters[ISSUEMATCHES].activePredefinedFilter)

// Filter exports for Services
export const useServiceFilterLabels = () => useAppStore((state) => state.filters[SERVICES].labels)
export const useServiceActiveFilters = () => useAppStore((state) => state.filters[SERVICES].activeFilters)
export const useServiceSearchTerm = () => useAppStore((state) => state.filters[SERVICES].search)
export const useServiceFilterLabelValues = () => useAppStore((state) => state.filters[SERVICES].filterLabelValues)
export const useServicePredefinedFilters = () => useAppStore((state) => state.filters[SERVICES].predefinedFilters)
export const useServiceActivePredefinedFilter = () =>
  useAppStore((state) => state.filters[SERVICES].activePredefinedFilter)

// Filter exports for Components
export const useComponentFilterLabels = () => useAppStore((state) => state.filters[COMPONENTS].labels)
export const useComponentActiveFilters = () => useAppStore((state) => state.filters[COMPONENTS].activeFilters)
export const useComponentSearchTerm = () => useAppStore((state) => state.filters[COMPONENTS].search)
export const useComponentFilterLabelValues = () => useAppStore((state) => state.filters[COMPONENTS].filterLabelValues)
export const useComponentPredefinedFilters = () => useAppStore((state) => state.filters[COMPONENTS].predefinedFilters)
export const useComponentActivePredefinedFilter = () =>
  useAppStore((state) => state.filters[COMPONENTS].activePredefinedFilter)

// Filter actions
export const useFilterActions = () => useAppStore((state) => state.filters.actions)

export default StoreProvider
