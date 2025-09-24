/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from "react"
import { useNavigate, useMatches, AnySchema } from "@tanstack/react-router"
import { AppShell, PageHeader, TopNavigation, TopNavigationItem } from "@cloudoperators/juno-ui-components"
import { useGlobalsEmbedded } from "./StoreProvider"

type NavigationItemType = {
  label: string
  value: string
  icon: "danger" | "info"
}

const navigationItems: NavigationItemType[] = [
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
]

const CustomAppShell = ({ children }: any) => {
  const visitedPages = useRef<Record<string, AnySchema>>({})
  const navigate = useNavigate()
  const matches = useMatches()
  const embedded = useGlobalsEmbedded()

  const handleTabSelect = (link: React.ReactNode) => {
    // save the url state of the current page
    const currentPath = matches[matches.length - 1].id
    visitedPages.current[currentPath] = matches[matches.length - 1].search

    if (typeof link === "string") {
      navigate({
        to: link,
        search: visitedPages.current[link] ?? {}, // restore the url state of the target page
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
