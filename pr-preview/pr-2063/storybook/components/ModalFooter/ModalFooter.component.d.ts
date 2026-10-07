import { ReactNode, MouseEventHandler, HTMLProps } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
import { ButtonVariant } from '../Button/index';
import { KnownIcons } from '../Icon/Icon.component';
/**
 * The `ModalFooter` component is a versatile footer meant for the `Modal`, offering
 * default or customizable confirm and cancel buttons, and an option to pass
 * custom content.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-modal-modalfooter--docs
 * @see {@link ModalFooterProps}
 */
export declare const ModalFooter: ({ className, children, confirmButtonLabel, cancelButtonLabel, confirmButtonIcon, confirmButtonVariant, cancelButtonIcon, disableConfirmButton, disableCancelButton, onConfirm, onCancel, ...props }: ModalFooterProps) => ReactNode;
export interface ModalFooterProps extends HTMLProps<HTMLDivElement> {
    /**
     * A custom className. Useful to configure flex items alignment when passing custom content as children.
     * @default ""
     */
    className?: string;
    /**
     * Custom children content replacing default button structure.
     */
    children?: ReactNode;
    /**
     * The label for the Confirm-button. When passed, the component will render a Confirm button and a cancel button, otherwise the component will ONLY render a Close-Button.
     * @default ""
     */
    confirmButtonLabel?: string;
    /**
     * Custom label for the cancel button. ONLY has an effect if a `confirmButtonLabel` is passed.
     * @default "Close"
     */
    cancelButtonLabel?: string;
    /**
     * Pass an Icon name to show on the confirming action button.
     */
    confirmButtonIcon?: KnownIcons;
    /**
     * The variant of the confirm button.
     * @default "primary"
     */
    confirmButtonVariant?: ButtonVariant;
    /**
     * Pass an icon name to show on the cancelling button.
     */
    cancelButtonIcon?: KnownIcons;
    /**
     * Determines whether the confirm action button should be disabled.
     * @default false
     */
    disableConfirmButton?: boolean;
    /**
     * Determines whether the cancel action button should be disabled.
     * @default false
     */
    disableCancelButton?: boolean;
    /**
     * Handler to execute once the confirming button is clicked.
     */
    onConfirm?: MouseEventHandler<HTMLElement>;
    /**
     * Handler to execute once the cancelling button is clicked.
     */
    onCancel?: MouseEventHandler<HTMLElement>;
}
//# sourceMappingURL=ModalFooter.component.d.ts.map