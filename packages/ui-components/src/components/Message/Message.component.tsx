/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useRef } from "react"

import { Icon } from "../Icon"
import { KnownIcons, KnownIconsEnum } from "../Icon/Icon.component"

const messageBaseStyles = `
    jn-text-theme-high
    jn-flex
    jn-rounded
    jn-leading-5
    jn-overflow-hidden
    jn-items-center
`

const messageHeadingStyles = `
    jn-font-bold
`

const messageContentStyles = `
    jn-py-3
    jn-pr-4
    jn-ml-7
`

const messageBorderStyles = `
    jn-w-[4px]
    jn-self-stretch
    jn-border-l-4
    jn-mr-6
    jn-shrink-0
`

const dismissButtonStyles = `
    jn-ml-auto
    jn-self-stretch
    jn-flex
    jn-flex-col
    jn-py-2.5
    jn-pr-2.5
`

const messageVariantStyles = {
  default: `jn-border-theme-message-default`,
  defaultBg: `jn-bg-theme-message-default`,

  error: `jn-border-theme-message-error`,
  errorBg: `jn-bg-theme-message-error`,

  warning: `jn-border-theme-message-warning`,
  warningBg: `jn-bg-theme-message-warning`,

  danger: `jn-border-theme-message-danger`,
  dangerBg: `jn-bg-theme-message-danger`,

  success: `jn-border-theme-message-success`,
  successBg: `jn-bg-theme-message-success`,
}

export type MessageVariantType = "info" | "warning" | "danger" | "error" | "success"

export interface MessageProps extends React.HTMLAttributes<HTMLDivElement> {
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
  variant?: MessageVariantType

  /**
   * Optional. If true, the message will have a 'close' button to dismiss it.
   */
  dismissible?: boolean

  /**
   * Optional. If true, the message will be automatically dismissed after the default or passed autoDismissTimeout.
   */
  autoDismiss?: boolean

  /**
   * Optional. The timeout in milliseconds after which the message auto-dismisses.
   * By default 10000 (10s).
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
   * Pass optional React nodes or a collection of React nodes to be rendered as content.
   * Takes precedence over the text property.
   */
  children?: React.ReactNode
}

const getBackgroundStyle = (variant: MessageVariantType): string => {
  switch (variant) {
    case "error":
      return messageVariantStyles.errorBg
    case "warning":
      return messageVariantStyles.warningBg
    case "success":
      return messageVariantStyles.successBg
    case "info":
      return messageVariantStyles.defaultBg
    case "danger":
      return messageVariantStyles.dangerBg
    default:
      return messageVariantStyles.defaultBg
  }
}

const getVariantStyle = (variant: MessageVariantType): string => {
  switch (variant) {
    case "error":
      return messageVariantStyles.error
    case "warning":
      return messageVariantStyles.warning
    case "success":
      return messageVariantStyles.success
    case "info":
      return messageVariantStyles.default
    case "danger":
      return messageVariantStyles.danger
    default:
      return messageVariantStyles.default
  }
}

// Determine if a given string corresponds to a known icon
const isValidIcon = (icon: string): icon is KnownIcons => {
  const validIconNames: Set<KnownIcons> = new Set(Object.values(KnownIconsEnum))
  return validIconNames.has(icon as KnownIcons)
}

// Get icon for a variant type
const getIcon = (variant: MessageVariantType): KnownIcons => {
  if (variant === "error") return "dangerous"
  if (isValidIcon(variant)) return variant
  return "default"
}

// Initiate auto-dismiss to hide message
const initiateAutoDismiss = (
  autoDismiss: boolean,
  timeout: number,
  hideMessage: () => void,
  timeoutRef: React.MutableRefObject<number | null>
) => {
  // Ensure that auto-dismiss is enabled and that timeout value is valid
  if (!autoDismiss || timeout < 1) return

  // Avoid multiple timeouts
  if (timeoutRef.current !== null) clearTimeout(timeoutRef.current)

  // Set a new timeout to hide message after the specified timeout
  timeoutRef.current = window.setTimeout(() => {
    hideMessage()
  }, timeout) as unknown as number
}

// Clear auto-dismiss timeout, if exists and reset the timeout reference
const clearAutoDismissTimeout = (timeoutRef: React.MutableRefObject<number | null>) => {
  if (timeoutRef.current !== null) {
    clearTimeout(timeoutRef.current)
    timeoutRef.current = null
  }
}

/**
 * A Message holds generally important information to help understand the contents, purpose, or state of a whole page or view.
 * Use sparingly, there should never be two or more subsequent instances of Message as direct siblings/neighbors on an individual view.
 */
export const Message: React.FC<MessageProps> = ({
  title,
  variant = "info",
  dismissible = false,
  autoDismiss = false,
  autoDismissTimeout = 10000,
  onDismiss,
  className = "",
  ...props
}) => {
  const [visible, setVisible] = useState<boolean>(true)
  const autoDismissTimeoutRef = useRef<number | null>(null)
  const { text, children } = props
  const hideMessage = () => {
    setVisible(false)
    onDismiss && onDismiss()
  }

  useEffect(() => {
    // Clear timeout on component unmount
    return () => {
      clearAutoDismissTimeout(autoDismissTimeoutRef)
    }
  }, [])

  useEffect(() => {
    initiateAutoDismiss(autoDismiss, autoDismissTimeout, hideMessage, autoDismissTimeoutRef)
  }, [autoDismiss, autoDismissTimeout])

  if (!visible) return null

  const iconToRender = getIcon(variant)
  const backgroundStyle = getBackgroundStyle(variant)
  const variantStyle = getVariantStyle(variant)

  return (
    <div
      className={`juno-message juno-message-${variant} ${messageBaseStyles} ${backgroundStyle} ${className}`}
      {...props}
    >
      <div className={`juno-message-border ${messageBorderStyles} ${variantStyle}`}></div>
      <Icon icon={iconToRender} color={`jn-text-theme-${variant}`} className="jn-shrink-0" />
      <div className={`juno-message-content ${messageContentStyles}`}>
        {title && <h1 className={messageHeadingStyles}>{title}</h1>}
        <div>{children || text}</div>
      </div>
      {dismissible && (
        <div className={dismissButtonStyles}>
          <Icon
            icon="close"
            onClick={hideMessage}
            className="juno-message-close-button jn-opacity-50 hover:jn-opacity-100"
          />
        </div>
      )}
    </div>
  )
}
