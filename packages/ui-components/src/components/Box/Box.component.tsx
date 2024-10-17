/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

const boxStyles = `
  jn-text-sm
  jn-rounded
  jn-bg-theme-box-default
  jn-border
  jn-border-theme-box-default
`

// When adjusting the padding, make sure to update the tests to verify both padded and unpadded Box variations correctly.
const boxPadding = `
  jn-py-1
  jn-px-2
`

export interface BoxProps {
  /**
   * Child elements to be rendered inside the Box.
   */
  children?: React.ReactNode
  /**
   * If true, padding is removed.
   */
  unpad?: boolean
  /**
   * Additional CSS styles to apply to the Box.
   */
  className?: string
}

/**
 * A generic Box component with optional padding and a light border.
 * Ideal for annotations, additional explanations, and remarks where a Message or InfoBox would be too visually emphasized.
 * Typically used for small text but can contain any child elements, as required.
 */
export const Box: React.FC<BoxProps> = ({ children = null, unpad = false, className = "", ...props }) => {
  const combinedClassName = `juno-box ${boxStyles} ${!unpad ? boxPadding : ""} ${className}`
  return (
    <div className={combinedClassName} {...props}>
      {children}
    </div>
  )
}
