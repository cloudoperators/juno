import React, { use, useCallback } from "react"
import { ApolloQueryResult } from "@apollo/client"
import { useNavigate } from "@tanstack/react-router"
import { Filters } from "../common/Filters"
import { GetServiceFiltersQuery } from "../../generated/graphql"
import { FilterSettings } from "../common/Filters/types"
import { getFiltersForUrl, getNormalizedFilters } from "./utils"

type ServicesFiltersProps = {
  filterSettings: FilterSettings
  filtersPromise: Promise<ApolloQueryResult<GetServiceFiltersQuery>>
}

export const ServicesFilters = ({ filtersPromise, filterSettings }: ServicesFiltersProps) => {
  const navigate = useNavigate()
  const { data } = use(filtersPromise)
  const filters = getNormalizedFilters(data)

  const handleFilterChange = useCallback(
    (updatedFilterSettings: FilterSettings) => {
      navigate({
        to: "/services",
        search: {
          service: updatedFilterSettings.searchTerm,
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
      searchInputPlaceholder="search term for services name"
    />
  )
}
