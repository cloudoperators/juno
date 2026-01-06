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
    // Save the current page's URL state (route, params, search) to restore it later
    const currentMatch = matches[matches.length - 1]
    const currentRouteId = currentMatch.routeId
    const currentParams = currentMatch.params
    const currentSearch = currentMatch.search

    // Determine which tab this route belongs to
    const currentTab = navigationItems.find((item) => currentRouteId.includes(item.value))
    if (currentTab) {
      visitedPages.current[currentTab.value] = {
        routeId: currentRouteId,
        params: currentParams as Record<string, string>,
        search: currentSearch,
      }
    }

    if (typeof link === "string") {
      const savedState = visitedPages.current[link]
      if (savedState) {
        // Restore the saved route state
        const savedRouteId = savedState.routeId || ""
        const savedParams = savedState.params || {}
        const savedSearch = savedState.search || {}

        // Check if it's a service detail route with image
        if (savedRouteId.includes("/services/$service/$image") && savedParams.service && savedParams.image) {
          navigate({
            to: "/services/$service/$image",
            params: {
              service: savedParams.service,
              image: savedParams.image,
            },
            search: savedSearch,
          })
        }
        // Check if it's a service detail route
        else if (savedRouteId.includes("/services/$service") && savedParams.service) {
          navigate({
            to: "/services/$service",
            params: {
              service: savedParams.service,
            },
            search: savedSearch,
          })
        }
        // Otherwise, just restore search params on base route (like service overview panel)
        else {
          navigate({
            to: link,
            search: savedSearch,
          })
        }
      } else {
        // No saved state, navigate to base route
        navigate({
          to: link,
          search: {},
        })
      }
    }
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
