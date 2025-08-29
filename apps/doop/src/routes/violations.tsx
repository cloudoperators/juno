/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useLayoutEffect } from "react"
import { createFileRoute } from "@tanstack/react-router"
import { z } from "zod"
import AppContent from "../components/AppContent"
import { convertUrlStateToAppState } from "../lib/urlStateUtils"
import { ACTIVE_FILTERS_PREFIX } from "../constants"
import { useDataActions, useFiltersActions } from "../components/StoreProvider"

const searchSchema = z
  .object({
    /**
     * TODO: remove it when no longer needed
     * but we need to keep "org" search parameter due to it's significance in the shell app.
     */
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
    appStateFromUrl: { activeFilters, searchTerm, violationGroup },
  } = Route.useRouteContext()
  // @ts-expect-error - setActiveFilters is not defined
  const { set: setActiveFilters, setSearchTerm } = useFiltersActions()
  // @ts-expect-error - setInitialFiltersApplied is not defined
  const { setDetailsViolationGroupKind } = useDataActions()

  /**
   * TODO: remove it later because we don't need to sync the URL state with the Zustand store
   * we can directly consume it from the route context anywhere
   * */
  useLayoutEffect(() => {
    setActiveFilters(activeFilters)
    setSearchTerm(searchTerm)
    setDetailsViolationGroupKind(violationGroup)
  }, [activeFilters, searchTerm, violationGroup])

  return (
    <>
      <AppContent id={appProps?.id} showDebugSeverities={appProps.showDebugSeverities} />
    </>
  )
}
