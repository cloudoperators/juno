/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

const cardStyles = `
  jn:text-sm
  jn:rounded-lg
  jn:bg-theme-card-default
  jn:border
  jn:border-theme-card-default
  jn:shadow-juno-box-default
`

const cardPadding = "jn:p-4"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Components or elements to be rendered as content.
   */
  children?: React.ReactNode
  /**
   * Optional padding.
   */
  padding?: boolean
  /**
   * Additional CSS styles.
   */
  className?: string
}

/**
 * A generic Card component with optional padding.
 */
export const Card: React.FC<CardProps> = ({ children, padding = false, className = "", ...props }) => {
  const combinedClassName = `juno-card ${cardStyles} ${padding ? cardPadding : ""} ${className}`
  return (
    <div className={combinedClassName} {...props}>
      {children}
    </div>
  )
}
