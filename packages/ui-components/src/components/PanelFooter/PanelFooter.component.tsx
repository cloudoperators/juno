/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode, HTMLAttributes } from "react"

const panelFooterBaseStyles = `
  jn:border-t
  jn:border-t-theme-background-lvl-2
  jn:px-8
  jn:py-4
  jn:flex
  jn:items-center
  jn:justify-end
  jn:gap-3
  jn:w-full
`

export interface PanelFooterProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Additional CSS classes to apply to the panel footer for custom styling.
   */
  className?: string

  /**
   * The content to render inside the panel footer.
   * Typically, this will include buttons or other control elements.
   */
  children?: ReactNode
}

/**
 * The PanelFooter component renders the footer section of a panel.
 * Typically used to contain footer elements like buttons, which can be added to the PanelBody component via its `footer` property.
 * Buttons placed inside will be automatically aligned to the right.
 */
export const PanelFooter: React.FC<PanelFooterProps> = ({ className = "", children, ...props }) => {
  return (
    <div className={`juno-panel-footer ${panelFooterBaseStyles} ${className}`} {...props}>
      {children}
    </div>
  )
}
