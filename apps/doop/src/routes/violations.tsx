/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useLayoutEffect } from "react"
import { createFileRoute, retainSearchParams } from "@tanstack/react-router"
import { z } from "zod"
import AppContent from "../components/AppContent"
import { convertUrlStateToAppState, getFiltersForUrl } from "../lib/urlStateUtils"
import { ACTIVE_FILTERS_PREFIX } from "../constants"
import {
  useDataActions,
  useFiltersActions,
  useGlobalsActions,
  useGlobalsInitialFiltersApplied,
} from "../components/StoreProvider"
import { parseInitialFilters } from "../lib/store/createFiltersSlice"
import { isObjectWithKeys } from "../lib/helpers"
import { filterSearchParamsByPrefix } from "../lib/helpers"

const filterValueSchema = z.union([z.string(), z.array(z.string()), z.undefined()])

const searchSchema = z
  .object({
    searchTerm: z.string().optional(),
    violationGroup: z.string().optional(),
  })
  .catchall(filterValueSchema)

const VIOLATIONS_KNOWN_KEYS = ["searchTerm", "violationGroup"] as const

function validateViolationsSearch(search: Record<string, unknown>): z.infer<typeof searchSchema> {
  const filtered = filterSearchParamsByPrefix(search, [...VIOLATIONS_KNOWN_KEYS], [ACTIVE_FILTERS_PREFIX])
  return searchSchema.parse(filtered)
}

export const Route = createFileRoute("/violations")({
  validateSearch: validateViolationsSearch,
  beforeLoad: ({ search }) => {
    // extract alerts specific state from the URL search params
    const { activeFilters, searchTerm, violationGroup } = convertUrlStateToAppState(search)
    return {
      appStateFromUrl: {
        activeFilters,
        searchTerm,
        violationGroup,
      },
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const { appProps } = Route.useRouteContext()
  const {
    appProps: { initialFilters },
    appStateFromUrl: { activeFilters, searchTerm, violationGroup },
  } = Route.useRouteContext()
  const navigate = Route.useNavigate()
  const isUrlRead = useGlobalsInitialFiltersApplied()
  // @ts-expect-error - setActiveFilters is not defined
  const { set: setActiveFilters, setSearchTerm } = useFiltersActions()
  // @ts-expect-error - setDetailsViolationGroupKind is not defined
  const { setDetailsViolationGroupKind } = useDataActions()
  // @ts-expect-error - setIsUrlRead is not defined
  const { setIsUrlRead } = useGlobalsActions()

  /**
   * TODO: remove it later because we don't need to sync the URL state with the Zustand store
   * we can directly consume it from the route context anywhere
   * */
  useLayoutEffect(() => {
    // we only want to apply initial filters only once when url does not contain any filter
    if (!isUrlRead && !isObjectWithKeys(activeFilters) && isObjectWithKeys(initialFilters)) {
      setIsUrlRead()
      navigate({
        to: "/violations",
        replace: true,
        search: (prev) => ({
          ...prev,
          ...getFiltersForUrl(ACTIVE_FILTERS_PREFIX, parseInitialFilters(initialFilters)),
        }),
      })
    } else {
      setActiveFilters(activeFilters)
      setSearchTerm(searchTerm)
      setDetailsViolationGroupKind(violationGroup)
      setIsUrlRead()
    }
  }, [activeFilters, searchTerm, violationGroup])

  return (
    <>
      <AppContent id={appProps?.id} showDebugSeverities={appProps.showDebugSeverities} />
    </>
  )
}
