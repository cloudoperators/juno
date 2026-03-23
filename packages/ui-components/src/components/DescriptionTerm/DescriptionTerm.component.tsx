/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode } from "react"

const baseStyles = `
jn:grid 
jn:items-start 
jn:border-b 
jn:border-theme-default
jn:bg-dt-background
jn:text-dt-text
jn:font-bold
jn:gap-y-[0.25rem]
jn:whitespace-nowrap 
jn:p-2
jn:col-span-1
jn:group-[.align-right]:text-right 
jn:group-[.align-left]:text-left
`

export interface DescriptionTermProps {
  /**
   * Content to be displayed as the term, which could be simple text or any ReactNode, providing semantic meaning to the associated description.
   */
  children: ReactNode
  /**
   * Custom class names to apply additional styling to the <dt> element, useful for overrides or custom styles.
   */
  className?: string
}

/**
 * Represents a term in a description list, rendering an HTML <dt> element.
 * Used to denote terms, headers, or keys in a semantic way, allowing for flexible styling.
 */
export const DescriptionTerm: React.FC<DescriptionTermProps> = ({ children, className = "" }) => (
  <dt className={`dt ${baseStyles} ${className}`}>{children}</dt>
)

export const DT = DescriptionTerm
