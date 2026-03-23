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
  jn:bg-dd-background
  jn:text-dd-text
  jn:p-2
  jn:col-span-3
`

export interface DescriptionDefinitionProps {
  /**
   * Content to be displayed as the description, accommodating text or more complex nodes to explain or define the associated term.
   */
  children: ReactNode
  /**
   * Additional class names for applying custom styles or overriding default styles on the <dd> element.
   */
  className?: string
}

/**
 * Represents the definition or description in a description list, rendering as an HTML <dd> element.
 * Pairs with DescriptionTerm to complete the term-description association, offering flexible content styling.
 */
export const DescriptionDefinition: React.FC<DescriptionDefinitionProps> = ({ children, className = "" }) => (
  <dd className={`dd ${baseStyles} ${className}`}>{children}</dd>
)

export const DD = DescriptionDefinition
