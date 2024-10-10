/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useRef } from "react"

import { Icon } from "../Icon"

import { MessageProps } from "./Message.types"
import { getMuiIcon } from "./utils/iconUtils"
import { initiateAutoDismiss, clearAutoDismissTimeout } from "./utils/timeoutUtils"
import {
  messageStyles,
  messageBorderStyles,
  messageContentStyles,
  messageHeadingStyles,
  dismissButtonStyles,
  getBackgroundClass,
  getVariantClass,
} from "./utils/cssUtils"

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
    // Clean timeout on component unmount
    return () => {
      clearAutoDismissTimeout(autoDismissTimeoutRef)
    }
  }, [])

  // Hide message after passed or preconfigured timeout if autoDismiss is true
  useEffect(() => {
    initiateAutoDismiss(autoDismiss, autoDismissTimeout, hideMessage, autoDismissTimeoutRef)
  }, [autoDismiss, autoDismissTimeout])

  if (!visible) return null

  return (
    <div
      className={`juno-message juno-message-${variant} ${messageStyles} ${getBackgroundClass(variant)} ${className}`}
      {...props}
    >
      <div className={`juno-message-border ${messageBorderStyles} ${getVariantClass(variant)}`}></div>
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
