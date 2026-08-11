/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Children, ReactElement, ReactNode, useEffect, useState, MouseEvent } from "react"
import { Icon } from "../Icon"
import { SideNavigationItemProps } from "../SideNavigationItem"
import "../SideNavigation/sidenavigation.css"

const sideNavGroupStyles = `
  jn:flex
  jn:items-start
  jn:justify-between
  jn:pl-[0.5rem]
  jn:text-theme-default
  jn:w-full
  jn:rounded
  jn:border-l-[0.25rem]
  jn:border-transparent
  jn:text-sm
`

const interactiveGroupStyles = `
  jn:cursor-pointer
  jn:hover:bg-theme-sidenav-item-hover
`

const labelContainerStyles = `
  jn:flex
  jn:items-center
  jn:flex-grow
  jn:min-w-0
  jn:min-h-[1.875rem]
`

const labelClampStyles = `
  jn:text-left
  jn:line-clamp-2
  jn:[overflow-wrap:anywhere]
`

const chevronStyles = `
  jn:flex
  jn:items-center
  jn:min-h-[1.875rem]
`

export interface SideNavigationGroupProps {
  /** Represents the nested components within the navigation group. */
  children?: ReactElement<SideNavigationItemProps> | ReactElement<SideNavigationItemProps>[]
  /** Label displayed for the navigation group. */
  label: ReactNode
  /** Sets the open state of the navigation group. The component owns the open state internally but re-syncs to this prop whenever the parent updates it, so it can be used either as the initial value or to drive the state from the outside. */
  open?: boolean
  /** Fired when the user clicks the group to toggle it. Receives the next open state. */
  onToggle?: (_isOpen: boolean) => void
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

export const SideNavigationGroup = ({
  children,
  label = "",
  open = false,
  onToggle,
}: SideNavigationGroupProps): ReactNode => {
  const [isOpen, setIsOpen] = useState(open)

  // Sync internal state with external prop changes
  useEffect(() => {
    setIsOpen(open)
  }, [open])

  const handleToggleOpen = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation() //Prevent event bubbling when expanding/collapsing
    const next = !isOpen
    setIsOpen(next)
    onToggle?.(next)
  }

  const hasChildren = !!children && Children.count(children) > 0

  const titleText: string | undefined = typeof label === "string" && label.length > 0 ? label : undefined

  const renderChevron = () =>
    hasChildren ? (
      <span className={chevronStyles} aria-hidden="true">
        <Icon size="24" icon={isOpen ? "expandMore" : "chevronRight"} />
      </span>
    ) : null

  const renderLabel = () => (
    <span className={labelContainerStyles}>
      <span className={`${labelClampStyles}`}>{label}</span>
    </span>
  )

  const renderGroup = () => {
    const baseClassName = `juno-sidenavigation-group ${sideNavGroupStyles} ${isOpen ? "juno-sidenavigation-group-open" : ""}`

    if (hasChildren) {
      return (
        <button
          type="button"
          onClick={handleToggleOpen}
          aria-expanded={isOpen}
          className={`${baseClassName} ${interactiveGroupStyles}`}
          title={titleText}
        >
          {renderLabel()}
          {renderChevron()}
        </button>
      )
    }

    return (
      <div className={baseClassName} title={titleText}>
        {renderLabel()}
      </div>
    )
  }

  return (
    <li className="juno-sidenavigation-group-element">
      {renderGroup()}
      {isOpen && hasChildren && <ul>{children}</ul>}
    </li>
  )
}
