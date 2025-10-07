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
  extractFilterSettingsFromSearchParams,
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
  shouldReload: true, // Reload the route when search params change
  beforeLoad: ({ search }) => {
    const filterSettings = extractFilterSettingsFromSearchParams(search)
    return {
      filterSettings,
    }
  },
  loader: async ({ context }) => {
    const { queryClient, apiClient, filterSettings } = context
    // create a promise to fetch filters
    const filtersResult = await fetchServicesFilters({
      queryClient,
      apiClient,
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
