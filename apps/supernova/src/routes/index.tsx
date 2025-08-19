/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useLayoutEffect } from "react"
import { createFileRoute } from "@tanstack/react-router"
import { registerConsumer } from "@cloudoperators/juno-url-state-provider"
import { z } from "zod"
import AppContent from "../AppContent"
import { convertAppStateToUrlState, convertUrlStateToAppState, readLegacyUrlState } from "../lib/urlStateUtils"
import { useFilterActions, useGlobalsActions, useSilencesActions } from "../components/StoreProvider"
import { ACTIVE_FILTERS_PREFIX, DEFAULT_ACTIVE_ROUTE, PAUSED_FILTERS_PREFIX } from "../constants"

const urlStateManager = registerConsumer("supernova")

const searchSchema = z
  .object({
    legacyUrlState: z.string().optional(),
    activeTab: z.string().optional(),
    searchTerm: z.string().optional(),
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

export const Route = createFileRoute("/")({
  validateSearch: searchSchema,
  beforeLoad: ({ search }) => {
    const { legacyUrlState, ...rest } = search
    const appStateFromUrl = convertUrlStateToAppState(rest)
    return { appStateFromUrl }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = Route.useNavigate()
  const { legacyUrlState } = Route.useSearch()
  const {
    appStateFromUrl: {
      activeFilters,
      pausedFilters,
      activePredefinedFilter,
      searchTerm,
      detailsFor,
      silenceRegEx,
      silenceStatus,
    },
  } = Route.useRouteContext()
  const { setShowDetailsFor } = useGlobalsActions()
  const { setActiveFilters, setPausedFilters, setActivePredefinedFilter, setSearchTerm } = useFilterActions()
  const { setSilencesRegEx, setSilencesStatus } = useSilencesActions()

  useLayoutEffect(() => {
    // TODO: Remove this piece of code when the legacy URL is no longer supported.
    // If the legacyUrlState is present, it means we are dealing with a legacy URL structure.
    // We need to convert the legacy url state to the new URL state format and redirect.
    if (legacyUrlState) {
      // Extract app state from legacy url state
      const legacyAppState = readLegacyUrlState(urlStateManager.currentState())
      // Convert app state to new url state
      const newUrlState = convertAppStateToUrlState(legacyAppState)
      // Redirect to persist new url state and remove legacy url state from the URL
      navigate({
        to: legacyAppState.activeTab ? `${legacyAppState.activeTab}/` : "/alerts",
        search: { ...newUrlState },
        replace: true,
      })
    }
    // TODO: remove it later because we don't need to sync the URL state with the Zustand store
    //  we can directly consume it from the route context anywhere
    else {
      setActiveFilters(activeFilters)
      setPausedFilters(pausedFilters)
      setActivePredefinedFilter(activePredefinedFilter)
      setSearchTerm(searchTerm)
      setShowDetailsFor(detailsFor)
      setSilencesRegEx(silenceRegEx)
      setSilencesStatus(silenceStatus)
      // if there is no legacy URL state, we can navigate to the default route
      navigate({
        to: DEFAULT_ACTIVE_ROUTE,
        replace: true,
      })
    }
  }, [activeFilters, pausedFilters, activePredefinedFilter, searchTerm, detailsFor, silenceRegEx, silenceStatus])

  return (
    <>
      <AppContent />
    </>
  )
}
