/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createFileRoute, redirect } from "@tanstack/react-router"
import { z } from "zod"

import { User } from "../__root"
import { filterSearchParamsByPrefix } from "../../lib/helpers"
import { ExposedServices } from "../../components/admin/ExposedServices"
import { FILTER_IDS, SELECTED_FILTER_PREFIX } from "../../components/admin/constants"
import { extractFilterSettingsFromSearchParams, getFiltersForUrl } from "../../components/admin/utils"

// A module level flag that resets on page refresh but persists during SPA navigation
let defaultFiltersApplied = false

// Define validation schema for search parameters
const filterValueSchema = z.union([z.string(), z.array(z.string()), z.undefined()])
const searchParamsSchema = z
  .object({
    searchTerm: z.string().optional(),
  })
  .catchall(filterValueSchema)

export type ExposedServicesSearchParams = z.infer<typeof searchParamsSchema>

function validateExposedServicesSearch(search: Record<string, unknown>): ExposedServicesSearchParams {
  const filtered = filterSearchParamsByPrefix(search, Object.keys(searchParamsSchema.shape), [SELECTED_FILTER_PREFIX])
  return searchParamsSchema.parse(filtered)
}

// Generate default filters based on user context
const getDefaultFilters = (user: User) => {
  const defaultSupportGroupFilters = user.supportGroups.map((sg) => ({
    id: FILTER_IDS.SUPPORT_GROUP,
    value: sg,
  }))
  return defaultSupportGroupFilters
}

// Create the route with necessary validation and filter logic
export const Route = createFileRoute("/admin/exposed-services")({
  component: ExposedServices,
  validateSearch: validateExposedServicesSearch,
  beforeLoad: ({ context, search }) => {
    // Skip if defaults were already applied this session
    if (defaultFiltersApplied) {
      return
    }

    defaultFiltersApplied = true

    // Check if any filter is already applied
    const hasAnyFilter = Object.keys(search).some((key) => key.startsWith(SELECTED_FILTER_PREFIX))
    const defaultFilters = getDefaultFilters(context.user)

    // If no filters in the URL but there are some default filters to apply, redirect with default filters
    if (!hasAnyFilter && defaultFilters.length > 0) {
      // eslint-disable-next-line @typescript-eslint/only-throw-error
      throw redirect({
        to: "/admin/exposed-services",
        search: getFiltersForUrl({ selectedFilters: defaultFilters }),
        replace: true,
      })
    }
  },
  loaderDeps: (search) => ({
    ...search,
  }),
  loader: ({ deps: { search } }) => ({
    filterSettings: extractFilterSettingsFromSearchParams(search),
    crumb: {
      label: "Exposed Services",
      icon: "home",
    },
  }),
})
