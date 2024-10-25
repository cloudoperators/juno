/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import Loading from "./loading-indicator.svg"

export interface LoadingIndicatorProps {
  /**
   * The size of the LoadingIndicator in pixels.
   * Must be a positive number value.
   * If a string, must be a valid number
   */
  size?: string | number
  /**
   * A custom class that can be applied to change the color of the LoadingIndicator.
   * By default, the LoadingIndicator will use the color of the current context.
   * To use a different color, pass a text color class. These classes generally begin with "jn-text-".
   * Additionally, you can pass any other class that contains a "color:" CSS declaration.
   */
  color?: string
  /**
   * Additional CSS classes for custom styling.
   */
  className?: string
}

const defaultSize = 96

/**
 * Use this loading indicator to indicate that a full page, a significant portion of a page, or a panel is loading.
 * For more generic use cases, including individual components and micro-interactions, use the Spinner component instead.
 */

export const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
  size = defaultSize,
  color = "",
  className = "",
  ...props
}) => {
  // Remove non-numeric characters
  const sanitizedSize = typeof size === "number" ? size : parseInt(size)
  // Default size if NaN, zero, or negative
  const finalSize = isNaN(sanitizedSize) || sanitizedSize <= 0 ? defaultSize : sanitizedSize

  return (
    <Loading
      width={finalSize}
      height={finalSize}
      className={`${className} ${color}`}
      role="progressbar"
      alt="Loading indicator"
      {...props}
    />
  )
}
