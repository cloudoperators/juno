/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createFileRoute } from "@tanstack/react-router"
import { z } from "zod"
import { Vulnerabilities } from "../../components/Vulnerabilities"
import { SELECTED_FILTER_PREFIX } from "../../constants"
import { fetchVulnerabilities } from "../../api/fetchVulnerabilities"
import { fetchVulnerabilityFilters } from "../../api/fetchVulnerabilityFilters"
import {
  extractFilterSettingsFromSearchParams,
  getNormalizedFilters,
  sanitizeFilterSettings,
} from "../../components/Vulnerabilities/utils"

const vulnerabilitiesSearchSchema = z
  .object({
    vulnerability: z.string().optional(),
    searchTerm: z.preprocess((val) => (typeof val === "number" ? val.toString() : val), z.string().optional()),
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

export type VulnerabilitiesSearchParams = z.infer<typeof vulnerabilitiesSearchSchema>

export const Route = createFileRoute("/vulnerabilities/")({
  validateSearch: vulnerabilitiesSearchSchema,
  loaderDeps: ({ search }) => {
    const { vulnerability, ...rest } = search
    return rest
  },
  shouldReload: false,
  beforeLoad: ({ search }) => {
    const { vulnerability, ...restSearch } = search
    const filterSettings = extractFilterSettingsFromSearchParams(restSearch)
    return {
      filterSettings,
    }
  },
  loader: async ({ context }) => {
    const { queryClient, apiClient, filterSettings } = context

    // Dispatch both requests in parallel
    const filtersPromise = fetchVulnerabilityFilters({
      queryClient,
      apiClient,
    })
    const vulnerabilitiesPromise = fetchVulnerabilities({
      queryClient,
      apiClient,
      filterSettings,
    })

    // Wait for filters to resolve (needed for sanitization)
    const filtersResult = await filtersPromise
    const filters = getNormalizedFilters(filtersResult.data)

    return {
      filters,
      vulnerabilitiesPromise,
      filterSettings: sanitizeFilterSettings(filters, filterSettings),
    }
  },
  component: Vulnerabilities,
})
