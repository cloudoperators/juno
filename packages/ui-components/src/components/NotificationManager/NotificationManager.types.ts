export type ToastMessage = (() => React.ReactNode) | React.ReactNode
export type ToastId = string | number
export type ToastHandler = (_message: ToastMessage, _data?: NotificationOptions) => ToastId

export type ToastVariants = "info" | "success" | "warning" | "error" | "danger"

type ToastAction = {
  label: React.ReactNode
  onClick: () => void
  actionButtonStyle?: React.CSSProperties
}
export type NotificationOptions = {
  id?: ToastId
  duration?: number
  closeButton?: boolean
  dismissible?: boolean
  description?: (() => React.ReactNode) | React.ReactNode
  icon?: React.ReactNode
  richColors?: boolean
  invert?: boolean
  action?: ToastAction | React.ReactNode
  cancel?: ToastAction | React.ReactNode
  onDismiss?: () => void
  onAutoClose?: () => void
  onClick?: () => void
  style?: React.CSSProperties
  className?: string
  descriptionClassName?: string
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center"
}
