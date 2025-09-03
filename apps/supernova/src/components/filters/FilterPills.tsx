/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { Pill, Stack } from "@cloudoperators/juno-ui-components"
import { useActiveFilters, usePausedFilters, useFilterActions } from "../StoreProvider"
import { useNavigate } from "@tanstack/react-router"
import { addFilter, getFiltersForUrl, removeFilter } from "../../lib/urlStateUtils"
import { ACTIVE_FILTERS_PREFIX, PAUSED_FILTERS_PREFIX } from "../../constants"

const FilterPills = () => {
  const navigate = useNavigate()
  const activeFilters = useActiveFilters()
  const pausedFilters = usePausedFilters()
  const { removeActiveFilter, addActiveFilter, addPausedFilter, removePausedFilter } = useFilterActions()

  const pauseFilter = (key: string, value: string) => {
    addPausedFilter(key, value)

    // update filters in the URL state
    navigate({
      to: "/alerts",
      search: (prev) => ({
        ...prev,
        // add to paused filters
        ...getFiltersForUrl("pf_", addFilter(pausedFilters, key, value)),
      }),
    })
  }

  const deleteFilter = (key: string, value: string) => {
    removeActiveFilter(key, value)
    removePausedFilter(key, value)

    // update filters in the URL state
    navigate({
      to: "/alerts",
      search: (prev) => {
        // remove from both active and paused filters
        const searchParamsWithoutActiveFilter = removeFilter({ ...prev }, `${ACTIVE_FILTERS_PREFIX}${key}`, value)
        const searchParamsWithoutActiveAndPausedFilter = removeFilter(
          { ...searchParamsWithoutActiveFilter },
          `${PAUSED_FILTERS_PREFIX}${key}`,
          value
        )
        return searchParamsWithoutActiveAndPausedFilter
      },
    })
  }

  const activateFilter = (key: string, value: string) => {
    addActiveFilter(key, value)
    removePausedFilter(key, value)

    // update filters in the URL state
    navigate({
      to: "/alerts",
      search: (prev) => removeFilter({ ...prev }, `${PAUSED_FILTERS_PREFIX}${key}`, value), // remove from paused filters
    })
  }

  return (
    <Stack gap="2" wrap={true}>
      {Object.entries(activeFilters).map(([key, filterItems]) => {
        return filterItems?.map((item: any) =>
          pausedFilters[key]?.includes(item) ? (
            <Pill
              className="bg-theme-background-lvl-4 opacity-70"
              pillKey={key}
              pillValue={item}
              closeable
              onClose={() => deleteFilter(key, item)}
              key={`${key}:${item}`}
              onClick={() => activateFilter(key, item)}
            />
          ) : (
            <Pill
              pillKey={key}
              pillValue={item}
              closeable
              onClose={() => deleteFilter(key, item)}
              key={`${key}:${item}`}
              onClick={() => pauseFilter(key, item)}
            />
          )
        )
      })}
    </Stack>
  )
}

export default FilterPills
