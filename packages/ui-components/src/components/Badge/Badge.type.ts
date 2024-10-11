/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// To Do: Externalise? Similar is used in Message component
export type VariantType = "info" | "success" | "warning" | "danger" | "critical" | "error"

export interface BadgeProps {
  /**
   * The semantic variant of the badge that determines its styling, including background and text color (optional).
   */
  variant?: VariantType

  /**
   * If true, an icon corresponding to the variant will be displayed.
   * If a string is provided and it's a valid icon name, that icon will be displayed.
   * This prop is optional.
   */
  icon?: boolean | string

  /**
   * The text content of the badge (optional).
   * If 'children' are provided, they will take precedence over this text.
   */
  text?: string

  /**
   * Additional CSS classes to apply to the badge (optional).
   */
  className?: string

  /**
   * Content to be rendered within the badge (optional).
   * Takes precedence over the 'text' prop, if provided.
   */
  children?: React.ReactNode
}
