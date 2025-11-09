/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import "./formatted-text.css"

export interface FormattedTextProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Add custom class name */
  className?: string
  children?: React.ReactNode
}

/**
 * A very basic layout container with padding.
 */
export const FormattedText: React.FC<FormattedTextProps> = ({
  className = "", // Default value for className
  children, // Default value for children
  ...props
}) => {
  return (
    <div className={`formatted-text-container ${className} `} {...props}>
      {children}
    </div>
  )
}
