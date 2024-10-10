/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export type MessageType = "info" | "warning" | "danger" | "error" | "success"

export interface MessageProps {
  /** An optional title */
  title?: string
  /** An optional string of text to render as content. Alternatively, pass content as children. */
  text?: string
  /** An optional semantic variant for the message appearance */
  variant?: MessageType
  /** Optional: If true, the message will have a 'close' button to dismiss. */
  dismissible?: boolean
  /** Optional: If true, the message will auto-dismiss after 10 seconds or the specified autoDismissTimeout. */
  autoDismiss?: boolean
  /** An optional timeout in milliseconds after which the message auto-dismisses. Default is 10000 (10 seconds). */
  autoDismissTimeout?: number
  /** An optional handler called when the message is dismissed */
  onDismiss?: () => void
  /** Additional class names for the message container */
  className?: string
  /** Optional child nodes to be rendered as content */
  children?: React.ReactNode
}
