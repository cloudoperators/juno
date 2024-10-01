/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Tabs } from "../Tabs/index"
import { TabListProps } from "../TabList/TabList.component"
import { TabPanelProps } from "../TabPanel/TabPanel.component"

/** 
Main Tabs are used at the top of the content area when using the tabs to switch the complete content area content. If you only want to have tabs for parts of the content use 'Tabs' instead and place them in the part of the content where the tabbed content should live. You will probably want to use a 'Container' inside the TabPanels to get nice padding.
 */
export const MainTabs = ({
  children = null,
  defaultIndex,
  selectedIndex,
  onSelect,
  className = "",
  ...props
}: MainTabsProps) => {
  return (
    <Tabs
      defaultIndex={defaultIndex}
      selectedIndex={selectedIndex}
      onSelect={onSelect}
      className={className}
      variant="main"
      {...props}
    >
      {children}
    </Tabs>
  )
}

// eslint-disable-next-line no-unused-vars
export type OnSelectHander = (value: number) => void

export type MainTabElement =
  | React.ReactElement<TabListProps>
  | React.ReactElement<TabPanelProps>
  | MainTabElement[]
  | null
  | undefined

export interface MainTabsProps {
  /** All the child elements of MainTabs: Tab(s) inside a TabList and TabPanel(s) */
  children?: MainTabElement
  /** The index of the Tab to be selected by default in "Uncontrolled Mode" (default) where Tabs handle their state internally. Do not use in "Controlled Mode".*/
  defaultIndex?: number
  /** The index of the Tab to be selected by default. This enables "Controlled Mode" where the developer takes over control of the Tabs state and behaviour. Requires onSelect to be set.*/
  selectedIndex?: number
  /** Handler required in "Controlled Mode" */
  onSelect?: OnSelectHander
  /** Add a custom className to the whole Tabs construct */
  className?: string
}
