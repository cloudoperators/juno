/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback } from "react"
import { useQuery } from "@tanstack/react-query"
import { useLoaderData, useNavigate, useRouteContext } from "@tanstack/react-router"
import { Stack, Button, SearchInput } from "@cloudoperators/juno-ui-components/index"

import { getFiltersForUrl } from "../utils"
import { SELECTED_FILTER_PREFIX } from "../constants"
import { FilterSelect } from "../common/FilterSelect"
import { SelectedFilters } from "../common/SelectedFilters"
import { FilterSettings, SelectedFilter } from "../common/types"
import { FETCH_CLUSTERS_FILTERS_CACHE_KEY, fetchClustersFilters } from "../api/clusters/fetchClustersFilters"

export const ClustersFilters = () => {
  const navigate = useNavigate()
  const { apiClient, user } = useRouteContext({ from: "/admin/clusters" })
  const { filterSettings } = useLoaderData({ from: "/admin/clusters/" })
  const {
    data: filters,
    isLoading,
    error,
  } = useQuery({
    queryKey: [FETCH_CLUSTERS_FILTERS_CACHE_KEY, user.organization],
    queryFn: () =>
      fetchClustersFilters({
        apiClient,
        namespace: user.organization,
      }),
  })

  const updateFilters = useCallback(
    (updatedFilterSettings: FilterSettings) => {
      navigate({
        to: "/admin/clusters",
        search: (prev) => {
          const newFilterParams = getFiltersForUrl(updatedFilterSettings)
          const cleanedPrev = Object.fromEntries(
            Object.entries(prev).filter(([key]) => !key.startsWith(SELECTED_FILTER_PREFIX))
          )
          return {
            ...cleanedPrev,
            ...newFilterParams,
          }
        },
      })
    },
    [navigate]
  )

  const handleFilterDelete = useCallback(
    (filterToRemove: SelectedFilter) => {
      updateFilters({
        ...filterSettings,
        selectedFilters: filterSettings.selectedFilters?.filter(
          (filter) => !(filter.id === filterToRemove.id && filter.value === filterToRemove.value)
        ),
      })
    },
    [filterSettings, updateFilters]
  )

  return (
    <Stack direction="vertical" gap="4" className="bg-theme-background-lvl-1 py-2 px-4 mb-px">
      <Stack alignment="start" gap="4">
        <FilterSelect
          filters={filters}
          isLoading={isLoading}
          error={error}
          onChange={(selectedFilter: SelectedFilter) => {
            const filterExists = filterSettings.selectedFilters?.some(
              (filter) => filter.id === selectedFilter.id && filter.value === selectedFilter.value
            )
            //only add the filter if it doesn't exist
            if (!filterExists) {
              updateFilters({
                ...filterSettings,
                selectedFilters: [...(filterSettings.selectedFilters || []), selectedFilter],
              })
            }
          }}
        />
        <SearchInput
          placeholder={`search term for cluster name`}
          className="w-96 ml-auto"
          data-testid="searchbar"
          value={filterSettings.searchTerm}
          onSearch={(searchTerm) => {
            updateFilters({
              ...filterSettings,
              searchTerm,
            })
          }}
          onClear={() =>
            updateFilters({
              ...filterSettings,
              searchTerm: "",
            })
          }
        />
      </Stack>
      {filterSettings.selectedFilters && filterSettings.selectedFilters.length > 0 && (
        <Stack>
          <SelectedFilters selectedFilters={filterSettings.selectedFilters} onDelete={handleFilterDelete} />
          <Button
            size="xs"
            label="Clear all"
            className="ml-4"
            onClick={() =>
              updateFilters({
                ...filterSettings,
                selectedFilters: [],
              })
            }
            variant="subdued"
          />
        </Stack>
      )}
    </Stack>
  )
}
