/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// This entire file can be removed when TabNavigation is removed.

import React from "react"
import { TabBar, TabBarProps } from "./TabBar.component"
import { withDeprecationWarning } from "../withDeprecationWarning/index"

const TabNavigationBackwardsCompat = ({ appearance, tabStyle, className = "", ...props }: TabBarProps) => {
  const a = appearance || tabStyle || "main"
  return (
    <TabBar
      appearance={appearance}
      tabStyle={tabStyle}
      className={`juno-tabnavigation juno-tabnavigation-${a} ${className}`.trim()}
      {...props}
    />
  )
}

export const TabNavigation = withDeprecationWarning(
  TabNavigationBackwardsCompat,
  "TabNavigation is deprecated and may be removed in any of the next major releases. Use TabBar instead."
)
