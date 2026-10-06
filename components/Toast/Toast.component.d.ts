import { default as React, HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
export type ToastVariant = "info" | "warning" | "danger" | "error" | "success";
export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
    /** Specify a semantic variant */
    variant?: ToastVariant;
    /** Pass child nodes to be rendered as contents */
    children?: ReactNode;
    /** Pass an optional text */
    text?: string;
    /** Pass a handler that will be called when the close button is clicked */
    onDismiss?: () => void;
    /** Pass an optional className */
    className?: string;
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
export declare const Toast: ({ variant, children, text, onDismiss, className, ...props }: ToastProps) => React.JSX.Element;
//# sourceMappingURL=Toast.component.d.ts.map