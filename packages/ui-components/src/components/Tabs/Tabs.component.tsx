/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react"
import { Tabs as ReactTabs } from "react-tabs"

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

export const Tabs = ({
  children,
  defaultIndex,
  // The prop `selectedIndex` is marked as required in `UncontrolledTabs`, but its value is `undefined`.
  // default: null
  // https://www.npmjs.com/package/react-tabs#controlled-vs-uncontrolled-mode
  selectedIndex = null,
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
        selectedIndex={passedIndex as number}
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

export interface TabsProps {
  /** All the child elements of the Tabs: Tab(s) inside a TabList and TabPanel(s) */
  children?: React.ReactNode
  /** The index of the Tab to be selected by default in "Uncontrolled Mode" (default) where Tabs handle their state internally. Do not use in "Controlled Mode".*/
  defaultIndex?: number
  /** The index of the Tab to be selected by default. This enables "Controlled Mode" where the developer takes over control of the Tabs state and behaviour. Requires onSelect to be set.*/
  selectedIndex?: number | null
  /** Handler required in "Controlled Mode" */
  // eslint-disable-next-line no-unused-vars
  onSelect?: (value: number) => void
  /** Switch on Main Tab styles and context if needed */
  variant?: TabsVariant
  /** Add a custom className to the whole Tabs construct */
  className?: string
}
