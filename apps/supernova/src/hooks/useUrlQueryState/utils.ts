/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

const ACTIVE_FILTERS_PREFIX = "f_"
const ACTIVE_PREDEFINED_FILTER = "predefined_filter"
const DETAILS_FOR = "details_for"
const SEARCH_TERM = "search_term"
const ACTIVE_TAB = "active_tab"
const SILENCE_REG_EXP = "silence_exp"
const SILENCE_STATUS = "silence_status"
const SILENCE_DETAIL = "silence_detail_for"

// This utility extracts filters from the parsed query string
const transformFiltersToAppState = ({ urlState, filterLabels, prefix }: any) =>
  Object.entries(urlState).reduce((acc: any, [key, value]) => {
    const [_, filter] = key.split(prefix)
    //pick keys that are supposed to be filters
    if (key.startsWith(ACTIVE_FILTERS_PREFIX) && filterLabels.includes(filter)) {
      return {
        ...acc,
        [filter]: Array.isArray(value) ? value : [value],
      }
    }
    return acc
  }, {})

// This prefixes each filter keys so it does not overlap with other keys in the URL querystring
const transformFiltersToUrlState = ({ filters, prefix }: any) =>
  Object.entries(filters).reduce((acc: any, [key, value]) => {
    return {
      ...acc,
      [`${prefix}${key}`]: value,
    }
  }, {})

// This utility transforms app state to the state that can be saved in the URL querystring
export const transformAppStateToUrlState = (appState: any) => {
  const {
    activeFilters,
    searchTerm,
    activePredefinedFilter,
    showDetailsFor,
    activeSelectedTab,
    silencesRegExp,
    silencesStatus,
    showDetailsForSilence,
  } = appState

  return {
    ...transformFiltersToUrlState({ filters: activeFilters, prefix: ACTIVE_FILTERS_PREFIX }),
    [ACTIVE_PREDEFINED_FILTER]: activePredefinedFilter,
    [DETAILS_FOR]: showDetailsFor,
    [ACTIVE_TAB]: activeSelectedTab,
    [SEARCH_TERM]: searchTerm,
    [SILENCE_REG_EXP]: silencesRegExp,
    [SILENCE_STATUS]: silencesStatus,
    [SILENCE_DETAIL]: showDetailsForSilence,
  }
}

// This utility transforms state from the URL to the app state
export const transformUrlStateToAppState = (urlState: any, filterLabels: any) => {
  return {
    activeFilters: transformFiltersToAppState({ urlState, filterLabels, prefix: ACTIVE_FILTERS_PREFIX }),
    searchTerm: urlState[SEARCH_TERM],
    activePredefinedFilter: urlState[ACTIVE_PREDEFINED_FILTER],
    showDetailsFor: urlState[DETAILS_FOR],
    activeSelectedTab: urlState[ACTIVE_TAB],
    silenceRegEx: urlState[SILENCE_REG_EXP],
    silenceStatus: urlState[SILENCE_STATUS],
    silenceDetail: urlState[SILENCE_DETAIL],
  }
}
