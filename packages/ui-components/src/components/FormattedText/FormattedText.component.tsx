/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

const proseStyles = `
  jn-prose
`

export interface FormattedTextProps {
  /** Add custom class name */
  className?: string
  children?: React.ReactNode
}

/**
 * A very basic layout container with padding.
 */
export const FormattedText = ({
  className = "", // Default value for className
  children = null, // Default value for children
  ...props
}: FormattedTextProps) => {
  return (
    <div className={`formatted-text-container ${proseStyles} ${className} `} {...props}>
      {children}
    </div>
  )
}

FormattedText.defaultProps = {
  className: "",
  children: null,
}
