/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo } from "react"
import { Container, TopNavigation, TopNavigationItem } from "@cloudoperators/juno-ui-components"
import TabPanel from "./TabPanel"
import { useGlobalsActions, useGlobalsActiveTab } from "../../hooks/useAppStore"

import ServicesTab from "../services/ServicesTab"
import IssueMatchesTab from "../issueMatches/IssueMatchesTab"
import ComponentsTab from "../components/ComponentsTab"

const TAB_CONFIG = [
  {
    label: "Services",
    value: "Services",
    icon: "dns",
    component: ServicesTab,
  },
  {
    label: "IssueMatches",
    value: "IssueMatches",
    icon: "autoAwesomeMotion",
    component: IssueMatchesTab,
  },
  {
    label: "Components",
    value: "Components",
    icon: "autoAwesomeMotion",
    component: ComponentsTab,
  },
]

const TabContext = () => {
  const { setActiveTab } = useGlobalsActions()
  const activeTab = useGlobalsActiveTab()

  // Memorized top navigation items
  const memorizedTabs = useMemo(
    () =>
      TAB_CONFIG.map((tab) => (
        <TopNavigationItem
          key={tab.value}
          label={tab.label}
          active={activeTab === tab.value} // Set the active item
          onClick={() => setActiveTab(tab.value)} // Trigger tab change
        />
      )),
    [activeTab, setActiveTab]
  )

  // Memorized tab panels
  const memorizedTabPanels = useMemo(
    () =>
      TAB_CONFIG.map((tab) => (
        <TabPanel key={tab.value} value={tab.value}>
          <tab.component />
        </TabPanel>
      )),
    []
  )

  return (
    <>
      <TopNavigation onActiveItemChange={() => {}}>{memorizedTabs}</TopNavigation>
      <Container py>{memorizedTabPanels}</Container>
    </>
  )
}

export default TabContext
