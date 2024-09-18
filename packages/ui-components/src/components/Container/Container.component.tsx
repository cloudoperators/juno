/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

const containerStyles = (px: boolean, py: boolean) => {
  return `
    ${px ? "jn-px-6 " : " "} 
    ${py ? " jn-py-6" : ""}
  `
}

/**
 * A very basic layout container with padding.
 */
export const Container = ({ px = true, py = false, className = "", children = null, ...props }: ContainerProps) => {
  return (
    <div className={`juno-container ${containerStyles(px, py)} ${className}`} {...props}>
      {children}
    </div>
  )
}

export interface ContainerProps {
  /** Choose false if you don't want horizontal padding to be added. */
  px?: boolean
  /** Set to true to add vertical padding. */
  py?: boolean
  /** Add custom class name */
  className?: string
  children?: React.ReactNode
}
