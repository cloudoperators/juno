/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { HTMLAttributes, ReactNode } from "react"
import { Icon } from "../Icon/index"

const toastStyles = `
    jn:bg-theme-background-lvl-1
    jn:text-theme-high
    jn:inline-flex
    jn:items-start
    jn:p-2
    jn:rounded
`
const toastStylesText = `
    jn:mx-4
    jn:max-w-full
`

// get the appropriate icon for message type by MUI name:
const getMuiIcon = (variant: ToastVariant) => {
  switch (variant) {
    case "error":
      return "dangerous"
    default:
      return variant
  }
}
export type ToastVariant = "info" | "warning" | "danger" | "error" | "success"
export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  /** Specify a semantic variant */
  variant?: ToastVariant
  /** Pass child nodes to be rendered as contents */
  children?: ReactNode
  /** Pass an optional text */
  text?: string
  /** Pass a handler that will be called when the close button is clicked */
  onDismiss?: () => void
  /** Pass an optional className */
  className?: string
}

/**
 * A purely presentational Toast component. Renders toast content with semantic
 * styling and icons. All lifecycle logic (timers, auto-dismiss, queueing) is
 * delegated to NotificationManager.
 *
 * Use NotificationManager with the toast() API for handling notifications.
 *
 * @see NotificationManager - Handles all toast lifecycle and queueing
 * @see https://cloudoperators.github.io/juno/?path=/docs/wip-toast--docs
 * @see {@link ToastProps}
 */
export const Toast = ({ variant = "info", children, text = "", onDismiss, className = "", ...props }: ToastProps) => (
  <div className={`juno-toast juno-toast-${variant} ${toastStyles} ${className}`} {...props}>
    <Icon icon={getMuiIcon(variant)} color={"jn:text-theme-" + variant} className="jn:shrink-0" />
    <div className={`juno-toast-text ${toastStylesText}`}>{children ? children : text}</div>
    {onDismiss && (
      <Icon
        icon="close"
        onClick={onDismiss}
        className="juno-message-close-button jn:opacity-50 jn:hover:opacity-100 jn:shrink-0"
      />
    )}
  </div>
)
