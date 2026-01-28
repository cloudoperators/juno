/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

const containerStyles = (px: boolean, py: boolean) => {
  return `
    ${px ? "jn:px-6 " : " "} 
    ${py ? " jn:py-6" : ""}
  `
}

/**
 * The `Container` component serves as a basic layout container with configurable padding options,
 * providing structure and spacing within layouts.
 *
 * @component
 * @param {boolean} [px] Whether horizontal padding should be applied. The default is `true`.
 * @param {boolean} [py] Whether vertical padding should be applied. The default is `false`.
 * @param {string} [className] Additional CSS classes for styling the container. Defaults to an empty string.
 * @param {React.ReactNode} [children] Content to render inside the container.
 * @returns {React.ReactElement} A padded container for content layout.
 */
export const Container: React.FC<ContainerProps> = ({ px = true, py = false, className = "", children, ...props }) => {
  return (
    <div className={`juno-container ${containerStyles(px, py)} ${className}`} {...props}>
      {children}
    </div>
  )
}

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Specifies whether horizontal padding should be added.
   * @default true
   */
  px?: boolean

  /**
   * Specifies whether vertical padding should be added.
   * @default false
   */
  py?: boolean

  /** Additional custom class names for styling the container.
   * @default ""
   */
  className?: string

  /** Elements or components to render within the Container. */
  children?: React.ReactNode
}
