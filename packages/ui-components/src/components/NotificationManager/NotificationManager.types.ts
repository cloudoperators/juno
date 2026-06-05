/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import type { CSSProperties, ReactNode } from "react"
import { toast as sonnerToast } from "sonner"

export type ToastMessage = (() => ReactNode) | ReactNode
type ToastId = string | number
export type ToastHandler = (_message: ToastMessage, _data?: NotificationOptions) => ToastId

export type ToastVariants = "info" | "success" | "warning" | "error" | "danger"
export type ToastPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center"

type ToastAction = {
  label: ReactNode
  onClick: () => void
  actionButtonStyle?: CSSProperties
}
export type NotificationOptions = {
  id?: ToastId
  toasterId?: string
  duration?: number
  closeButton?: boolean
  dismissible?: boolean
  description?: (() => ReactNode) | ReactNode
  action?: ToastAction | ReactNode
  cancel?: ToastAction | ReactNode
  onDismiss?: () => void
  onAutoClose?: () => void
  onClick?: () => void
  style?: CSSProperties
  className?: string
  descriptionClassName?: string
  position?: ToastPosition
}

export type NotificationToast = ToastHandler &
  Omit<typeof sonnerToast, "info" | "success" | "warning" | "error"> & {
    info: ToastHandler
    success: ToastHandler
    warning: ToastHandler
    error: ToastHandler
    danger: ToastHandler
  }

export type SonnerCustomToast = (_content: (_id: ToastId) => ReactNode, _options?: NotificationOptions) => ToastId

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
export const customToast = (sonnerToast as any).custom as SonnerCustomToast
