/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from "react"
import { TopNavigation, TopNavigationItem } from "@cloudoperators/juno-ui-components"
import { useNavigate, useLocation } from "@tanstack/react-router"

type NavigationItemType = {
  label: string
  value: string
  path: string
}

const navigationItems: NavigationItemType[] = [
  {
    label: "Services",
    value: "services",
    path: "/services",
  },
  {
    label: "Vulnerabilities",
    value: "vulnerabilities",
    path: "/vulnerabilities",
  },
]

export const Navigation = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const isVulnerabilitiesActive = location.pathname.toLowerCase().includes("vulnerabilities")

  // Store search parameters for each route type
  const searchParamsRef = useRef<Record<string, any>>({
    services: {},
    vulnerabilities: {},
  })

  const handleItemClick = (path: string) => {
    const currentPath = location.pathname
    const currentSearch = location.search

    // Store current search parameters for the current route type
    if (currentPath.toLowerCase().includes("services")) {
      searchParamsRef.current.services = currentSearch
    } else if (currentPath.toLowerCase().includes("vulnerabilities")) {
      searchParamsRef.current.vulnerabilities = currentSearch
    }

    // Navigate to the target path with its stored search parameters
    if (path.includes("services")) {
      navigate({
        to: path,
        search: searchParamsRef.current.services,
      })
    } else if (path.includes("vulnerabilities")) {
      navigate({
        to: path,
        search: searchParamsRef.current.vulnerabilities,
      })
    }
  }

  return (
    <TopNavigation activeItem={isVulnerabilitiesActive ? "vulnerabilities" : "services"}>
      {navigationItems.map(({ label, value, path }) => (
        <TopNavigationItem
          role="link"
          ariaLabel={value}
          key={value}
          label={label}
          value={value}
          onClick={() => handleItemClick(path)}
        />
      ))}
    </TopNavigation>
  )
}
