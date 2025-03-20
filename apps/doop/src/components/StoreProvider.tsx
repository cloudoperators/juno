/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext } from "react"
import { useStore as create } from "zustand"
import createStore from "../lib/store"

// @ts-expect-error TS(2554) FIXME: Expected 1 arguments, but got 0.
const StoreContext = createContext()
const StoreProvider = ({ options, children }: any) => (
  <StoreContext.Provider value={createStore(options)}>{children}</StoreContext.Provider>
)
// @ts-expect-error TS(2554) FIXME: Expected 1 arguments, but got 0.
const useStore = (selector: any) => create(useContext(StoreContext), selector)

// globals
export const useGlobalsEndpoint = () => useStore((s: any) => s.globals.endpoint)
export const useGlobalsActions = () => useStore((s: any) => s.globals.actions)

// user activity
export const useUserActivityIsActive = () => useStore((s: any) => s.userActivity.isActive)
export const useUserActivityActions = () => useStore((s: any) => s.userActivity.actions)

// data
export const useDataLoaded = () => useStore((s: any) => s.data.loaded)
export const useDataClusterIdentities = () => useStore((s: any) => s.data.clusterIdentities)
export const useDataViolationGroups = () => useStore((s: any) => s.data.violationGroups)
export const useDataDetailsViolationGroupKind = () => useStore((s: any) => s.data.detailsViolationGroupKind)
export const useDataDetailsViolationGroup = () => useStore((s: any) => s.data.detailsViolationGroup)
export const useDataSeverityWeights = () => useStore((s: any) => s.data.severityWeights)
export const useDataFilterEntries = () => useStore((s: any) => s.data.filterEntries)
export const useDataFilteredItems = () => useStore((s: any) => s.data.filteredItems)
export const useDataActions = () => useStore((s: any) => s.data.actions)

// filters
export const useFiltersActive = () => useStore((s: any) => s.filters.active)
export const useFiltersSearchTerm = () => useStore((s: any) => s.filters.searchTerm)
export const useFiltersActions = () => useStore((s: any) => s.filters.actions)

export default StoreProvider
