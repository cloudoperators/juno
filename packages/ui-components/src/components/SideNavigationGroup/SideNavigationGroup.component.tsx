/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Children, ReactElement, ReactNode, useEffect, useState, MouseEvent } from "react"
import { Icon } from "../Icon"
import { SideNavigationItemProps } from "../SideNavigationItem"

const sideNavGroupStyles = `
  jn:flex
  jn:justify-between
  jn:px-[0.5rem]
  jn:py-[0.1875rem]
  jn:text-theme-default
  jn:w-full
  jn:rounded
  jn:border-l-[0.25rem]
  jn:border-transparent
`

export interface SideNavigationGroupProps {
  /** Represents the nested components within the navigation group. */
  children?: ReactElement<SideNavigationItemProps> | ReactElement<SideNavigationItemProps>[]
  /** Label displayed for the navigation group. */
  label: ReactNode
  /** Controls whether the navigation group is expanded by default. */
  open?: boolean
}

/**
 * SideNavigationGroup is a component designed to encapsulate and organize multiple
 * SideNavigationItem components, forming a logical grouping within a side navigation structure.
 *
 * This component is used to create and manage expandable and collapsible sections of navigation,
 * allowing users to efficiently navigate hierarchical menus.
 *
 * @see https://cloudoperators.github.io/juno/?path=/docs/navigation-sidenavigation-sidenavigationgroup--docs
 * @see {@link SideNavigationGroupProps}
 **/

export const SideNavigationGroup = ({ children, label = "", open = false }: SideNavigationGroupProps): ReactNode => {
  const [isOpen, setIsOpen] = useState(open)

  // Sync internal state with external prop changes
  useEffect(() => {
    setIsOpen(open)
  }, [open])

  const handleToggleOpen = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation() //Prevent event bubbling when expanding/collapsing
    setIsOpen(!isOpen)
  }

  const renderExpandButton = () =>
    children && Children.count(children) > 0 ? (
      <button type="button" onClick={handleToggleOpen} aria-label={isOpen ? "Collapse section" : "Expand section"}>
        <Icon size="24" icon={isOpen ? "expandMore" : "chevronRight"} />
      </button>
    ) : null

  const renderGroup = () => (
    <div
      className={`juno-sidenavigation-group ${sideNavGroupStyles} ${isOpen ? "juno-sidenavigation-group-open" : ""}`}
    >
      <span className="font-bold text-sm">{label}</span>
      {renderExpandButton()}
    </div>
  )

  return (
    <>
      {renderGroup()}
      {isOpen && children}
    </>
  )
}
