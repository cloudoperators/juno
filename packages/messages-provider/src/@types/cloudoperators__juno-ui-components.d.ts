declare module "@cloudoperators/juno-ui-components" {
  // @cloudoperators/juno-ui-components#Message component
  // is not typescripted yet, so we need to define it here
  interface MessageProps {
    role?: string
    text?: string
    variant: "error" | "info" | "danger" | "success" | "warning"
    title?: string
    dismissible?: boolean
    autoDismiss?: boolean
    autoDismissTimeout?: number
    onDismiss?: () => void
    className?: string
    children?: React.ReactNode
  }

  export const Message: React.FC<MessageProps>
}
