/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { AppShell, PageHeader, TopNavigation, TopNavigationItem } from "@cloudoperators/juno-ui-components"
import { useLocation, useNavigate } from "@tanstack/react-router"
import { useGlobalsEmbedded } from "./StoreProvider"

const CustomAppShell = ({ children }: any) => {
  const navigate = useNavigate()
  const location = useLocation()
  const embedded = useGlobalsEmbedded()

  const handleTabSelect = (link: React.ReactNode) => {
    if (typeof link === "string") {
      navigate({
        to: link,
        search: (prev) => {
          const { org } = prev
          return { org } // preserve only the "org" search parameter when navigating
        },
      })
    }
  }

  const topNavigation = (
    <TopNavigation activeItem={location.pathname} onActiveItemChange={handleTabSelect}>
      <TopNavigationItem icon="danger" key="/alerts" value="/alerts" label="Alerts" />
      <TopNavigationItem icon="info" key="/silences" value="/silences" label="Silences" />
    </TopNavigation>
  )

  return (
    <AppShell pageHeader={<PageHeader heading="Supernova" />} embedded={embedded} topNavigation={topNavigation}>
      {children}
    </AppShell>
  )
}

export default CustomAppShell
