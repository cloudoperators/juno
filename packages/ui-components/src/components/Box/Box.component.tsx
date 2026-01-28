/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

const boxStyles = `
  jn:text-sm
  jn:rounded
  jn:bg-theme-box-default
  jn:border
  jn:border-theme-box-default
`

// When adjusting the padding, make sure to update the tests to verify Box variations with and without padding correctly.
const boxPadding = `
  jn:py-1
  jn:px-2
`

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The child elements to be rendered inside the Box.
   */
  children?: React.ReactNode

  /**
   * Determines whether the Box should render without padding.
   * When true, padding is removed.
   * @default false
   */
  unpad?: boolean

  /**
   * Additional CSS classes to apply to the Box component.
   * @default ""
   */
  className?: string
}

/**
 * The `Box` component is a versatile container with optional padding and a subtle border.
 * It is perfect for annotations, supplementary explanations, and remarks where more visually
 * pronounced components like a MessageBox or InfoBox would be excessive.
 * This component typically displays small text but can contain any child elements as required.
 *
 * @component
 * @param {React.ReactNode} [children] Content to be rendered within the Box.
 * @param {boolean} [unpad=false] If true, padding is removed from the Box.
 * @param {string} [className=""] Custom class names for additional styling of the Box.
 * @returns {React.ReactElement} A flexible Box component with optional padding.
 */
export const Box: React.FC<BoxProps> = ({ children, unpad = false, className = "", ...props }) => {
  const combinedClassName = `juno-box ${boxStyles} ${!unpad ? boxPadding : ""} ${className}`
  return (
    <div className={combinedClassName} {...props}>
      {children}
    </div>
  )
}
