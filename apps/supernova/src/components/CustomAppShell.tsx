/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from "react"
import { useNavigate, useMatches, AnySchema } from "@tanstack/react-router"
import { AppShell, PageHeader, TopNavigation, TopNavigationItem } from "@cloudoperators/juno-ui-components"
import { useGlobalsEmbedded } from "./StoreProvider"

const navigationItems = [
  {
    label: "Alerts",
    value: "/alerts",
    icon: "danger",
  },
  {
    label: "Silences",
    value: "/silences",
    icon: "info",
  },
] as const

type NavigationItem = (typeof navigationItems)[number]

const isValidNavigationValue = (value: unknown): value is NavigationItem["value"] => {
  return typeof value === "string" && navigationItems.some((item) => item.value === value)
}

const getDefaultSearchParams = (path: NavigationItem["value"]) => {
  switch (path) {
    case "/silences":
      return { silencesStatus: "active" }
    default:
      return {}
  }
}

const CustomAppShell = ({ children }: any) => {
  const visitedPages = useRef<Record<string, AnySchema>>({})
  const navigate = useNavigate()
  const matches = useMatches()
  const embedded = useGlobalsEmbedded()

  const handleTabSelect = (link: React.ReactNode) => {
    // Type guard to ensure link is a valid NavigationItem value
    if (isValidNavigationValue(link)) {
      const currentPath = matches[matches.length - 1].id
      // Save the current pages's URL state to restore it later
      visitedPages.current[currentPath] = matches[matches.length - 1].search
      navigate({
        to: link,
        search: {
          ...getDefaultSearchParams(link),
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
    <AppShell pageHeader={<PageHeader heading="Supernova" />} embedded={embedded} topNavigation={topNavigation}>
      {children}
    </AppShell>
  )
}

export default CustomAppShell
