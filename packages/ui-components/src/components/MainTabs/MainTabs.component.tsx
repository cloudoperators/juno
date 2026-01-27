/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Tabs } from "../Tabs/index"

/**
 * `MainTabs` represents primary tab navigation at the content area's top, for complete content switching.
 * Ideal for major interface tabbing; use `Tabs` for partial content areas.
 *
 * @component
 * @param {React.ReactNode} [children] Tab elements and panels configured inside `MainTabs`.
 * @param {number} [defaultIndex] The index of the default selected tab in uncontrolled mode.
 * @param {number | null} [selectedIndex] The index of the selected tab for controlled mode.
 * @param {function} [onSelect] Handler for tab selection in controlled mode.
 * @param {string} [className] Additional CSS classes for styling. Defaults to an empty string.
 * @returns {React.ReactElement} A main tab navigation component for comprehensive content switching.
 */
export const MainTabs: React.FC<MainTabsProps> = ({
  children,
  defaultIndex,
  selectedIndex,
  onSelect,
  className = "",
  ...props
}) => {
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

export interface MainTabsProps extends Omit<React.HTMLAttributes<HTMLElement>, "onSelect"> {
  /**
   * All the child elements of MainTabs: Tab(s) inside a TabList and TabPanel(s).
   */
  children?: React.ReactNode

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
