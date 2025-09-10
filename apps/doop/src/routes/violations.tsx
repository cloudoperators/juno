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

const searchSchema = z
  .object({
    org: z.string().optional(),
    searchTerm: z.string().optional(),
    violationGroup: z.string().optional(),
  })
  .catchall(
    z.preprocess(
      (val, ctx) => {
        if (ctx.path.length > 0 && typeof ctx.path[0] === "string" && !ctx.path[0].startsWith(ACTIVE_FILTERS_PREFIX)) {
          return undefined
        }
        return val
      },
      z.union([z.string(), z.array(z.string()), z.undefined()])
    )
  )

export const Route = createFileRoute("/violations")({
  validateSearch: searchSchema,
  search: {
    /**
     * TODO: remove it when no longer needed
     * but we need to keep "org" search parameter due to it's significance in the shell app.
     */
    middlewares: [retainSearchParams(["org"])],
  },
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
