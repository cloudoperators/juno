/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react"
import { Icon } from "../Icon/index"

const toastStyles = `
    jn:bg-theme-background-lvl-1
    jn:text-theme-high 
    jn:inline-flex	
    jn:items-start
    jn:p-2
    jn:mb-8
    jn:rounded
`
const toastStylesText = `
    jn:mx-4
    jn:max-w-full
`

// get the appropriate icon for messasge tyope by MUI name:
const getMuiIcon = (messageType: IconType) => {
  switch (messageType) {
    case "error":
      return "dangerous"
    default:
      return messageType
  }
}
type IconType = "info" | "warning" | "danger" | "error" | "success"
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Specify a semantic variant */
  variant?: IconType
  /** Pass child nodes to be rendered as contents */
  children?: React.ReactNode
  /** Pass an optional text */
  text?: string
  /** Optional. If set to 'true', the message will be automatically dismissed after 10 seconds by default or after the specified autoDismissTimeout */
  autoDismiss?: boolean
  /** Optional. Timeout in miliseconds after which the message is automatically dismissed. By default 10000 (10s).*/
  autoDismissTimeout?: number
  /** Optional. Pass a handler that will be called when the message is dismissed */
  onDismiss?: () => void
  /** Pass an optional className */
  className?: string
}

/**
A Toast component. Use for short-lived, temporary/transient messaging to users relating to their current usage context, e.g. 'Edits changed successfully'. For more general, persistent messaging, e.g. 'Our servers will be down for maintenance all weekend', use Message instead.
*/

export const Toast: React.FC<ToastProps> = ({
  variant = "info",
  children,
  text = "",
  autoDismiss = false,
  autoDismissTimeout = 10000,
  onDismiss,
  className = "",
  ...props
}) => {
  const [visible, setVisible] = useState(true)

  // ----- Timeout stuff -------
  const timeoutRef = React.useRef(setTimeout(() => hideMessage(), autoDismissTimeout))

  React.useEffect(() => {
    return () => clearTimeout(timeoutRef.current) // clear when component is unmounted
  }, [])

  // if autoDissmiss is true, hide message after passed or preconfigured timeout
  useEffect(() => {
    if (autoDismiss) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => hideMessage(), autoDismissTimeout)
    }
  }, [autoDismiss, autoDismissTimeout])

  const hideMessage = () => {
    setVisible(false)
    // call the callback dismiss message (if any)
    onDismiss && onDismiss()
  }

  return (
    <>
      {visible && (
        <div className={`juno-toast juno-toast-${variant} ${toastStyles} ${className}`} {...props}>
          <Icon icon={getMuiIcon(variant)} color={"jn-text-theme-" + variant} className="jn:shrink-0" />
          <div className={`juno-toast-text ${toastStylesText}`}>{children ? children : text}</div>
          <Icon
            icon="close"
            onClick={hideMessage}
            className="juno-message-close-button jn:opacity-50 jn:hover:opacity-100 jn:shrink-0"
          />
        </div>
      )}
    </>
  )
}
