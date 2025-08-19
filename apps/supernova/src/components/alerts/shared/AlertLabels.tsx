/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { Pill, Stack } from "@cloudoperators/juno-ui-components"
import { useNavigate } from "@tanstack/react-router"

import { useActiveFilters, useFilterLabels, useFilterActions } from "../../StoreProvider"
import { addFilter, removeFilter } from "../../../lib/urlStateUtils"
import { ACTIVE_FILTERS_PREFIX } from "../../../constants"

/**
 * For each of the given alert's labels which is included in the configured filterLabels render a Pill showing filterLabel and filterValue
 */
const AlertLabels = ({ alert, showAll }: any) => {
  const navigate = useNavigate()
  const filterLabels = showAll ? Object.keys(alert?.labels) : useFilterLabels()
  const activeFilters = useActiveFilters()
  const { addActiveFilter, removeActiveFilter } = useFilterActions()

  const handleLabelClick = (e: any, filterLabel: any, filterValue: any) => {
    // if filter isn't already active, add it
    if (!activeFilters?.[filterLabel]?.includes(filterValue)) {
      e.stopPropagation()
      addActiveFilter(filterLabel, filterValue)
      // add filter to URL state
      navigate({
        to: "/",
        search: (prev) => addFilter({ ...prev }, `${ACTIVE_FILTERS_PREFIX}${filterLabel}`, filterValue),
      })
    } else {
      // otherwise remove it
      handleRemoveFilter(e, filterLabel, filterValue)
    }
  }

  const handleRemoveFilter = (e: any, filterLabel: any, filterValue: any) => {
    e.stopPropagation()
    removeActiveFilter(filterLabel, filterValue)
    navigate({
      to: "/",
      search: (prev) => removeFilter({ ...prev }, `${ACTIVE_FILTERS_PREFIX}${filterLabel}`, filterValue),
    })
  }

  return (
    <Stack gap="2" alignment="start" wrap={true}>
      {filterLabels.map((filterLabel: any) => {
        const value = alert?.labels?.[filterLabel]
        const isActive = activeFilters?.[filterLabel]?.includes(value)

        return (
          value && (
            <Pill
              key={filterLabel}
              pillKey={filterLabel}
              pillValue={value}
              onClick={(e: any, _: any) => handleLabelClick(e, filterLabel, value)}
              closeable={isActive}
              onClose={(e: any, _: any) => handleRemoveFilter(e, filterLabel, value)}
            />
          )
        )
      })}
    </Stack>
  )
}

export default AlertLabels
