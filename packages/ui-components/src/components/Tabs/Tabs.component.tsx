/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react"
import { Tabs as ReactTabs, TabsProps as ReactTabsProps } from "react-tabs" //
import { TabListProps } from "../TabList/TabList.component"
import { TabPanelProps } from "../TabPanel/TabPanel.component"

export interface TabsContextType {
  variant?: TabsVariant
}

const TabsContext = React.createContext<TabsContextType>({})
export const useTabsContext = () => React.useContext(TabsContext)

/** 
A Tabs component.
The parent wrapping TabList, Tab, and TabPanel subcomponents.
For a navigation that looks like tabs, but runs onClick handlers or contains hrefs, use TabNavigation instead.
Tabs are used to provide a tabbed section within the content area when combining static content and tabbed content on the same page. You will probably want to use a 'Container' (px=false) inside the TabPanels to get nice padding.
*/

const Tabs = ({
  children = null,
  defaultIndex,
  selectedIndex,
  onSelect,
  variant = "content",
  className = "",
  ...props
}: TabsProps) => {
  // ensure component updates if selected index changes
  const [passedIndex, setPassedIndex] = useState(selectedIndex)

  useEffect(() => {
    setPassedIndex(selectedIndex)
  }, [selectedIndex])

  const handleSelect = (index: number) => {
    onSelect && onSelect(index)
  }

  const tabsConf = {
    variant: variant,
  }

  return (
    <TabsContext.Provider value={tabsConf}>
      <ReactTabs
        className={`juno-tabs juno-tabs-${variant} ${className}`}
        defaultIndex={defaultIndex}
        selectedIndex={passedIndex}
        onSelect={handleSelect}
        {...props}
      >
        {children}
      </ReactTabs>
    </TabsContext.Provider>
  )
}

Tabs.tabsRole = "Tabs"

export type TabsVariant = "main" | "content" | "codeblocks"

// eslint-disable-next-line no-unused-vars
export type OnSelectHander = (value: number) => void

export type TabElement =
  | React.ReactElement<TabListProps>
  | React.ReactElement<TabPanelProps>
  | TabElement[]
  | null
  | undefined

export type TabsProps = {
  /** All the child elements of the Tabs: Tab(s) inside a TabList and TabPanel(s) */
  children?: TabElement
  /** The index of the Tab to be selected by default in "Uncontrolled Mode" (default) where Tabs handle their state internally. Do not use in "Controlled Mode".*/
  defaultIndex?: number
  /** The index of the Tab to be selected by default. This enables "Controlled Mode" where the developer takes over control of the Tabs state and behaviour. Requires onSelect to be set.*/
  selectedIndex?: number
  /** Handler required in "Controlled Mode" */
  onSelect?: OnSelectHander
  /** Switch on Main Tab styles and context if needed */
  variant?: TabsVariant
  /** Add a custom className to the whole Tabs construct */
  className?: string
} & ReactTabsProps

export { Tabs }
