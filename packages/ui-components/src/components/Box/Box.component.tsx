/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { HTMLAttributes, ReactNode } from "react"

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

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The child elements to be rendered inside the Box.
   */
  children?: ReactNode

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
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-box--docs
 * @see {@link BoxProps}
 */
export const Box = ({ children, unpad = false, className = "", ...props }: BoxProps): ReactNode => {
  const combinedClassName = `juno-box ${boxStyles} ${!unpad ? boxPadding : ""} ${className}`
  return (
    <div className={combinedClassName} {...props}>
      {children}
    </div>
  )
}
