/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { useNavigate, useMatches, AnySchema } from "@tanstack/react-router"
import { TopNavigation, TopNavigationItem } from "@cloudoperators/juno-ui-components"
import { markAdminTabVisited } from "../adminTabState"
import { ADMIN_ROUTES, AdminRoute } from "../adminRoutes"

export const navigationItems = [
  { label: "PluginPresets", value: ADMIN_ROUTES.PLUGIN_PRESETS },
  { label: "Clusters", value: ADMIN_ROUTES.CLUSTERS },
  { label: "Exposed Services", value: ADMIN_ROUTES.EXPOSED_SERVICES },
] as const
export type { AdminRoute }

type VisitedPages = Partial<Record<AdminRoute, AnySchema>>

// Module-level so it survives component unmount (e.g. navigating away to Compliance)
const visitedPages: VisitedPages = {}

const isValidNavigationValue = (value: unknown): value is AdminRoute => {
  return typeof value === "string" && navigationItems.some((item) => item.value === value)
}

const getNavigationValueFromPath = (path: string): AdminRoute | undefined => {
  return navigationItems.find((item) => path.includes(item.value))?.value
}

export const Navigation = () => {
  const navigate = useNavigate()
  const matches = useMatches()

  const handleTabSelect = (link: React.ReactNode) => {
    // Type guard to ensure link is a valid NavigationItem value
    if (isValidNavigationValue(link)) {
      const currentPath = matches[matches.length - 1].id
      // Save the current page's URL state to restore it later
      const currentNavValue = getNavigationValueFromPath(currentPath)
      if (currentNavValue) {
        visitedPages[currentNavValue] = matches[matches.length - 1].search
        // Only mark the tab as visited when on the list route itself, not a child detail route.
        // e.g. opening /admin/clusters/$name directly and switching tabs must not prevent
        // beforeLoad from applying default filters when the list is visited for the first time.
        const currentRouteId = matches[matches.length - 1].routeId
        if (currentRouteId === currentNavValue || currentRouteId === `${currentNavValue}/`) {
          markAdminTabVisited(currentNavValue)
        }
      }
      navigate({
        to: link,
        search: {
          ...visitedPages[link],
        },
      })
    }
  }

  const getActiveItem = () => {
    const currentPath = matches[matches.length - 1].id
    const activeItem = navigationItems.find((item) => currentPath.includes(item.value))
    return activeItem ? activeItem.value : ""
  }

  return (
    <TopNavigation activeItem={getActiveItem()} onActiveItemChange={handleTabSelect}>
      {navigationItems.map((item) => (
        <TopNavigationItem key={item.value} value={item.value} label={item.label} />
      ))}
    </TopNavigation>
  )
}
