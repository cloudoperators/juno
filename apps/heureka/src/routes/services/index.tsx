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
import { extractFilterSettingsFromSearchParams } from "../../components/Services/utils"
import { filterSearchParamsByPrefix } from "../../utils"

const filterValueSchema = z.union([z.string(), z.array(z.string()), z.undefined()])

const servicesSearchSchema = z
  .object({
    service: z.string().optional(),
    searchTerm: z.string().optional(),
  })
  .catchall(filterValueSchema)

export type ServicesSearchParams = z.infer<typeof servicesSearchSchema>

const SERVICES_KNOWN_KEYS = ["service", "searchTerm"] as const

function validateServicesSearch(search: Record<string, unknown>): ServicesSearchParams {
  const filtered = filterSearchParamsByPrefix(search, [...SERVICES_KNOWN_KEYS], [SELECTED_FILTER_PREFIX])
  return servicesSearchSchema.parse(filtered) as ServicesSearchParams
}

export const Route = createFileRoute("/services/")({
  validateSearch: validateServicesSearch,
  loaderDeps: ({ search }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { service, ...rest } = search // we're omitting 'service' from the deps so route does not reload when it changes
    return rest
  },
  shouldReload: false, // Only reload the route when the user navigates to it or when deps change
  loader: ({ context, deps }) => {
    const { queryClient, apiClient } = context
    const filterSettings = extractFilterSettingsFromSearchParams(deps)
    const filtersPromise = fetchServicesFilters({
      queryClient,
      apiClient,
    })
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

    // Use parsed search params from TanStack Router
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
