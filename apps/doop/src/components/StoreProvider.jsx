/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext } from "react"
import { useStore as create } from "zustand"
import createStore from "../lib/store"

const StoreContext = createContext()
const StoreProvider = ({ options, children }) => (
  <StoreContext.Provider value={createStore(options)}>{children}</StoreContext.Provider>
)

const useStore = (selector) => create(useContext(StoreContext), selector)

// globals
export const useGlobalsEndpoint = () => useStore((s) => s.globals.endpoint)
export const useGlobalsActions = () => useStore((s) => s.globals.actions)

// user activity
export const useUserActivityIsActive = () => useStore((s) => s.userActivity.isActive)
export const useUserActivityActions = () => useStore((s) => s.userActivity.actions)

// data
export const useDataLoaded = () => useStore((s) => s.data.loaded)
export const useDataClusterIdentities = () => useStore((s) => s.data.clusterIdentities)
export const useDataViolationGroups = () => useStore((s) => s.data.violationGroups)
export const useDataDetailsViolationGroupKind = () => useStore((s) => s.data.detailsViolationGroupKind)
export const useDataDetailsViolationGroup = () => useStore((s) => s.data.detailsViolationGroup)
export const useDataSeverityWeights = () => useStore((s) => s.data.severityWeights)
export const useDataFilterEntries = () => useStore((s) => s.data.filterEntries)
export const useDataFilteredItems = () => useStore((s) => s.data.filteredItems)
export const useDataActions = () => useStore((s) => s.data.actions)

// filters
export const useFiltersActive = () => useStore((s) => s.filters.active)
export const useFiltersSearchTerm = () => useStore((s) => s.filters.searchTerm)
export const useFiltersActions = () => useStore((s) => s.filters.actions)

export default StoreProvider
