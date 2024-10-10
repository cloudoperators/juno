/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export type MessageType = "info" | "warning" | "danger" | "error" | "success"

export interface MessageProps {
  /** Optional message title */
  title?: string
  /** Optional description to render as content. Alternatively, content can be passed as children. */
  text?: string
  /** Optional variant for message appearance e.g. 'success'. Default is 'info'. */
  variant?: MessageType
  /** Optional: If true, the message will have a 'close' button. Default is false. */
  dismissible?: boolean
  /** Optional: If true, the message will auto-dismiss after 10 seconds or the specified autoDismissTimeout. */
  autoDismiss?: boolean
  /** Optional timeout in milliseconds after which the message auto-dismisses. Default is 10000 (10 seconds). */
  autoDismissTimeout?: number
  /** Optional handler function called once the message is dismissed */
  onDismiss?: () => void
  /** Additional class names for message container styling */
  className?: string
  /** Optional child nodes to be rendered as content */
  children?: React.ReactNode
}
