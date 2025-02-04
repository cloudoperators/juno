/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
// @ts-expect-error TS(2792) FIXME: Cannot find module '@cloudoperators/juno-ui-compon... Remove this comment to see the full error message
import { AppShell, PageHeader, TopNavigation, TopNavigationItem } from "@cloudoperators/juno-ui-components"
import { useGlobalsEmbedded, useGlobalsActions, useGlobalsActiveSelectedTab } from "./StoreProvider"

const CustomAppShell = ({ children }: any) => {
  const embedded = useGlobalsEmbedded()
  const activeSelectedTab = useGlobalsActiveSelectedTab()
  // @ts-ignore
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
