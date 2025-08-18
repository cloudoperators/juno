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

const urlStateManager = registerConsumer("supernova")

const searchSchema = z
  .object({
    oldState: z.string().optional(),
    activeTab: z.string().optional(),
    searchTerm: z.string().optional(),
  })
  .catchall(
    z.preprocess(
      (val, ctx) => {
        if (ctx.path.length > 0 && typeof ctx.path[0] === "string" && !ctx.path[0].startsWith("f_")) {
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
    const { oldState, ...rest } = search
    const appState = convertUrlStateToAppState(rest)
    return { ...appState }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = Route.useNavigate()
  const { oldState } = Route.useSearch()
  const {
    activeFilters,
    pausedFilters,
    activePredefinedFilter,
    searchTerm,
    activeTab,
    detailsFor,
    silenceRegEx,
    silenceStatus,
  } = Route.useRouteContext()
  const { setShowDetailsFor, setActiveSelectedTab } = useGlobalsActions()
  const { setActiveFilters, setPausedFilters, setActivePredefinedFilter, setSearchTerm } = useFilterActions()
  const { setSilencesRegEx, setSilencesStatus } = useSilencesActions()

  useLayoutEffect(() => {
    // TODO: Remove this piece of code when the legacy URL is no longer supported.
    // If the oldState is present, it means we are dealing with a legacy URL structure.
    // We need to convert the old state to the new URL state format and redirect.
    if (oldState) {
      // Extract app state from legacy url state
      const appState = readLegacyUrlState(urlStateManager.currentState())
      // Convert app state to new url state
      const newUrlState = convertAppStateToUrlState(appState)
      // Redirect to persist new url state and remove old state from the URL
      navigate({
        to: "/",
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
      setActiveSelectedTab(activeTab)
      setShowDetailsFor(detailsFor)
      setSilencesRegEx(silenceRegEx)
      setSilencesStatus(silenceStatus)
    }
  }, [
    activeFilters,
    pausedFilters,
    activePredefinedFilter,
    searchTerm,
    activeTab,
    detailsFor,
    silenceRegEx,
    silenceStatus,
  ])

  return (
    <>
      <AppContent />
    </>
  )
}
