/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// This entire file can be removed when TabNavigation is removed.

import React from "react"
import { TabBar, TabBarProps } from "./TabBar.component"
import { withDeprecationWarning } from "../withDeprecationWarning/index"

const TabNavigationBackwardsCompat = ({ appearance, tabStyle, className = "", ...props }: TabBarProps) => {
  // Preserve the historic TabNavigation default of "main" rather than TabBar's new "tabs" default.
  const resolvedAppearance = appearance || tabStyle || "main"
  return (
    <TabBar
      appearance={resolvedAppearance}
      className={`juno-tabnavigation juno-tabnavigation-${resolvedAppearance} ${className}`.trim()}
      {...props}
    />
  )
}

export const TabNavigation = withDeprecationWarning(
  TabNavigationBackwardsCompat,
  "TabNavigation is deprecated and may be removed in any of the next major releases. Use TabBar instead."
)
