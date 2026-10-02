import { ReactNode, HTMLAttributes } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
export type MessageVariantType = "info" | "warning" | "danger" | "error" | "success";
export interface MessageProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Optional title for the message.
     */
    title?: string;
    /**
     * Optional string of text to be rendered as content.
     * Alternatively, content can be passed as children (see below).
     * If children are provided, they will take precedence.
     */
    text?: string;
    /**
     * Specify an optional semantic variant that determines the appearance of a message.
     * @default "info"
     */
    variant?: MessageVariantType;
    /**
     * Optional. If true, the message will have a 'close' button to dismiss it.
     * @default false
     */
    dismissible?: boolean;
    /**
     * Optional. If true, the message will be automatically dismissed after the default or passed autoDismissTimeout.
     * @default false
     */
    autoDismiss?: boolean;
    /**
     * Optional. The timeout in milliseconds after which the message auto-dismisses.
     * By default 10000 (10s).
     * @default 10000
     */
    autoDismissTimeout?: number;
    /**
     * Optional. Pass a handler that will be called when the message is dismissed.
     */
    onDismiss?: () => void;
    /**
     * Pass an optional CSS class to apply to the message.
     * @default ""
     */
    className?: string;
    /**
     * Pass optional React nodes or a collection of React nodes to be rendered as content.
     * Takes precedence over the text property.
     */
    children?: ReactNode;
}
/**
 * The `Message` component displays important information or alerts concerning the content,
 * page state, or the view's purpose, with support for dismissible and auto-dismiss features.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-message--docs
 * @see {@link MessageProps}
 */
export declare const Message: ({ title, variant, dismissible, autoDismiss, autoDismissTimeout, onDismiss, className, ...props }: MessageProps) => ReactNode;
//# sourceMappingURL=Message.component.d.ts.map