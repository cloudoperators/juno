/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Tab as ReactTab, TabProps as ReactTabProps } from "react-tabs"
import { Icon } from "../Icon/index"
import { KnownIcons } from "../Icon/Icon.component"

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
export const Tab = ({ children = null, label = "", icon, disabled = false, className = "", ...props }: TabProps) => {
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

export interface TabProps extends ReactTabProps {
  /** The children to render inside the Tab (-button) */
  children?: any
  /** The Tab label (only rendered when no children are supplied) */
  label?: string
  /** Pass the name of an icon to render in the Tab. Can be any icon included with Juno. */
  icon?: KnownIcons
  /** Whether the Tab is disabled */
  disabled?: boolean
  /** Add custom classNames to the Tab */
  className?: string
}
