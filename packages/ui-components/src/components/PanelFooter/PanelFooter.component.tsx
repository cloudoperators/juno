/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

const panelFooterClasses = `
  jn-border-t
  jn-border-t-theme-background-lvl-2
  jn-px-8
  jn-py-4
  jn-flex
  jn-items-center
  jn-justify-end
  jn-gap-3
  jn-w-full
`

export interface PanelFooterProps {
  /** Add custom class name */
  className?: string
  children?: any
}

/**
 * The panel footer component. You can drop buttons in here and they will automatically be aligned correctly to the right.
 */
export const PanelFooter: React.FC<PanelFooterProps> = ({ className = "", children, ...props }) => {
  return (
    <div className={`juno-panel-footer ${panelFooterClasses} ${className}`} {...props}>
      {children}
    </div>
  )
}
