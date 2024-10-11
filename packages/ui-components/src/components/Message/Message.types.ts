/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// To Do: Externalise? Similar is used in Badge component
export type MessageType = "info" | "warning" | "danger" | "error" | "success"

export interface MessageProps {
  /**
   * Pass an optional title.
   */
  title?: string

  /**
   * Pass an optional string of text to be rendered as content.
   * Alternatively, content can be passed as children (see below).
   * If children are provided, they will take precedence.
   */
  text?: string

  /**
   * Specify an optional semantic variant that determines the appearance of a message.
   */
  variant?: MessageType

  /**
   * Optional. If true, the message will have a 'close' button to dismiss it (optional).
   */
  dismissible?: boolean

  /**
   * Optional. If true, the message will be automatically dismissed after the default (10 seconds) or passed autoDismissTimeout.
   */
  autoDismiss?: boolean

  /**
   * Optional. The timeout in milliseconds after which the message auto-dismisses (optional).
   * By default 10000ms (10s).
   */
  autoDismissTimeout?: number

  /**
   * Optional. Pass a handler that will be called when the message is dismissed.
   */
  onDismiss?: () => void

  /**
   * Pass an optional CSS class to apply to the message.
   */
  className?: string

  /**
   * Pass optional child nodes to be rendered as content.
   * Takes precedence over the text property.
   */
  children?: React.ReactNode

  /**
   * Additional arbitrary props.
   */
  [key: string]: any
}
