/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode, HTMLAttributes } from "react"

const bodyContentStyles = `
  jn-px-8
  jn-py-4
`

export interface PanelBodyProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Additional CSS classes to apply to the panel body for custom styling.
   */
  className?: string

  /**
   * The content to be rendered inside the panel body.
   * Typically, this will include form elements and other interactive content.
   */
  children?: ReactNode

  /**
   * Optional footer component to be rendered below the main content.
   * The footer can include buttons or other control elements.
   */
  footer?: React.ReactElement
}

/**
 * A PanelBody component is used to encapsulate the main content of a panel.
 * The primary content for the panel, such as forms or information, is rendered here.
 */
export const PanelBody: React.FC<PanelBodyProps> = ({ className = "", footer, children, ...props }) => {
  return (
    <div className={`juno-panel-body ${className}`} {...props}>
      <div className={`juno-panel-body-content ${bodyContentStyles}`}>{children}</div>
      {footer}
    </div>
  )
}
