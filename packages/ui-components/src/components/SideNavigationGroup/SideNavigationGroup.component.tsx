/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactElement, useEffect, useState } from "react"
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
`

const disabledStyles = `
  jn:opacity-50
  jn:cursor-not-allowed
`

export interface SideNavigationGroupProps {
  /** Represents the nested components within the navigation group. */
  children?: ReactElement<SideNavigationItemProps> | ReactElement<SideNavigationItemProps>[]
  /** Indicates if the navigation group is non-interactive when set to true. */
  disabled?: boolean
  /** Text label displayed for the navigation group. */
  label: string
  /** Controls whether the navigation group is expanded by default. */
  open?: boolean
}

/**
 * SideNavigationGroup is a component designed to encapsulate and organize multiple
 * SideNavigationItem components, forming a logical grouping within a side navigation structure.
 *
 * This component is used to create and manage expandable and collapsible sections of navigation,
 * allowing users to efficiently navigate hierarchical menus.
 **/
export const SideNavigationGroup: React.FC<SideNavigationGroupProps> = ({
  children,
  disabled = false,
  label = "",
  open = false,
}) => {
  const [isOpen, setIsOpen] = useState(open)

  // Sync internal state with external prop changes
  useEffect(() => {
    setIsOpen(open)
  }, [open])

  const handleToggleOpen = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return
    e.stopPropagation() //Prevent event bubbling when expanding/collapsing
    setIsOpen(!isOpen)
  }

  const renderExpandIcon = () =>
    children && React.Children.count(children) > 0 ? (
      <span onClick={handleToggleOpen} role="button" tabIndex={0}>
        <Icon
          size="24"
          className={`
            juno-sidenavigation-item
            ${disabled ? disabledStyles : ""}`}
          icon={isOpen ? "expandMore" : "chevronRight"}
        />
      </span>
    ) : null

  const renderGroup = () => (
    <div className={`juno-sidenavigation-group ` + sideNavGroupStyles}>
      <span className="font-bold text-sm">{label}</span>
      {renderExpandIcon()}
    </div>
  )

  return (
    <>
      {renderGroup()}
      {isOpen && children}
    </>
  )
}
