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
  search: AnySchema
  params: Record<string, string>
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

  const persistCurrentPageState = () => {
    const currentPath = matches[matches.length - 1].routeId
    // Get the first segment of the current path (e.g., "/services/" from "/services/$services/$image")
    const firstSegment = currentPath.split("/").slice(0, 2).join("/") + "/"

    // Remove any existing entries that start with the same segment
    Object.keys(visitedPages.current).forEach((path) => {
      if (path.startsWith(firstSegment)) {
        delete visitedPages.current[path]
      }
    })

    visitedPages.current[currentPath] = {
      search: matches[matches.length - 1].search,
      params: matches[matches.length - 1].params,
    }
  }

  const handleTabSelect = (link: React.ReactNode) => {
    // Ensure the activeItem is a string before proceeding
    if (typeof link !== "string") return

    // Save the current pages's URL state to restore it later
    persistCurrentPageState()

    // Check if we have previously visited a page that starts with the target link
    const previouslyVisitedPath = Object.keys(visitedPages.current).filter((path) => path.startsWith(link))
    const to = previouslyVisitedPath.length > 0 ? previouslyVisitedPath[0] : link

    navigate({
      to,
      params: visitedPages.current[to]?.params ?? {},
      search: visitedPages.current[to]?.search ?? {},
    })
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
