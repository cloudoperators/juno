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

// @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
const StoreContext = createContext()

export const StoreProvider = ({ options, children }: any) => {
  return (
    <StoreContext.Provider
      value={createStore(
        devtools((set, get) => ({
          ...createGlobalsSlice(set, get, options),
          ...createAuthDataSlice(set, get),
          // @ts-expect-error TS(2554): Expected 1 arguments, but got 2.
          ...createUserActivitySlice(set, get),
          ...createFiltersSlice(set, get),
        }))
      )}
    >
      {children}
    </StoreContext.Provider>
  )
}
// @ts-ignore
const useAppStore = (selector: any) => useStore(useContext(StoreContext), selector)

// Globals exports
export const useGlobalsEmbedded = () => useAppStore((state: any) => state.globals.embedded)
export const useGlobalsQueryClientFnReady = () => useAppStore((state: any) => state.globals.queryClientFnReady)
export const useGlobalsActiveView = () => useAppStore((state: any) => state.globals.activeView)
export const useGlobalsQueryOptions = (viewName: any) =>
  useAppStore((state: any) => state.globals.views[viewName].queryOptions)
export const useGlobalsApiEndpoint = () => useAppStore((state: any) => state.globals.apiEndpoint)
export const useGlobalsShowPanel = () => useAppStore((state: any) => state.globals.showPanel)
export const useGlobalsShowServiceDetail = () => useAppStore((state: any) => state.globals.showServiceDetail)
export const useGlobalsShowIssueDetail = () => useAppStore((state: any) => state.globals.showIssueDetail)
export const useGlobalsActions = () => useAppStore((state: any) => state.globals.actions)

// AUTH exports
export const useAuthData = () => useAppStore((state: any) => state.auth.data)
export const useAuthIsProcessing = () => useAppStore((state: any) => state.auth.isProcessing)
export const useAuthLoggedIn = () => useAppStore((state: any) => state.auth.loggedIn)
export const useAuthError = () => useAppStore((state: any) => state.auth.error)
export const useAuthLastAction = () => useAppStore((state: any) => state.auth.lastAction)
export const useAuthAppLoaded = () => useAppStore((state: any) => state.auth.appLoaded)
export const useAuthAppIsLoading = () => useAppStore((state: any) => state.auth.appIsLoading)
export const useAuthActions = () => useAppStore((state: any) => state.auth.actions)

// UserActivity exports
export const useUserIsActive = () => useAppStore((state: any) => state.userActivity.isActive)

export const useUserActivityActions = () => useAppStore((state: any) => state.userActivity.actions)

// Filter exports for Issues
export const useIssueMatchesFilterLabels = () => useAppStore((state: any) => state.filters[ISSUEMATCHES].labels)
export const useIssueMatchesActiveFilters = () => useAppStore((state: any) => state.filters[ISSUEMATCHES].activeFilters)
export const useIssueMatchesSearchTerm = () => useAppStore((state: any) => state.filters[ISSUEMATCHES].search)
export const useIssueMatchesFilterLabelValues = () =>
  useAppStore((state: any) => state.filters[ISSUEMATCHES].filterLabelValues)
export const useIssueMatchesPredefinedFilters = () =>
  useAppStore((state: any) => state.filters[ISSUEMATCHES].predefinedFilters)
export const useIssueMatchesActivePredefinedFilter = () =>
  useAppStore((state: any) => state.filters[ISSUEMATCHES].activePredefinedFilter)

// Filter exports for Services
export const useServiceFilterLabels = () => useAppStore((state: any) => state.filters[SERVICES].labels)
export const useServiceActiveFilters = () => useAppStore((state: any) => state.filters[SERVICES].activeFilters)
export const useServiceSearchTerm = () => useAppStore((state: any) => state.filters[SERVICES].search)
export const useServiceFilterLabelValues = () => useAppStore((state: any) => state.filters[SERVICES].filterLabelValues)
export const useServicePredefinedFilters = () => useAppStore((state: any) => state.filters[SERVICES].predefinedFilters)
export const useServiceActivePredefinedFilter = () =>
  useAppStore((state: any) => state.filters[SERVICES].activePredefinedFilter)

// Filter exports for Components
export const useComponentFilterLabels = () => useAppStore((state: any) => state.filters[COMPONENTS].labels)
export const useComponentActiveFilters = () => useAppStore((state: any) => state.filters[COMPONENTS].activeFilters)
export const useComponentSearchTerm = () => useAppStore((state: any) => state.filters[COMPONENTS].search)
export const useComponentFilterLabelValues = () =>
  useAppStore((state: any) => state.filters[COMPONENTS].filterLabelValues)
export const useComponentPredefinedFilters = () =>
  useAppStore((state: any) => state.filters[COMPONENTS].predefinedFilters)
export const useComponentActivePredefinedFilter = () =>
  useAppStore((state: any) => state.filters[COMPONENTS].activePredefinedFilter)

// Filter actions
export const useFilterActions = () => useAppStore((state: any) => state.filters.actions)

export default StoreProvider
