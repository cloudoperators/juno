/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// To Do: Externalise? Similar is used in Badge component
export type MessageType = "info" | "success" | "warning" | "danger" | "error"

export interface MessageProps {
  /**
   * The title of the message (optional).
   */
  title?: string

  /**
   * The main text content of the message (optional). If 'children' are provided, they will take precedence over this text.
   */
  text?: string

  /**
   * The semantic variant of the message that determines its appearance e.g. 'success', 'error' etc. (optional).
   */
  variant?: MessageType

  /**
   * If true, the message will include a 'close' button to dismiss it (optional).
   */
  dismissible?: boolean

  /**
   * If true, the message will automatically dismiss after 10 seconds or the specified autoDismissTimeout (optional).
   */
  autoDismiss?: boolean

  /**
   * The timeout in milliseconds after which the message auto-dismisses (optional).
   * Defaults to 10 seconds.
   */
  autoDismissTimeout?: number

  /**
   * Handler function that is called once the message is dismissed (optional).
   */
  onDismiss?: () => void

  /**
   * Additional CSS classes to apply to the message (optional).
   */
  className?: string

  /**
   * Content to be rendered within the message (optional).
   * Takes precedence over the 'text' prop, if provided.
   */
  children?: React.ReactNode

  /**
   * Additional arbitrary props to pass to the message container.
   */
  [key: string]: any
}
