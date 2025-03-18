/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo, useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import { Stack } from "@cloudoperators/juno-ui-components"
import { useGlobalsQueryClientFnReady, useFilterActions } from "../StoreProvider"
import FilterSelect from "./FilterSelect"
import FilterPills from "./FilterPills"

const filtersStyles = `
  bg-theme-background-lvl-1
  py-2
  px-4
  my-px
`

const Filters = ({
  queryKey,
  entityName,
  filterLabels,
  filterLabelValues,
  activeFilters,
  searchTerm,
  searchTargets,
}: any) => {
  const queryClientFnReady = useGlobalsQueryClientFnReady()
  // @ts-expect-error - This is a custom hook
  const { setLabels, setFilterLabelValues } = useFilterActions()

  const { isLoading, data } = useQuery({
    queryKey: [queryKey],
    enabled: !!queryClientFnReady && !!queryKey,
  })

  const filters = useMemo(() => {
    //Since there is a custom query to fetch filter labels, names and values for each entity in API
    //We need to map the data to the format that the FilterSelect component expects
    //You can check the response structure of custom query e.g in /lib/queries/serviceFilterValues.js
    // @ts-ignore
    if (!data || !data[queryKey]) return []
    // @ts-expect-error - This is a custom hook
    return Object.keys(data[queryKey]).map((key) => {
      // @ts-ignore
      const field = data[queryKey][key]
      return {
        displayName: field.displayName, // Display name of the filter
        filterName: field.filterName, // Name of the filter to build the query
        values: field.values,
      }
    })
  }, [data, queryKey])

  useEffect(() => {
    // Set filter labels, names and values in the store
    // It is done in this control as the fetch filter label and values is done above here
    if (filters.length > 0) {
      setLabels(entityName, filters)
      setFilterLabelValues(entityName, filters)
    }
  }, [filters, setLabels, setFilterLabelValues, entityName])

  return (
    <Stack direction="vertical" gap="4" className={`filters ${filtersStyles}`}>
      <FilterSelect
        entityName={entityName}
        isLoading={isLoading}
        filterLabels={filterLabels}
        filterLabelValues={filterLabelValues}
        activeFilters={activeFilters}
        searchTerm={searchTerm}
        searchTargets={searchTargets}
      />
      <FilterPills entityName={entityName} activeFilters={activeFilters} />
    </Stack>
  )
}

export default Filters
