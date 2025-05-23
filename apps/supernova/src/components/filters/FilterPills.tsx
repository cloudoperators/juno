/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { Pill, Stack } from "@cloudoperators/juno-ui-components"
import { useActiveFilters, usePausedFilters, useFilterActions } from "../StoreProvider"

const FilterPills = () => {
  const activeFilters = useActiveFilters()
  const pausedFilters = usePausedFilters()
  const { removeActiveFilter, addActiveFilter, addPausedFilter, removePausedFilter } = useFilterActions()

  const pauseFilter = (key: string, value: string) => {
    addPausedFilter(key, value)
  }

  const deleteFilter = (key: string, value: string) => {
    removeActiveFilter(key, value)
    removePausedFilter(key, value)
  }

  const activateFilter = (key: string, value: string) => {
    addActiveFilter(key, value)
    removePausedFilter(key, value)
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
