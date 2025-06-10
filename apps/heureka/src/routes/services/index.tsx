/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { createFileRoute, getRouteApi } from "@tanstack/react-router"
import { z } from "zod"
import { Services } from "../../components/Services"
import { FilterSettings, SelectedFilter } from "../../components/common/Filters/types"
import { sanitizeSearchParam } from "../../utils"
import { InitialFilters } from "../../App"
import { SELECTED_FILTER_PREFIX } from "../../constants"
import { fetchServices } from "../../api/fetchServices"
import { fetchServicesFilters } from "../../api/fetchServicesFilters"

// Extract initial filters from the supplied initialFilters in the appProps
const getInitialFilters = (initialFilters?: InitialFilters): SelectedFilter[] =>
  initialFilters?.support_group?.map((sg) => ({ name: "supportGroupCcrn", value: sg })) ?? []

// Extract filters from the search parameters, looking for keys that start with SELECTED_FILTER_PREFIX
const extractFilterSettingsFromSearchParams = (searchParams: ServicesSearchParams): FilterSettings => ({
  searchTerm: searchParams.searchTerm,
  selectedFilters: Object.entries(searchParams)
    .filter(([key]) => key.startsWith(SELECTED_FILTER_PREFIX))
    .flatMap(([key, value]) => {
      const name = key.slice(2)
      if (Array.isArray(value)) {
        return value.map((v) => ({ name, value: v }))
      }
      return [{ name, value: value as string }]
    }),
})

type ServicesSearchParams = z.infer<typeof servicesSearchSchema>

// Schema for validating and transforming search parameters related to /services page.
const servicesSearchSchema = z
  .object({
    service: z
      .string()
      .transform((val) => sanitizeSearchParam(val))
      .optional(),
    searchTerm: z
      .string()
      .transform((val) => sanitizeSearchParam(val))
      .optional(),
  })
  .catchall(
    z.preprocess(
      (val, ctx) => {
        // Only allow keys that start with SELECTED_FILTER_PREFIX
        if (ctx.path.length > 0 && typeof ctx.path[0] === "string" && !ctx.path[0].startsWith(SELECTED_FILTER_PREFIX)) {
          return undefined
        }
        return val
      },
      z.union([z.string(), z.array(z.string())])
    )
  )

export const Route = createFileRoute("/services/")({
  validateSearch: servicesSearchSchema,
  component: RouteComponent,
  beforeLoad: ({ context: { appProps }, search }) => {
    const filterSettings = extractFilterSettingsFromSearchParams(search)
    return {
      filterSettings:
        // Filters from the URL always have preference over initial filters
        (filterSettings?.selectedFilters ?? []).length > 0
          ? filterSettings
          : {
              ...filterSettings,
              selectedFilters: getInitialFilters(appProps?.initialFilters),
            },
    }
  },
  loaderDeps: ({ search }) => {
    const { service, ...rest } = search
    return rest
  },
  shouldReload: false, // Only reload the route when the user navigates to it or when deps change
  loader: async ({ context }) => {
    const { queryClient, apiClient, filterSettings } = context
    // create a promise to fetch filters
    const filtersPromise = fetchServicesFilters({
      queryClient,
      apiClient,
    })
    // create a promise to fetch services
    const servicesPromise = fetchServices({
      queryClient,
      apiClient,
      filterSettings,
    })

    return {
      filtersPromise,
      servicesPromise,
      filterSettings,
    }
  },
})

function RouteComponent() {
  const routeApi = getRouteApi("/services/")
  const { service } = routeApi.useSearch()
  const { filterSettings, filtersPromise, servicesPromise } = routeApi.useLoaderData()

  return (
    <Services
      filtersPromise={filtersPromise}
      servicesPromise={servicesPromise}
      selectedService={service}
      filterSettings={filterSettings}
    />
  )
}
