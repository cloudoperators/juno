/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { Pill, Stack } from "@cloudoperators/juno-ui-components"
import { useNavigate } from "@tanstack/react-router"
import { useFiltersActive, useFiltersActions } from "../StoreProvider"
import { valueToLabel } from "../../lib/helpers"
import { ACTIVE_FILTERS_PREFIX } from "../../constants"
import { removeFilter } from "../../lib/urlStateUtils"

const FilterPills = () => {
  const activeFilters = useFiltersActive()
  const navigate = useNavigate()
  // @ts-ignore
  const { remove } = useFiltersActions()

  if (!activeFilters) return null

  return (
    <Stack wrap gap="2">
      {
        // @ts-ignore
        activeFilters.map(({ key, value, label }: any, i: any) => (
          <Pill
            pillKey={key?.split(":")?.[1]}
            pillValue={value}
            pillKeyLabel={valueToLabel(label)}
            closeable
            onClose={() => {
              remove(key, value)
              // update filters in the URL state
              navigate({
                to: "/violations",
                search: (prev) => {
                  // remove from both active and paused filters
                  const searchParamsWithoutActiveFilter = removeFilter(
                    { ...prev },
                    `${ACTIVE_FILTERS_PREFIX}${key}`,
                    value
                  )
                  return searchParamsWithoutActiveFilter
                },
              })
            }}
            key={i}
          />
        ))
      }
    </Stack>
  )
}

export default FilterPills
