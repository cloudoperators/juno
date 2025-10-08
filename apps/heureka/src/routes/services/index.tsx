/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createFileRoute } from "@tanstack/react-router"
import { z } from "zod"
import { Services } from "../../components/Services"
import { SELECTED_FILTER_PREFIX } from "../../constants"
import { fetchServices } from "../../api/fetchServices"
import { fetchServicesFilters } from "../../api/fetchServicesFilters"
import {
  buildServiceFilter,
  buildSupportGroupFilter,
  extractFilterSettingsFromSearchParams,
  getInitialFilters,
  getNormalizedFilters,
  sanitizeFilterSettings,
} from "../../components/Services/utils"

// Schema for validating and transforming search parameters related to /services page.
const servicesSearchSchema = z
  .object({
    service: z.string().optional(),
    searchTerm: z.string().optional(),
  })
  .catchall(
    z.preprocess(
      (val, ctx) => {
        if (ctx.path.length > 0 && typeof ctx.path[0] === "string" && !ctx.path[0].startsWith(SELECTED_FILTER_PREFIX)) {
          return undefined
        }
        return val
      },
      z.union([z.string(), z.array(z.string()), z.undefined()])
    )
  )

export type ServicesSearchParams = z.infer<typeof servicesSearchSchema>

export const Route = createFileRoute("/services/")({
  validateSearch: servicesSearchSchema,
  loaderDeps: ({ search }) => {
    const { service, ...rest } = search
    return rest
  },
  shouldReload: false, // Only reload the route when the user navigates to it or when deps change
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
  loader: async ({ context }) => {
    const { queryClient, apiClient, filterSettings } = context
    
    // Build filter objects for dependent filtering
    const serviceFilter = buildServiceFilter(filterSettings)
    const supportGroupFilter = buildSupportGroupFilter(filterSettings)
    
    // For dependent filtering:
    // - When support groups are selected, filter service options
    // - When services are selected, filter support group options
    const filtersResult = await fetchServicesFilters({
      queryClient,
      apiClient,
      serviceFilter,
      supportGroupFilter,
    })
    // create a promise to fetch services
    const servicesPromise = fetchServices({
      queryClient,
      apiClient,
      filterSettings,
    })

    const filters = getNormalizedFilters(filtersResult.data)

    return {
      filters,
      servicesPromise,
      filterSettings: sanitizeFilterSettings(filters, filterSettings), // we need to only apply filters that backend supports hence this sanitization
    }
  },
  component: Services,
})
