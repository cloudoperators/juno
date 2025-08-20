/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useLayoutEffect } from "react"
import { createFileRoute } from "@tanstack/react-router"
import { z } from "zod"
import { MessagesProvider } from "@cloudoperators/juno-messages-provider"
import AlertDetail from "../components/alerts/AlertDetail"
import RegionsList from "../components/regions/RegionsList"
import AlertsTab from "../components/alerts/AlertsTab"
import { ACTIVE_FILTERS_PREFIX, PAUSED_FILTERS_PREFIX } from "../constants"
import { convertUrlStateToAppState } from "../lib/urlStateUtils"
import { useGlobalsActions, useFilterActions } from "../components/StoreProvider"

const searchSchema = z
  .object({
    searchTerm: z.string().optional(),
    showDetailsFor: z.string().optional(),
  })
  .catchall(
    z.preprocess(
      (val, ctx) => {
        if (
          ctx.path.length > 0 &&
          typeof ctx.path[0] === "string" &&
          !ctx.path[0].startsWith(ACTIVE_FILTERS_PREFIX) &&
          !ctx.path[0].startsWith(PAUSED_FILTERS_PREFIX)
        ) {
          return undefined
        }
        return val
      },
      z.union([z.string(), z.array(z.string()), z.undefined()])
    )
  )

export const Route = createFileRoute("/alerts")({
  validateSearch: searchSchema,
  beforeLoad: ({ search }) => ({ appStateFromUrl: convertUrlStateToAppState(search) }),
  component: RouteComponent,
})

function RouteComponent() {
  const {
    appStateFromUrl: { activeFilters, pausedFilters, activePredefinedFilter, searchTerm, showDetailsFor },
  } = Route.useRouteContext()
  const { setShowDetailsFor } = useGlobalsActions()
  const { setActiveFilters, setPausedFilters, setActivePredefinedFilter, setSearchTerm } = useFilterActions()

  /**
   * TODO: remove it later because we don't need to sync the URL state with the Zustand store
   * we can directly consume it from the route context anywhere
   * */
  useLayoutEffect(() => {
    setActiveFilters(activeFilters)
    setPausedFilters(pausedFilters)
    setActivePredefinedFilter(activePredefinedFilter)
    setSearchTerm(searchTerm)
    setShowDetailsFor(showDetailsFor)
  }, [activeFilters, pausedFilters, activePredefinedFilter, searchTerm, showDetailsFor])

  return (
    <>
      <MessagesProvider>
        <AlertDetail />
      </MessagesProvider>
      <RegionsList />
      <AlertsTab />
    </>
  )
}
