/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

const ACTIVE_FILTERS = "f"
const PAUSED_FILTERS = "pf"
const ACTIVE_PREDEFINED_FILTER = "p"
const DETAILS_FOR = "d"
const SEARCH_TERM = "s"
const ACTIVE_TAB = "t"
/// silences
const SILENCE_REG_EX = "r"
const SILENCE_STATUS = "st"

export const readLegacyUrlState = (state: any) => {
  const activeFilters = state?.[ACTIVE_FILTERS]
  const pausedFilters = state?.[PAUSED_FILTERS]
  const searchTerm = state?.[SEARCH_TERM]
  const activePredefinedFilter = state?.[ACTIVE_PREDEFINED_FILTER]
  const detailsFor = state?.[DETAILS_FOR]
  const activeTab = state?.[ACTIVE_TAB]
  const silenceRegEx = state?.[SILENCE_REG_EX]
  const silenceStatus = state?.[SILENCE_STATUS]

  return {
    activeFilters,
    pausedFilters,
    searchTerm,
    activePredefinedFilter,
    detailsFor,
    activeTab,
    silenceRegEx,
    silenceStatus,
  }
}

export const extractSearchStringFromHashFragment = (searchString: string) => {
  /*
   * In case of hashed routing Tanstack router returns URL search params of the entire URL rather than just from the hashed part.
   * We'll have to extract the query part from the hash because otherwise in embedded mode the app will be taking search params from the shell app as well.
   * Sanitize the search string by extracting the substring between the first '?' and the next '?' (if any), keeping the first '?'.
   * https://github.com/TanStack/router/issues/4370
   * http://localhost:3000/?preHashParam=prehashtest#/services?postHashParam1=test1?preHashParam=prehashtest
   * searchString = "?postHashParam1=test1?preHashParam=prehashtest"
   * searchStringFromHash = "?postHashParam1=test1"
   */
  const postHashParams = searchString.indexOf("?")
  if (postHashParams === -1) return "" // If no query part is found, return an empty object
  const preHashParams = searchString.indexOf("?", postHashParams + 1)
  return searchString.slice(postHashParams, preHashParams === -1 ? undefined : preHashParams)
}

export const getFiltersForUrl = (prefix: string, filters: any) => {
  return {
    ...Object.entries(filters)
      .map(([key, value]) => {
        if (value === undefined || value === null) return {}
        if (Array.isArray(value)) {
          return { [`${prefix}${key}`]: value.join(",") }
        }
        return { [`${prefix}${key}`]: value }
      })
      .reduce((acc, curr) => ({ ...acc, ...curr }), {}),
  }
}

export const convertAppStateToUrlState = (appState: any) => {
  const activeFiltersForUrl = getFiltersForUrl("f_", appState.activeFilters)
  const pausedFiltersForUrl = getFiltersForUrl("pf_", appState.pausedFilters)

  return {
    ...activeFiltersForUrl,
    ...pausedFiltersForUrl,
    activeTab: appState.activeTab,
    searchTerm: appState.searchTerm,
    detailsFor: appState.detailsFor,
    silenceRegEx: appState.silenceRegEx,
    silenceStatus: appState.silenceStatus,
    silenceDetailsFor: appState.silenceDetailsFor,
  }
}

export const getFiltersForApp = (prefix: string, urlState: Record<string, string | string[]>) => {
  return Object.entries(urlState)
    .filter(([key]) => key.startsWith(prefix))
    .reduce((acc: Record<string, string[]>, [key, value]) => {
      const filterKey = key.replace(prefix, "")
      if (value === undefined || value === null) return acc
      if (Array.isArray(value)) {
        acc[filterKey] = value.map((v) => v.trim())
      } else if (typeof value === "string") {
        acc[filterKey] = [value.trim()]
      } else {
        return acc
      }
      return acc
    }, {})
}

export const convertUrlStateToAppState = (urlState: any) => {
  return {
    activeFilters: getFiltersForApp("f_", urlState),
    pausedFilters: getFiltersForApp("pf_", urlState),
    activePredefinedFilter: urlState.activePredefinedFilter,
    activeTab: urlState.activeTab,
    searchTerm: urlState.searchTerm,
    detailsFor: urlState.detailsFor,
    silenceRegEx: urlState.silenceRegEx,
    silenceStatus: urlState.silenceStatus,
  }
}
