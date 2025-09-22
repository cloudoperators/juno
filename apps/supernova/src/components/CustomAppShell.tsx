/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { AppShell, PageHeader, TopNavigation, TopNavigationItem } from "@cloudoperators/juno-ui-components"
import { useNavigate, useMatches, useRouter } from "@tanstack/react-router"
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
  const navigate = useNavigate()
  const matches = useMatches()
  const router = useRouter()
  const embedded = useGlobalsEmbedded()

  const handleTabSelect = (link: React.ReactNode) => {
    if (typeof link === "string") {
      navigate({
        to: link,
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
