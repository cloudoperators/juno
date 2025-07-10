/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback } from "react"
import { useLoaderData, useNavigate } from "@tanstack/react-router"
import { Filters } from "../common/Filters"
import { FilterSettings } from "../common/Filters/types"
import { getFiltersForUrl } from "./utils"

export const VulnerabilitiesFilters = () => {
  const navigate = useNavigate()
  const { filters, filterSettings } = useLoaderData({ from: "/vulnerabilities/" })

  const handleFilterChange = useCallback(
    (updatedFilterSettings: FilterSettings) => {
      navigate({
        to: "/vulnerabilities",
        search: {
          ...getFiltersForUrl(updatedFilterSettings),
        },
      })
    },
    [filterSettings, navigate]
  )

  return (
    <Filters
      filters={filters}
      filterSettings={filterSettings}
      onFilterChange={handleFilterChange}
      searchInputPlaceholder="search term for vulnerability name"
    />
  )
}
