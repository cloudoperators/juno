/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

const ACTIVE_FILTERS = "f"
const SEARCH_TERM = "s"
const DETAILS_VIOLATION_GROUP = "v"

export const readLegacyUrlState = (state: any) => {
  const activeFilters = state?.[ACTIVE_FILTERS]
  const searchTerm = state?.[SEARCH_TERM]
  const violationGroup = state?.[DETAILS_VIOLATION_GROUP]

  return {
    activeFilters,
    searchTerm,
    violationGroup,
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

export const getFiltersForUrl = (prefix: string, filters: any) =>
  filters.reduce((acc: Record<string, string | string[]>, filter: any) => {
    // if the filter key already exists, convert the value to an array and add the new value
    if (acc[`${prefix}${filter.key}`]) {
      if (Array.isArray(acc[`${prefix}${filter.key}`])) {
        ;(acc[`${prefix}${filter.key}`] as string[]).push(filter.value)
      } else {
        acc[`${prefix}${filter.key}`] = [acc[`${prefix}${filter.key}`], filter.value]
      }
    } else {
      acc[`${prefix}${filter.key}`] = filter.value
    }
    return acc
  }, {})

export const convertAppStateToUrlState = (appState: any) => {
  const activeFiltersForUrl = getFiltersForUrl("f_", appState.activeFilters || {})

  return {
    ...activeFiltersForUrl,
    searchTerm: appState.searchTerm || undefined,
    violationGroup: appState.violationGroup || undefined,
  }
}

export const getFiltersForApp = (prefix: string, urlState: Record<string, string | string[]>) => {
  return Object.entries(urlState)
    .filter(([key]) => key.startsWith(prefix))
    .reduce((acc: Array<{ key: string; value: string }>, [key, value]) => {
      const filterKey = key.replace(prefix, "")
      if (value === undefined || value === null) return acc
      // if the value is an array, add each value as a separate filter
      if (Array.isArray(value)) {
        acc = [
          ...acc,
          ...value.map((v) => ({
            key: filterKey,
            value: v.trim(),
          })),
        ]
      }
      // if the value is a string, add it as a single filter
      else if (typeof value === "string") {
        acc.push({ key: filterKey, value: value.trim() })
      }
      return acc
    }, [])
}

export const convertUrlStateToAppState = (urlState: any) => {
  return {
    activeFilters: getFiltersForApp("f_", urlState),
    searchTerm: urlState.searchTerm,
    violationGroup: urlState.violationGroup,
  }
}

// removes a specific filter from the filters object and returns a new object
export const removeFilter = (filters: any, filterKey: string, filterValue: string) => {
  // if filter has more than one value, remove the specific value
  if (Array.isArray(filters?.[filterKey])) {
    const updatedFilters: any = {
      ...filters,
      [filterKey]: filters?.[filterKey].filter((value: string) => value !== filterValue),
    }
    if (updatedFilters?.[filterKey]?.length === 0) {
      delete updatedFilters[filterKey]
    }
    return updatedFilters
  }

  // if filter is a single value, remove the filter key
  const updatedFilters = { ...filters }
  if (updatedFilters?.[filterKey] === filterValue) delete updatedFilters[filterKey]

  return updatedFilters
}

// adds a specific filter to the filters object and returns a new object
export const addFilter = (filters: any, filterKey: string, filterValue: string) => {
  // if the filter already exists, add the value to the existing array
  if (filters?.[filterKey] && Array.isArray(filters[filterKey])) {
    // Create a Set from existing values to remove duplicates
    const filterSet = new Set(filters[filterKey])
    // Add the new value
    filterSet.add(filterValue)
    // Convert back to array
    return {
      ...filters,
      [filterKey]: Array.from(filterSet),
    }
  }
  // If the filter is a single value, convert it to an array
  if (filters?.[filterKey] && typeof filters[filterKey] === "string") {
    return {
      ...filters,
      [filterKey]: [filters[filterKey], filterValue],
    }
  }
  // If the filter does not exist, create a new key with the value
  return {
    ...filters,
    [filterKey]: filterValue,
  }
}
