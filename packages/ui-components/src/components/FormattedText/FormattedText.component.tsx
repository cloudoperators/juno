/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import "./formatted-text.css"

export interface FormattedTextProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Custom CSS class name for styling the formatted text container.
   * @default ""
   */
  className?: string

  /** Rendering content within the formatted text container. */
  children?: React.ReactNode
}

/**
 * The `FormattedText` component provides a container for stylized text.
 * It supports custom content and additional styling through class names.
 *
 * @component
 * @param {string} [className] Custom CSS class names for styling the container. Defaults to an empty string.
 * @param {React.ReactNode} [children] Content to be rendered within the formatted text container.
 * @returns {React.ReactElement} A container for formatted text with customizable styles.
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
