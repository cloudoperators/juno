/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { z } from "zod"
import { createFileRoute, redirect } from "@tanstack/react-router"

import { User } from "../../__root"
import { Clusters } from "../../../components/admin/Clusters"
import { filterSearchParamsByPrefix } from "../../../lib/helpers"
import { FILTER_IDS, SELECTED_FILTER_PREFIX } from "../../../components/admin/constants"
import { extractFilterSettingsFromSearchParams, getFiltersForUrl } from "../../../components/admin/utils"
import { hasAdminTabBeenVisited, markAdminTabVisited } from "../../../components/admin/adminTabState"
import { ADMIN_ROUTES } from "../../../components/admin/adminRoutes"

const filterValueSchema = z.union([z.string(), z.array(z.string()), z.undefined()])

const searchParamsSchema = z
  .object({
    searchTerm: z.string().optional(),
  })
  .catchall(filterValueSchema)

export type ClusterSearchParams = z.infer<typeof searchParamsSchema>

function validateClustersSearch(search: Record<string, unknown>): ClusterSearchParams {
  const filtered = filterSearchParamsByPrefix(search, Object.keys(searchParamsSchema.shape), [SELECTED_FILTER_PREFIX])
  return searchParamsSchema.parse(filtered)
}

const getDefaultFilters = (user: User) => {
  const defaultSupportGroupFilters = user.supportGroups.map((sg) => ({
    id: FILTER_IDS.SUPPORT_GROUP,
    value: sg,
  }))
  return defaultSupportGroupFilters
}

export const Route = createFileRoute("/admin/clusters/")({
  component: Clusters,
  validateSearch: validateClustersSearch,
  beforeLoad: ({ context, search }) => {
    // Apply default filters only on the first visit to this tab.
    // On return visits, respect whatever the user left (including an explicitly cleared state).
    if (hasAdminTabBeenVisited(ADMIN_ROUTES.CLUSTERS)) {
      return
    }
    markAdminTabVisited(ADMIN_ROUTES.CLUSTERS)

    // Check if any filter is already applied
    const hasAnyFilter = Object.keys(search).some((key) => key.startsWith(SELECTED_FILTER_PREFIX))
    const defaultFilters = getDefaultFilters(context.user)
    // If no filters in the url but there are some default filters to apply, redirect with default filters
    if (!hasAnyFilter && defaultFilters.length > 0) {
      // eslint-disable-next-line @typescript-eslint/only-throw-error
      throw redirect({
        to: "/admin/clusters",
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
  }),
})
