/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Tab as ReactTab } from "react-tabs"
import { Icon } from "../Icon/index.js"
import { knownIcons } from "../Icon/Icon.component.js"
import PropTypes from "prop-types"

const tabStyles = `
	jn-flex
	jn-font-bold
	jn-px-[1.5625rem]
	jn-items-center
	jn-cursor-pointer
	focus:jn-outline-none 
`

const disabledTabStyles = `
	jn-pointer-events-none
	jn-opacity-50
`

const selectedTabStyles = `
	jn-border-b-[3px]
	jn-border-theme-tab-active-bottom
`

const iconStyles = `
	jn-mr-2
`

/** A Tab Component representing an individual Tab inside a wrapping TabList inside a wrapping Tabs component. Not to be used standalone outside of the mentioned parent components.


*/
const Tab = ({ children = null, label = "", icon, disabled = false, className = "", ...props }) => {
  return (
    <ReactTab
      className={`juno-tab ${tabStyles} ${className}`}
      disabledClassName={`juno-tab-disabled ${disabledTabStyles}`}
      selectedClassName={`juno-tab-selected ${selectedTabStyles}`}
      disabled={disabled}
      {...props}
    >
      {icon ? <Icon icon={icon} size="18" className={`${iconStyles}`} /> : null}
      {children || label}
    </ReactTab>
  )
}

Tab.tabsRole = "Tab"

Tab.propTypes = {
  /** The children to render inside the Tab (-button) */
  children: PropTypes.node,
  /** The Tab label (only rendered when no children are supplied) */
  label: PropTypes.string,
  /** Pass the name of an icon to render in the Tab. Can be any icon included with Juno. */
  icon: PropTypes.oneOf(knownIcons),
  /** Whether the Tab is disabled */
  disabled: PropTypes.bool,
  /** Add custom classNames to the Tab */
  className: PropTypes.string,
}

export { Tab }
