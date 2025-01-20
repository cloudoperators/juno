/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

const mainInnerStyles = `
  jn-flex
  jn-grow
`

const constrainStyles = `
  2xl:jn-container
  2xl:jn-mx-auto
`

const constrainWithSideNavStyles = `
  3xl:jn-container
  3xl:jn-mx-auto
`

/** An inner wrapper to constrain page / view content width. */
export const MainContainerInner: React.FC<MainContainerInnerProps> = ({
  children = null,
  fullWidth = false,
  hasSideNav = false,
  className = "",
  ...props
}) => {
  return (
    <div
      className={`
        juno-main-inner
         ${mainInnerStyles}
         ${!fullWidth ? (hasSideNav ? constrainWithSideNavStyles : constrainStyles) : "juno-main-inner-fullwidth"}
         ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export interface MainContainerInnerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The children to render */
  children?: React.ReactNode
  /** Whether the page/view content will stretch over the full width of the viewport or not. Default is `false`. */
  fullWidth?: boolean
  /** Whether the main inner container needs to house a side navigation or not. Do not use, for internal use only. */
  hasSideNav?: boolean
  /** Add a custom class */
  className?: string
}
