import { CSSProperties, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
import { toast as sonnerToast, ToastT } from 'sonner';
import { ToastVariant } from '../Toast';
export type ToastMessage = (() => ReactNode) | ReactNode;
export type ToastId = string | number;
export type ToastHandler = (_message: ToastMessage, _data?: NotificationOptions) => ToastId;
export type { ToastVariant };
export type ToastPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center";
export type NotificationOptions = {
    id?: ToastId;
    toasterId?: string;
    duration?: number;
    dismissible?: boolean;
    description?: (() => ReactNode) | ReactNode;
    onDismiss?: (_toast: ToastT) => void;
    onAutoClose?: (_toast: ToastT) => void;
    onClick?: () => void;
    style?: CSSProperties;
    className?: string;
    descriptionClassName?: string;
    position?: ToastPosition;
};
export type NotificationToast = ToastHandler & Omit<typeof sonnerToast, "info" | "success" | "warning" | "error"> & {
    info: ToastHandler;
    success: ToastHandler;
    warning: ToastHandler;
    error: ToastHandler;
    danger: ToastHandler;
};
export type SonnerCustomToast = (_content: (_id: ToastId) => ReactNode, _options?: NotificationOptions) => ToastId;
export declare const customToast: SonnerCustomToast;
//# sourceMappingURL=NotificationManager.types.d.ts.map