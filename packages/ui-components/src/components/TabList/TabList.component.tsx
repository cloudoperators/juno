/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { TabList as ReactTabList, TabListProps as ReactTabListProps } from "react-tabs"
import { TabsVariant, useTabsContext } from "../Tabs/Tabs.component"
import { TabProps } from "../Tab/Tab.component"

const tabListStyles = `
	jn-flex
	jn-h-[3.4375rem]
`
// focus-within:ring-1
// focus-within:ring-theme-focus
// focus-within:ring-inset

const getVariantStyles = (variant: TabsVariant) => {
  switch (variant) {
    case "main":
      return `jn-bg-theme-tab-navigation-top`
    case "codeblocks":
      return `
				jn-text-sm
				jn-bg-theme-code-block
				jn-border-b-[1px]
				jn-border-theme-codeblock-bar 
			`
    default:
      return `
				jn-border-b-[1px] 
				jn-border-theme-tab-navigation-content-bottom
			`
  }
}

/** A tabList component wraps all individual Tabs inside a parent Tabs component */

const TabList = ({ variant = "content", children = null, ...props }: TabListProps) => {
  const tabsContext = useTabsContext() || {}
  const tabsVariant = tabsContext.variant || variant

  return (
    <ReactTabList
      className={`juno-tablist juno-tablist-${tabsVariant} ${tabListStyles} ${getVariantStyles(tabsVariant)}`}
      {...props}
    >
      {children}
    </ReactTabList>
  )
}

TabList.tabsRole = "TabList"

export type TabListProps = {
  /** Pick the TabList style */
  variant?: TabsVariant
  /** The individual child Tabs to render */
  children?: React.ReactElement<TabProps> | React.ReactElement<TabProps>[] | null
} & ReactTabListProps

export { TabList }
