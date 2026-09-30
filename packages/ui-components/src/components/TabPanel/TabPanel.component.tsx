/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { HTMLAttributes, ReactNode } from "react"
import { TabPanel as ReactTabPanel } from "react-tabs"

/**
 * @deprecated TabPanel is deprecated and may be removed in any of the next major releases. Use TabBar in combination with react-tabs directly if you want to keep the react-tabs internal logic.
 * The TabPanel holds content related to a Tab in a TabList in a wrapping Tab component. Not to be used standalone / outside a Tabs wrapper.
 *  * @see https://cloudoperators.github.io/juno/?path=/docs/layout-tabs-tabpanel--docs
 * @see {@link TabPanelProps}
 */

export const TabPanel = ({ children, className = "", ...props }: TabPanelProps): ReactNode => {
  return (
    <ReactTabPanel className={`juno-tabpanel ${className}`} selectedClassName="juno-tabpanel-selected" {...props}>
      {children}
    </ReactTabPanel>
  )
}

TabPanel.tabsRole = "TabPanel"

export interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
  /** The content to show/render when the associated Tab is selected */
}
