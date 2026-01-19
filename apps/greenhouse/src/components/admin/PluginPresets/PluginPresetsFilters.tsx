/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback } from "react"
import { useLoaderData, useNavigate, useRouteContext } from "@tanstack/react-router"
import { FilterSettings, SelectedFilter } from "../common/types"
import { getFiltersForUrl } from "../utils"
import { SELECTED_FILTER_PREFIX } from "../constants"
import { Stack, InputGroup, Button, SearchInput } from "@cloudoperators/juno-ui-components/index"
import { SelectedFilters } from "../common/SelectedFilters"
import { useQuery } from "@tanstack/react-query"
import {
  fetchPluginPresetsFilters,
  FETCH_PLUGIN_PRESETS_FILTERS_CACHE_KEY,
} from "../api/plugin-presets/fetchPluginPresetsFilters"
import { FilterSelect } from "../common/FilterSelect"

export const PluginPresetsFilters = () => {
  const navigate = useNavigate()
  const { apiClient, organization } = useRouteContext({ from: "/admin/plugin-presets" })
  const { filterSettings } = useLoaderData({ from: "/admin/plugin-presets" })
  const {
    data: filters,
    isLoading,
    error,
  } = useQuery({
    queryKey: [FETCH_PLUGIN_PRESETS_FILTERS_CACHE_KEY, organization],
    queryFn: () =>
      fetchPluginPresetsFilters({
        apiClient,
        namespace: organization,
      }),
  })

  const updateFilters = useCallback(
    (updatedFilterSettings: FilterSettings) => {
      navigate({
        to: "/admin/plugin-presets",
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
    <Stack direction="vertical" gap="4" className="bg-theme-background-lvl-1 py-2 px-4 ">
      <Stack alignment="start" gap="4">
        <InputGroup>
          <FilterSelect
            filters={filters}
            isLoading={isLoading}
            error={error}
            onChange={(selectedFilter: SelectedFilter) => {
              const filterExists = filterSettings.selectedFilters?.some(
                (filter) => filter.id === selectedFilter.id && filter.value === selectedFilter.value
              )
              //only add the filter if it does not already exist
              if (!filterExists) {
                updateFilters({
                  ...filterSettings,
                  selectedFilters: [...(filterSettings.selectedFilters || []), selectedFilter],
                })
              }
            }}
          />
        </InputGroup>
        <Button
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
        <SearchInput
          placeholder={`search term for plugin presets name`}
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
        <SelectedFilters selectedFilters={filterSettings.selectedFilters} onDelete={handleFilterDelete} />
      )}
    </Stack>
  )
}
