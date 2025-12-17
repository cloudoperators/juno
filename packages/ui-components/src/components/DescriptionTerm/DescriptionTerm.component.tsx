/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode } from "react"
import "./description-term.css"

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
  <dt className={`dt ${className}`}>{children}</dt>
)

export const DT = DescriptionTerm
