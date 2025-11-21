/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from "react"
import { useNavigate, useMatches, AnySchema } from "@tanstack/react-router"
import { TopNavigation, TopNavigationItem } from "@cloudoperators/juno-ui-components"

export const navigationItems = [
  {
    label: "Plugin Presets",
    value: "/admin/plugin-presets",
  },
  {
    label: "Clusters",
    value: "/admin/clusters",
  },
  {
    label: "Teams",
    value: "/admin/teams",
  },
] as const

type NavigationItem = (typeof navigationItems)[number]
type VisitedPages = Partial<Record<NavigationItem["value"], AnySchema>>

const isValidNavigationValue = (value: unknown): value is NavigationItem["value"] => {
  return typeof value === "string" && navigationItems.some((item) => item.value === value)
}

export const Navigation = () => {
  const visitedPages = useRef<VisitedPages>({})
  const navigate = useNavigate()
  const matches = useMatches()

  const handleTabSelect = (link: React.ReactNode) => {
    // Type guard to ensure link is a valid NavigationItem value
    if (isValidNavigationValue(link)) {
      const currentPath = matches[matches.length - 1].id
      // Save the current pages's URL state to restore it later
      if (isValidNavigationValue(currentPath)) {
        visitedPages.current[currentPath] = matches[matches.length - 1].search
      }
      navigate({
        to: link,
        search: {
          ...visitedPages.current[link],
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
