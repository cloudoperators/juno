/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

const panelBodyClasses = `
  
`

const bodyContentClasses = `
  jn-px-8
  jn-py-4
`

export interface PanelBodyProps {
  /** Add custom class name */
  className?: string
  children?: any
  /** optional footer component */
  footer?: React.ReactElement
}

/**
 * The panel body component. The main (form) content for the panel goes here.
 */
export const PanelBody = ({ className = "", footer, children, ...props }: PanelBodyProps) => {
  return (
    <div className={`juno-panel-body ${panelBodyClasses}  ${className}`} {...props}>
      <div className={`juno-panel-body-content ${bodyContentClasses}`}>{children}</div>

      {footer}
    </div>
  )
}
