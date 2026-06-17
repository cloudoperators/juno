/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Children, ReactElement, ReactNode, useEffect, useState, MouseEvent } from "react"
import { Icon } from "../Icon"
import { SideNavigationItemProps } from "../SideNavigationItem"
import { LevelContext } from "../SideNavigation/levelContext"

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

  const hasChildren = !!children && Children.count(children) > 0

  const renderChevron = () =>
    hasChildren ? (
      <span className={chevronStyles} aria-hidden="true">
        <Icon size="24" icon={isOpen ? "expandMore" : "chevronRight"} />
      </span>
    ) : null

  const renderLabel = () => (
    <span className={labelContainerStyles}>
      <span className={labelClampStyles}>{label}</span>
    </span>
  )

  const renderGroup = () => {
    const className = `juno-sidenavigation-group ${sideNavGroupStyles} ${isOpen ? "juno-sidenavigation-group-open" : ""}`

    if (hasChildren) {
      return (
        <button
          type="button"
          onClick={handleToggleOpen}
          aria-expanded={isOpen}
          className={className}
        >
          {renderLabel()}
          {renderChevron()}
        </button>
      )
    }

    return <div className={className}>{renderLabel()}</div>
  }

  return (
    <>
      {renderGroup()}
      {isOpen && <LevelContext.Provider value={1}>{children}</LevelContext.Provider>}
    </>
  )
}
