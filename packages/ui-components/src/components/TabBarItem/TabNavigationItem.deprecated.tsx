/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// This entire file can be removed when TabNavigationItem is removed.

import React, { useContext } from "react"
import { TabBarItem, TabBarItemProps } from "./TabBarItem.component"
import { TabBarContext } from "../TabBar/TabBar.component"
import { withDeprecationWarning } from "../withDeprecationWarning/index"

const TabNavigationItemBackwardsCompat = ({ className = "", ...props }: TabBarItemProps) => {
  const ctx = useContext(TabBarContext)
  const a = ctx?.appearance || "main"
  return (
    <TabBarItem className={`juno-tabnavigation-item juno-tabnavigation-${a}-item ${className}`.trim()} {...props} />
  )
}

export const TabNavigationItem = withDeprecationWarning(
  TabNavigationItemBackwardsCompat,
  "TabNavigationItem is deprecated and may be removed in any of the next major releases. Use TabBarItem instead."
)
