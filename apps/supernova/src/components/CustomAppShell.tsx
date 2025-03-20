/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { AppShell, PageHeader, TopNavigation, TopNavigationItem } from "@cloudoperators/juno-ui-components"
import { useGlobalsEmbedded, useGlobalsActions, useGlobalsActiveSelectedTab } from "./StoreProvider"

const CustomAppShell = ({ children }: any) => {
  const embedded = useGlobalsEmbedded()
  const activeSelectedTab = useGlobalsActiveSelectedTab()
  const { setActiveSelectedTab } = useGlobalsActions()

  const handleTabSelect = (item: any) => {
    setActiveSelectedTab(item)
  }

  const topNavigation = (
    <TopNavigation activeItem={activeSelectedTab} onActiveItemChange={handleTabSelect}>
      <TopNavigationItem icon="danger" key="alerts" value="alerts" label="Alerts" />
      <TopNavigationItem icon="info" key="silences" value="silences" label="Silences" />
    </TopNavigation>
  )

  return (
    <AppShell pageHeader={<PageHeader heading="Supernova" />} embedded={embedded} topNavigation={topNavigation}>
      {children}
    </AppShell>
  )
}

export default CustomAppShell
