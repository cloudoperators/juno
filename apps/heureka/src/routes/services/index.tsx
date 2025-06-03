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

// Extract initial filters from the supplied initialFilters in the appProps
const getInitialFilters = (initialFilters?: InitialFilters): SelectedFilter[] =>
  initialFilters?.support_group?.map((sg) => ({ name: "supportGroupCcrn", value: sg })) ?? []

// Extract filters from the search parameters, looking for keys that start with SELECTED_FILTER_PREFIX
const extractFiltersFromSearchParams = (params: ServicesSearchParams): SelectedFilter[] =>
  Object.entries(params)
    .filter(([key]) => key.startsWith(SELECTED_FILTER_PREFIX))
    .flatMap(([key, value]) => {
      const name = key.slice(2)
      if (Array.isArray(value)) {
        return value.map((v) => ({ name, value: v }))
      }
      return [{ name, value: value as string }]
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
})

function RouteComponent() {
  const routeApi = getRouteApi("/services/")
  const { appProps } = routeApi.useRouteContext()
  const params = routeApi.useSearch()
  const initialFilters = getInitialFilters(appProps?.initialFilters)
  const filtersFromUrl = extractFiltersFromSearchParams(params)

  const defaultFilterSettings: FilterSettings = {
    selectedFilters:
      // Filters from the URL always have preference over initial filters
      filtersFromUrl.length > 0
        ? [...filtersFromUrl]
        : // Combine initial filters with those extracted from the URL, ensuring no duplicates
          [
            ...initialFilters,
            ...filtersFromUrl.filter(
              (filter) => !initialFilters.some((init) => init.name === filter.name && init.value === filter.value)
            ),
          ],
    searchTerm: params.searchTerm,
  }

  return <Services defaultSelectService={params.service} defaultFilterSettings={defaultFilterSettings} />
}
