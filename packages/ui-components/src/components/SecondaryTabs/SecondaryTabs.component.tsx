/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, {
  createContext,
  useContext,
  useState,
  useId,
  Children,
  isValidElement,
  HTMLAttributes,
  ReactNode,
} from "react"

export interface SecondaryTabsContextType {
  activeTab: string | undefined
  setActiveTab: (_value: string) => void
  disabled: boolean
  tabsId: string
}

const SecondaryTabsContext = createContext<SecondaryTabsContextType | undefined>(undefined)

export const useSecondaryTabsContext = () => {
  const ctx = useContext(SecondaryTabsContext)
  if (!ctx) throw new Error("useSecondaryTabsContext must be used within SecondaryTabs")
  return ctx
}

export interface SecondaryTabsProps extends HTMLAttributes<HTMLDivElement> {
  /** Controlled: the currently active tab value. */
  activeTab?: string
  /** Uncontrolled: the tab to select on first render. */
  defaultTab?: string
  /** Called when the user selects a different tab. */
  onTabChange?: (_value: string) => void
  /** Disables all child tabs. @default false */
  disabled?: boolean
  children?: ReactNode
  /** @default "" */
  className?: string
}

const tablistStyles = `
  jn:inline-flex
  jn:rounded-[0.25rem]
  jn:bg-theme-secondary-tabs
  jn:p-[0.125rem]
`

/**
 * Segmented-control tab strip. Place `SecondaryTab` children inside; `SecondaryTabPanel`
 * children are rendered after the pill container but stay within the same context.
 * @see {@link SecondaryTabsProps}
 */
export const SecondaryTabs = ({
  activeTab: activeTabProp,
  defaultTab,
  onTabChange,
  disabled = false,
  children,
  className = "",
  ...props
}: SecondaryTabsProps) => {
  const tabsId = useId()
  const isControlled = activeTabProp !== undefined
  const [internalTab, setInternalTab] = useState<string | undefined>(defaultTab)

  const activeTab = isControlled ? activeTabProp : internalTab

  const setActiveTab = (value: string) => {
    if (!isControlled) setInternalTab(value)
    onTabChange?.(value)
  }

  const tabs: ReactNode[] = []
  const panels: ReactNode[] = []

  Children.forEach(children, (child) => {
    if (!isValidElement(child)) return
    const displayName = (child.type as { displayName?: string })?.displayName
    if (displayName === "SecondaryTab") {
      tabs.push(child)
    } else {
      panels.push(child)
    }
  })

  return (
    <SecondaryTabsContext.Provider value={{ activeTab, setActiveTab, disabled, tabsId }}>
      <div {...props} role="tablist" className={`juno-secondary-tabs ${tablistStyles} ${className}`}>
        {tabs}
      </div>
      {panels}
    </SecondaryTabsContext.Provider>
  )
}

SecondaryTabs.displayName = "SecondaryTabs"
