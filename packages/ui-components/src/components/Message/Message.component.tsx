/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useRef } from "react"

import { Icon } from "../Icon"
import { KnownIcons, KnownIconsEnum } from "../Icon/Icon.component"

import { MessageProps, MessageType } from "./Message.types"

// CSS UTILS

export const messageStyles = `
    jn-text-theme-high
    jn-flex
    jn-rounded
    jn-leading-5
    jn-overflow-hidden
    jn-items-center
`

export const messageHeadingStyles = `
    jn-font-bold
`

export const messageContentStyles = `
    jn-py-3
    jn-pr-4
    jn-ml-7
`

export const messageBorderStyles = `
    jn-w-[4px]
    jn-self-stretch
    jn-border-l-4
    jn-mr-6
    jn-shrink-0
`

export const dismissButtonStyles = `
    jn-ml-auto
    jn-self-stretch
    jn-flex
    jn-flex-col
    jn-py-2.5
    jn-pr-2.5
`

export const messageVariantStyles = {
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

export const getBackgroundStyle = (messageVariant: MessageType): string => {
  switch (messageVariant) {
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

export const getVariantStyle = (messageVariant: MessageType): string => {
  switch (messageVariant) {
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

// ICON UTILS

// Type guard to determine if a given string corresponds to a known icon
// To Do: Externalise. Also used in other components e.g. Badge
export const isValidIcon = (icon: string): icon is KnownIcons => {
  // Set of valid icon names
  const validIconNames: Set<KnownIcons> = new Set(Object.values(KnownIconsEnum))
  return validIconNames.has(icon as KnownIcons)
}

// Get the appropriate Material UI icon for a message type
export const getMuiIcon = (messageVariant: MessageType): KnownIcons => {
  if (messageVariant === "error") return "dangerous"
  if (isValidIcon(messageVariant)) return messageVariant
  return "default"
}

// TIMEOUT UTILS

// Initiate auto-dismiss timeout to hide the message after the specified timeout (passed or preconfigured)
export const initiateAutoDismiss = (
  autoDismiss: boolean,
  timeout: number,
  hideMessage: () => void,
  timeoutRef: React.MutableRefObject<number | null>
) => {
  // Ensure that auto-dismiss is enabled and that the value for timeout is valid
  if (!autoDismiss || timeout < 1) return

  // Clear an existing timeout to avoid multiple
  if (timeoutRef.current !== null) {
    clearTimeout(timeoutRef.current)
  }

  // Set a new timeout to hide the message after the specified timeout
  timeoutRef.current = window.setTimeout(() => {
    hideMessage()
  }, timeout) as unknown as number
}

// Clear an existing auto-dismiss timeout and reset the timeout reference
export const clearAutoDismissTimeout = (timeoutRef: React.MutableRefObject<number | null>) => {
  if (timeoutRef.current !== null) {
    clearTimeout(timeoutRef.current)
    timeoutRef.current = null
  }
}

/**
 * The Message component displays contextual messages with various predefined styles for different message types e.g. 'info', 'success' etc.
 * The message can be optionally dismissible, with an auto-dismiss feature that hides the message after a specified timeout.
 * The component can include a title, text, children, and an optional close button.
 */
export const Message: React.FC<MessageProps> = ({
  title = "",
  text = "",
  variant = "info",
  dismissible = false,
  autoDismiss = false,
  autoDismissTimeout = 10000,
  onDismiss,
  className = "",
  children,
  ...props
}) => {
  const [visible, setVisible] = useState<boolean>(true)
  const autoDismissTimeoutRef = useRef<number | null>(null)

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

  return (
    <div
      className={`juno-message juno-message-${variant} ${messageStyles} ${getBackgroundStyle(variant)} ${className}`}
      {...props}
    >
      <div className={`juno-message-border ${messageBorderStyles} ${getVariantStyle(variant)}`}></div>
      <Icon icon={getMuiIcon(variant)} color={`jn-text-theme-${variant}`} className="jn-shrink-0" />
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
