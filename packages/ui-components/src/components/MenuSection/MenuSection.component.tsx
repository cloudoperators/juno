/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

const sectionStyles = `
	jn-bg-theme-background-lvl-1
	jn-flex
	jn-flex-col
	jn-border-b
	jn-border-theme-background-lvl-3
	last:jn-border-b-0
`

const titleStyles = `
	jn-text-xs
	jn-p-2
`
/** Use MenuSection to structure and sub-divide MenuItems in a menu. All but the last MenuSection will render a visible divider at the bottom. Optionally, a MenuSection can have a title.*/
export const MenuSection: React.FC<MenuSectionProps> = ({ title = "", children = null, className = "", ...props }) => {
  return (
    <div className={`juno-menu-section ${sectionStyles} ${className}`} {...props}>
      {title ? <div className={`juno-menu-section-title ${titleStyles}`}>{title}</div> : ""}
      {children}
    </div>
  )
}

export interface MenuSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The children to render in the MenuSection */
  children?: React.ReactNode
  /** Pass a custom className */
  className?: string
  /** Pass an optional section title */
  title?: string
}
