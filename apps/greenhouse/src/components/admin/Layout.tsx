/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from "react"
import { useNavigate, useMatches, AnySchema } from "@tanstack/react-router"
import { AppShell, TopNavigation, TopNavigationItem } from "@cloudoperators/juno-ui-components"

const navigationItems = [
  {
    label: "Clusters",
    value: "/admin/clusters",
    icon: "dns",
  },
  {
    label: "Teams",
    value: "/admin/teams",
    icon: "dns",
  },
  {
    label: "Plugins",
    value: "/admin/plugins",
    icon: "dns",
  },
] as const

type NavigationItem = (typeof navigationItems)[number]

const isValidNavigationValue = (value: unknown): value is NavigationItem["value"] => {
  return typeof value === "string" && navigationItems.some((item) => item.value === value)
}

export const Layout = ({ children }: any) => {
  const visitedPages = useRef<Record<string, AnySchema>>({})
  const navigate = useNavigate()
  const matches = useMatches()

  const handleTabSelect = (link: React.ReactNode) => {
    // Type guard to ensure link is a valid NavigationItem value
    if (isValidNavigationValue(link)) {
      const currentPath = matches[matches.length - 1].id
      // Save the current pages's URL state to restore it later
      visitedPages.current[currentPath] = matches[matches.length - 1].search
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

  const topNavigation = (
    <TopNavigation activeItem={getActiveItem()} onActiveItemChange={handleTabSelect}>
      {navigationItems.map((item) => (
        <TopNavigationItem icon={item.icon} key={item.value} value={item.value} label={item.label} />
      ))}
    </TopNavigation>
  )

  return (
    <AppShell embedded topNavigation={topNavigation}>
      {children}
    </AppShell>
  )
}
