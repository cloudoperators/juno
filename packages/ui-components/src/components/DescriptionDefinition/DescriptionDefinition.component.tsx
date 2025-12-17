/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode } from "react"
import "./description-definition.css"

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
  <dd className={`dd ${className}`}>{children}</dd>
)

export const DD = DescriptionDefinition
