/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from "react"
import { TopNavigation, TopNavigationItem } from "@cloudoperators/juno-ui-components"
import { useNavigate, useMatches, AnySchema } from "@tanstack/react-router"

type NavigationItemType = {
  label: string
  value: string
}

type SavedRouteState = {
  routeId?: string
  params?: Record<string, string>
  search?: AnySchema
}

const navigationItems: NavigationItemType[] = [
  {
    label: "Services",
    value: "/services/",
  },
  {
    label: "Vulnerabilities",
    value: "/vulnerabilities/",
  },
]

export const Navigation = () => {
  const visitedPages = useRef<Record<string, SavedRouteState>>({})
  const navigate = useNavigate()
  const matches = useMatches()

  const handleTabSelect = (link: React.ReactNode) => {
    if (typeof link !== "string") return

    // Save the current page's URL state (routeId, params, and search) to restore it later
    const currentMatch = matches?.[matches?.length - 1]
    const currentPath = currentMatch?.routeId
    
    // Find the base path that matches the current route
    const currentBasePath = navigationItems.find((item) => currentPath.includes(item.value))?.value
    if (currentBasePath) {
      visitedPages.current[currentBasePath] = {
        routeId: currentPath,
        params: currentMatch.params,
        search: currentMatch.search,
      }
    }

    // Restore the saved state for the target page
    const savedState = visitedPages.current[link]
    const navigationOptions: {
      to: string
      params?: Record<string, string>
      search?: AnySchema
    } = {
      // Use saved routeId if available and it matches the base path, otherwise use the base path
      to: savedState?.routeId && savedState.routeId.includes(link) ? savedState.routeId : link,
      search: savedState?.search ?? {},
    }

    // Add params if they exist in the saved state
    if (savedState?.params && Object.keys(savedState.params).length > 0) {
      navigationOptions.params = savedState.params
    }

    navigate(navigationOptions)
  }

  const getActiveItem = () => {
    const currentPath = matches[matches.length - 1].routeId
    const activeItem = navigationItems.find((item) => currentPath.includes(item.value))
    return activeItem ? activeItem.value : ""
  }

  return (
    <TopNavigation activeItem={getActiveItem()} onActiveItemChange={handleTabSelect}>
      {navigationItems.map(({ label, value }) => (
        <TopNavigationItem role="link" ariaLabel={value} key={value} label={label} value={value} />
      ))}
    </TopNavigation>
  )
}