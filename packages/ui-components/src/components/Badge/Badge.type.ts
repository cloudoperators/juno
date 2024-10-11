/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { KnownIcons } from "../Icon/Icon.component"

// To Do: Externalise? Similar is used in Message component
export type VariantType = "default" | "info" | "success" | "warning" | "danger" | "error" | "critical"
export interface BadgeProps {
  /**
   * Specify an optional semantic variant that determines the appearance of a badge.
   */
  variant?: VariantType

  /**
   * Optional.
   * If true, an icon corresponding to the variant will be displayed.
   * If a string is provided and it's a valid icon name, that icon will be displayed.
   */
  icon?: boolean | KnownIcons

  /**
   * Pass an optional string of text to be rendered as content.
   * Alternatively, content can be passed as children (see below).
   * If children are provided, they will take precedence.
   */
  text?: string

  /**
   * Pass an optional CSS class to apply to the message.
   */
  className?: string

  /**
   * Pass optional React nodes or a collection of React nodes to be rendered as content.
   * Takes precedence over the text property.
   */
  children?: React.ReactNode
}
