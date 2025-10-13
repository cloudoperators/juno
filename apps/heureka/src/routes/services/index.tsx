/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useLayoutEffect } from "react"
import { useNavigate, useRouteContext, useSearch } from "@tanstack/react-router"
import { getFiltersForUrl, getInitialFilters } from "../../components/Services/utils"
import { useStore } from "../../store/StoreProvider"
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { service, ...rest } = search // we're omitting 'service' from the deps so route does not reload when it changes
    return rest
  },
  shouldReload: false, // Only reload the route when the user navigates to it or when deps change
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
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate()
  const { appProps } = useRouteContext({ from: "/services/" })
  const search = useSearch({ from: "/services/" })
  const { hasAppliedInitialFilters, markInitialFiltersApplied } = useStore()

  // Use store to track initial filters across tab navigation - prevents re-application when switching between services/vulnerabilities tabs
  useLayoutEffect(() => {
    if (hasAppliedInitialFilters) return

    // Use parsed search params from TanStack Router instead of window.location.search
    const hasUrlFilters = Object.keys(search).some((key) => key.startsWith(SELECTED_FILTER_PREFIX))

    if (!hasUrlFilters && appProps?.initialFilters?.support_group?.length) {
      const initialFilters = getInitialFilters(appProps.initialFilters)

      if (initialFilters.length > 0) {
        navigate({
          to: "/services",
          search: getFiltersForUrl({
            searchTerm: "",
            selectedFilters: initialFilters,
          }),
          replace: true,
        })
        markInitialFiltersApplied()
      }
    }
  }, [navigate, appProps, hasAppliedInitialFilters, markInitialFiltersApplied, search])

  return <Services />
}