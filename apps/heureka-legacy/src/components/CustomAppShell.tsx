/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { AppShell, PageHeader, TopNavigation, TopNavigationItem, Container } from "@cloudoperators/juno-ui-components"
import { useGlobalsActions, useGlobalsActiveView, useGlobalsEmbedded } from "./StoreProvider"
import ServicesView from "./services/ServicesView"
import IssueMatchesView from "./issueMatches/IssueMatchesView"
import ComponentsView from "./components/ComponentsView"
import constants from "./shared/constants"

// Configuration for navigation items and their respective components
const VIEW_CONFIG = {
  Services: { label: "Services", icon: "dns", component: ServicesView },
  IssueMatches: { label: "Vulnerabilities", icon: "autoAwesomeMotion", component: IssueMatchesView },
  Components: { label: "Images", icon: "autoAwesomeMotion", component: ComponentsView }, // Commented out to remove ComponentsView for MVP version
}

const CustomAppShell = ({ children }: any) => {
  // @ts-expect-error TS(2339): Property 'setActiveView' does not exist on type '() => void'. // @ts-expect-error
  const { setActiveView, setShowPanel } = useGlobalsActions()
  const activeView = useGlobalsActiveView()
  const embedded = useGlobalsEmbedded()

  const handleNavItemChange = (item: any) => {
    setActiveView(item)
    setShowPanel(constants.PANEL_NONE) // Hide the panel when switching
  }

  // Create topNavigation with NavItems based on VIEW_CONFIG
  const topNavigation = (
    // @ts-ignore
    <TopNavigation activeItem={activeView} onActiveItemChange={handleNavItemChange}>
      {Object.entries(VIEW_CONFIG).map(([key, nav]) => (
        // @ts-ignore
        <TopNavigationItem key={key} icon={nav.icon} value={key} label={nav.label} />
      ))}
    </TopNavigation>
  )

  // Get the component to render based on activeView
  // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  const ActiveComponent = VIEW_CONFIG[activeView]?.component

  return (
    // @ts-ignore
    <AppShell pageHeader={<PageHeader heading="Heureka" />} topNavigation={topNavigation} embedded={embedded}>
      <Container py px>
        {ActiveComponent && <ActiveComponent />}
        {children}
      </Container>
    </AppShell>
  )
}

export default CustomAppShell
