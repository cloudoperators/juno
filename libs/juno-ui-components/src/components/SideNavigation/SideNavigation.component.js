/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
import { Navigation } from "../Navigation/index"

const sideNavStyles = `
  jn-min-w-[7.5rem]
  jn-max-w-[20rem]
`

/**
A generic vertical side navigation component.
Place SideNavigationItem components as children.
*/
export const SideNavigation = ({
  activeItem,
  ariaLabel,
  children,
  className,
  disabled,
  onActiveItemChange,
  ...props
}) => {
  return (
    <Navigation
      activeItem={activeItem}
      ariaLabel={ariaLabel}
      className={`juno-sidenavigation ${sideNavStyles} ${className}`}
      disabled={disabled}
      navigationRole="SideNavigation"
      onActiveItemChange={onActiveItemChange}
      {...props}
    >
      {children}
    </Navigation>
  )
}

SideNavigation.propTypes = {
  /** The active navigation item by label */
  activeItem: PropTypes.string,
  /** The aria-label of the navigation. Specify when there are more than one elements with an implicit or explicit `role="navigation"` on a page/view. */
  ariaLabel: PropTypes.string,
  /** The children of the Navigation. Typically these should be SideNavigationItem(s) */
  children: PropTypes.node,
  /** Pass custom classname. */
  className: PropTypes.string,
  /** Whether the navigation is disabled */
  disabled: PropTypes.bool,
  /** Handler to execute when the active item changes */
  onActiveItemChange: PropTypes.func,
}

SideNavigation.defaultProps = {
  activeItem: "",
  ariaLabel: undefined,
  children: null,
  className: "",
  disabled: false,
  onActiveItemChange: undefined,
}
