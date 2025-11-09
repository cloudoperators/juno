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
  const visitedPages = useRef<Record<string, AnySchema>>({})
  const navigate = useNavigate()
  const matches = useMatches()

  const handleTabSelect = (link: React.ReactNode) => {
    // Save the current pages's URL state to restore it later
    const currentPath = matches[matches.length - 1].routeId
    visitedPages.current[currentPath] = matches[matches.length - 1].search
    if (typeof link === "string") {
      navigate({
        to: link,
        search: visitedPages.current[link] ?? {}, // restore the url state of the target page
      })
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
