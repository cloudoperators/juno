/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { AppShell, PageHeader, TopNavigation, TopNavigationItem } from "@cloudoperators/juno-ui-components"
import { useGlobalsActions, useGlobalsActiveNavEntry } from "../hooks/useAppStore"
import ServicesView from "./services/ServicesView"
import IssueMatchesView from "./issueMatches/IssueMatchesView"
import ComponentsView from "./components/ComponentsView"
import constants from "./shared/constants"

// Configuration for navigation items and their respective components
const VIEW_CONFIG = {
  Services: { label: "Services", icon: "dns", component: ServicesView },
  IssueMatches: { label: "IssueMatches", icon: "autoAwesomeMotion", component: IssueMatchesView },
  Components: { label: "Components", icon: "autoAwesomeMotion", component: ComponentsView },
}

const CustomAppShell = ({ children }) => {
  const { setActiveView, setShowPanel } = useGlobalsActions()
  const activeView = useGlobalsActiveNavEntry()

  const handleNavItemChange = (item) => {
    setActiveView(item)
    setShowPanel(constants.PANEL_NONE) // Hide the panel when switching
  }

  // Create topNavigation with NavItems based on VIEW_CONFIG
  const topNavigation = (
    <TopNavigation activeItem={activeView} onActiveItemChange={handleNavItemChange}>
      {Object.entries(VIEW_CONFIG).map(([key, nav]) => (
        <TopNavigationItem key={key} icon={nav.icon} value={key} label={nav.label} />
      ))}
    </TopNavigation>
  )

  // Get the component to render based on activeView
  const ActiveComponent = VIEW_CONFIG[activeView]?.component

  return (
    <AppShell pageHeader={<PageHeader heading="Converged Cloud | Heureka" />} topNavigation={topNavigation}>
      {ActiveComponent && <ActiveComponent />}
      {children}
    </AppShell>
  )
}

export default CustomAppShell
