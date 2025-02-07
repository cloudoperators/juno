/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { Pill, Stack } from "@cloudoperators/juno-ui-components"

import { useActiveFilters, useFilterLabels, useFilterActions } from "../../StoreProvider"

/**
 * For each of the given alert's labels which is included in the configured filterLabels render a Pill showing filterLabel and filterValue
 */
const AlertLabels = ({ alert, showAll }: any) => {
  const filterLabels = showAll ? Object.keys(alert?.labels) : useFilterLabels()
  const activeFilters = useActiveFilters()
  // @ts-ignore
  const { addActiveFilter, removeActiveFilter } = useFilterActions()

  const handleLabelClick = (e: any, filterLabel: any, filterValue: any) => {
    // if filter isn't already active, add it
    // @ts-ignore
    if (!activeFilters?.[filterLabel]?.includes(filterValue)) {
      e.stopPropagation()
      addActiveFilter(filterLabel, filterValue)
    } else {
      // otherwise remove it
      handleRemoveFilter(e, filterLabel, filterValue)
    }
  }

  const handleRemoveFilter = (e: any, filterLabel: any, filterValue: any) => {
    e.stopPropagation()
    removeActiveFilter(filterLabel, filterValue)
  }

  return (
    <Stack gap="2" alignment="start" wrap={true}>
      {
        // @ts-ignore
        filterLabels.map((filterLabel: any) => {
          let value = alert?.labels?.[filterLabel]
          // @ts-ignore
          let isActive = activeFilters?.[filterLabel]?.includes(value)

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
        })
      }
    </Stack>
  )
}

export default AlertLabels
