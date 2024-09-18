/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo, useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import { Stack } from "@cloudoperators/juno-ui-components"
import { useGlobalsQueryClientFnReady, useFilterActions } from "../../hooks/useAppStore"
import FilterSelect from "./FilterSelect"
import FilterPills from "./FilterPills"

const filtersStyles = `
  bg-theme-background-lvl-1
  py-2
  px-4
  my-px
`

const Filters = ({ queryKey, entityName }) => {
  const queryClientFnReady = useGlobalsQueryClientFnReady()
  const { setLabels, setFilterLabelValues } = useFilterActions()

  const { isLoading, data } = useQuery({
    queryKey: [queryKey],
    enabled: !!queryClientFnReady && !!queryKey,
  })

  const filters = useMemo(() => {
    if (!data || !data[queryKey]) return []

    return Object.keys(data[queryKey]).map((key) => {
      const field = data[queryKey][key]
      return {
        label: field.filterName,
        values: field.values,
      }
    })
  }, [data, queryKey])

  useEffect(() => {
    if (filters.length > 0) {
      const filterLabels = filters.map((filter) => filter.label)
      setLabels(entityName, filterLabels)
      setFilterLabelValues(entityName, filters)
    }
  }, [filters, setLabels, setFilterLabelValues, entityName])

  return (
    <Stack direction="vertical" gap="4" className={`filters ${filtersStyles}`}>
      <FilterSelect entityName={entityName} isLoading={isLoading} />
      <FilterPills entityName={entityName} />
    </Stack>
  )
}

export default Filters
