/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export type MessageType = "info" | "warning" | "danger" | "error" | "success"

export interface MessageProps {
  /** Message title (optional) */
  title?: string
  /** Description to render as content (optional). Alternatively, content can be passed as children. */
  text?: string
  /** Variant for message appearance e.g. 'success' (optional) */
  variant?: MessageType
  /** If true, the message will have a 'close' button (optional) */
  dismissible?: boolean
  /** If true, the message will auto-dismiss after 10 seconds or the specified autoDismissTimeout (optional) */
  autoDismiss?: boolean
  /** Timeout in milliseconds after which the message auto-dismisses (optional). Default is 10 seconds. */
  autoDismissTimeout?: number
  /** Handler function called once the message is dismissed (optional) */
  onDismiss?: () => void
  /** Additional class names for message container styling (optional) */
  className?: string
  /** Child nodes to be rendered as content (optional) */
  children?: React.ReactNode
}
