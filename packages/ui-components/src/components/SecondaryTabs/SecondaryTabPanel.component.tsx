/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { forwardRef, HTMLAttributes, ReactNode } from "react"
import { useSecondaryTabsContext } from "./SecondaryTabs.component"

export interface SecondaryTabPanelProps extends HTMLAttributes<HTMLDivElement> {
  /** Must match the `value` of the corresponding `SecondaryTab`. */
  value: string
  children?: ReactNode
  /** @default "" */
  className?: string
}

/**
 * Content panel for a `SecondaryTab`. Hidden when its `value` doesn't match the active tab.
 * @see {@link SecondaryTabPanelProps}
 */
export const SecondaryTabPanel = forwardRef<HTMLDivElement, SecondaryTabPanelProps>(
  ({ value, children, className = "", ...rest }, ref) => {
    const { activeTab, tabsId } = useSecondaryTabsContext()
    const isActive = activeTab === value

    return (
      <div
        ref={ref}
        {...rest}
        role="tabpanel"
        id={`${tabsId}-tabpanel-${value}`}
        aria-labelledby={`${tabsId}-tab-${value}`}
        hidden={!isActive}
        className={`juno-secondary-tabpanel ${className}`}
      >
        {children}
      </div>
    )
  }
)

SecondaryTabPanel.displayName = "SecondaryTabPanel"
