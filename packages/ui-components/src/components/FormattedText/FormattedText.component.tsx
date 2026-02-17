/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { HTMLAttributes, ReactNode } from "react"
import "./formatted-text.css"

export interface FormattedTextProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Custom CSS class name for styling the formatted text container.
   * @default ""
   */
  className?: string

  /** Rendering content within the formatted text container. */
  children?: ReactNode
}

/**
 * The `FormattedText` component provides a container for stylized text.
 * It supports custom content and additional styling through class names.
 */
export const FormattedText = ({
  className = "", // Default value for className
  children, // Default value for children
  ...props
}: FormattedTextProps): ReactNode => {
  return (
    <div className={`formatted-text-container ${className} `} {...props}>
      {children}
    </div>
  )
}
