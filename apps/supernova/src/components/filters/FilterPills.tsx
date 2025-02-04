/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { Pill, Stack } from "@cloudoperators/juno-ui-components"
import { useActiveFilters, usePausedFilters, useFilterActions } from "../StoreProvider"

const FilterPills = () => {
  const activeFilters = useActiveFilters()
  const pausedFilters = usePausedFilters()
  // @ts-ignore
  const { removeActiveFilter, addActiveFilter, addPausedFilter, removePausedFilter } = useFilterActions()

  const pauseFilter = (key: any, value: any) => {
    addPausedFilter(key, value)
  }

  const deleteFilter = (key: any, value: any) => {
    removeActiveFilter(key, value)
    removePausedFilter(key, value)
  }

  const activateFilter = (key: any, value: any) => {
    addActiveFilter(key, value)
    removePausedFilter(key, value)
  }

  return (
    <Stack gap="2" wrap={true}>
      {/* @ts-expect-error TS(2550): Property 'entries' does not exist on type 'ObjectC... Remove this comment to see the */}
      {Object.entries(activeFilters).map(([key, filterItems]) => {
        // @ts-ignore
        return filterItems?.map((item: any) =>
          // @ts-ignore
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
