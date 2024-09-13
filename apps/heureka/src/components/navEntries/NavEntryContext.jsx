/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo } from "react"
import { Container, TopNavigation, TopNavigationItem } from "@cloudoperators/juno-ui-components"
import NavEntry from "./NavEntry"
import { useGlobalsActions, useGlobalsActiveNavEntry } from "../../hooks/useAppStore"

import ServicesNav from "../services/ServicesTopNavItem"
import IssueMatchesNav from "../issueMatches/IssueMatchesTopNavItem"
import ComponentsNav from "../components/ComponentsTopNavItem"

const NAV_CONFIG = [
  {
    label: "Services",
    value: "Services",
    icon: "dns",
    component: ServicesNav,
  },
  {
    label: "IssueMatches",
    value: "IssueMatches",
    icon: "autoAwesomeMotion",
    component: IssueMatchesNav,
  },
  {
    label: "Components",
    value: "Components",
    icon: "autoAwesomeMotion",
    component: ComponentsNav,
  },
]

const NavEntryContext = () => {
  const { setActiveNavEntry } = useGlobalsActions()
  const activeNavEntry = useGlobalsActiveNavEntry()

  // Memorized top navigation items
  const memorizedNavItems = useMemo(
    () =>
      NAV_CONFIG.map((nav) => (
        <TopNavigationItem
          key={nav.value}
          label={nav.label}
          active={activeNavEntry === nav.value} // Set the active item
          onClick={() => setActiveNavEntry(nav.value)} // Trigger tab change
        />
      )),
    [activeNavEntry, setActiveNavEntry]
  )

  // Memorized tab panels
  const memorizedNavItemContents = useMemo(
    () =>
      NAV_CONFIG.map((nav) => (
        <NavEntry key={nav.value} value={nav.value}>
          <nav.component />
        </NavEntry>
      )),
    []
  )

  return (
    <>
      <TopNavigation onActiveItemChange={() => {}}>{memorizedNavItems}</TopNavigation>
      <Container py>{memorizedNavItemContents}</Container>
    </>
  )
}

export default NavEntryContext
