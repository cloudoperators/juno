/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import Loading from "./loading-indicator.svg"

export interface LoadingIndicatorProps {
  /**
   * The size of the LoadingIndicator in pixels.
   * If a string, non-numeric characters will be ignored.
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
   * Additional CSS classes to apply to the LoadingIndicator for custom styling.
   */
  className?: string
}

/**
 * A CCloud-branded loading indicator.
 * Use this to indicate that a full page, a significant portion of a page, or a panel is loading.
 * For more generic use cases, including individual components and micro-interactions, use the Spinner component instead.
 */
export const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
  size = 96,
  color = "",
  className = "",
  ...props
}) => {
  // Remove non-numeric characters
  const sanitizedSize = typeof size === "number" ? size : size.replace(/\D/g, "")

  return (
    <Loading
      width={sanitizedSize}
      height={sanitizedSize}
      className={`${className} ${color}`}
      role="progressbar"
      alt="Loading indicator"
      {...props}
    />
  )
}
