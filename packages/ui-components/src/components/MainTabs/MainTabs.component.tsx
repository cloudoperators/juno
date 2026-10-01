/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { HTMLAttributes, ReactNode } from "react"
import { TabsBase } from "../Tabs/Tabs.component"
import { withDeprecationWarning } from "../withDeprecationWarning/index"

export const MainTabsBase = ({
  children,
  defaultIndex,
  selectedIndex,
  onSelect,
  className = "",
  ...props
}: MainTabsProps): ReactNode => {
  return (
    <TabsBase
      defaultIndex={defaultIndex}
      selectedIndex={selectedIndex}
      onSelect={onSelect}
      className={className}
      variant="main"
      {...props}
    >
      {children}
    </TabsBase>
  )
}

export interface MainTabsProps extends Omit<HTMLAttributes<HTMLElement>, "onSelect"> {
  /**
   * All the child elements of MainTabs: Tab(s) inside a TabList and TabPanel(s).
   */
  children?: ReactNode

  /**
   * The index of the Tab to be selected by default in "Uncontrolled Mode" (default) where Tabs handle their state internally. Do not use in "Controlled Mode".
   */
  defaultIndex?: number

  /**
   * The index of the Tab to be selected by default. This enables "Controlled Mode" where the developer takes over control of the Tabs state and behaviour. Requires onSelect to be set.
   */
  selectedIndex?: number | null

  /**
   * Handler required in "Controlled Mode".
   */
  onSelect?: (_value: number) => void

  /**
   * Add a custom className to the whole Tabs construct.
   * @default ""
   */
  className?: string
}

/**
 * @deprecated MainTabs is deprecated and may be removed in any of the next major releases. Once TabBar is refactored to being representational-only, you will be able to use TabBar in combination with react-tabs directly if you want to keep the react-tabs internal logic.
 * @see https://cloudoperators.github.io/juno/?path=/docs/layout-tabs-maintabs--docs
 * @see {@link MainTabsProps}
 */
export const MainTabs = withDeprecationWarning(
  MainTabsBase,
  "MainTabs is deprecated and may be removed in any of the next major releases. Use react-tabs directly instead."
)
