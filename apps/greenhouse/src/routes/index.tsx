/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useLayoutEffect } from "react"
import { z } from "zod"
import { createFileRoute, useNavigate } from "@tanstack/react-router"
import { registerConsumer } from "@cloudoperators/juno-url-state-provider"
import { usePlugin } from "../components/StoreProvider"

const ACTIVE_APPS_KEY = "a"
const urlStateManager = registerConsumer("greenhouse-dashboard")
const searchSchema = z.object({
  __s: z.string().optional(),
  activeApps: z.string().optional(),
})

/**
 * Backend has harmonized name of alerts plugin across all organizations
 * which is now "alerts" instead of "alerts-<orgId>" which affects backward
 * compatibility in case people had bookmarked links with the old name.
 * In order to stay backward compatible we need to map "alerts-<orgId>" to "alerts".
 * This method will be removed once we stop supporting legacy URLs.
 **/
const getBackwardCompatibleApp = (appId: string) => {
  if (!appId) return ""
  return /^alerts-.+/.test(appId) ? "alerts" : appId
}

export const Route = createFileRoute("/")({
  validateSearch: searchSchema,
  beforeLoad: () => {
    // Try to read active app from legacy URL state
    const legacyState = urlStateManager.currentState()
    const activeApps = legacyState?.[ACTIVE_APPS_KEY]
    const parsedActiveApps = activeApps?.split(",") || []
    return {
      activeApp: parsedActiveApps.length > 0 ? getBackwardCompatibleApp(parsedActiveApps[0]) : "",
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate({ from: "/" })
  const { activeApp: activeAppFromUrlState } = Route.useRouteContext()
  const activeAppsFromAppState = usePlugin().active()
  const { __s } = Route.useSearch()

  // Before the first render, we want to redirect to the active app
  useLayoutEffect(() => {
    // If there's an active app in the URL state, use it; otherwise, fall back to the first active app from the app state
    const activeApp = activeAppFromUrlState ? activeAppFromUrlState : activeAppsFromAppState[0]
    if (activeApp) {
      navigate({ to: `/${activeApp}`, search: (prev) => ({ ...prev, __s }) }) // copy legacy url state(__s) for the app to read it
    }
  }, [activeAppFromUrlState, activeAppsFromAppState])

  return null
}
