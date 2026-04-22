/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export type ToastMessage = (() => React.ReactNode) | React.ReactNode
export type ToastId = string | number
export type ToastHandler = (_message: ToastMessage, _data?: NotificationOptions) => ToastId

export type ToastVariants = "info" | "success" | "warning" | "error" | "danger"
export type ToastPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center"

type ToastAction = {
  label: React.ReactNode
  onClick: () => void
  actionButtonStyle?: React.CSSProperties
}
export type NotificationOptions = {
  id?: ToastId
  toasterId?: string
  duration?: number
  closeButton?: boolean
  dismissible?: boolean
  description?: (() => React.ReactNode) | React.ReactNode
  action?: ToastAction | React.ReactNode
  cancel?: ToastAction | React.ReactNode
  onDismiss?: () => void
  onAutoClose?: () => void
  onClick?: () => void
  style?: React.CSSProperties
  className?: string
  descriptionClassName?: string
  position?: ToastPosition
}
