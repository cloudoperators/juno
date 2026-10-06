import { ReactNode, MouseEvent, HTMLProps, ReactElement, MouseEventHandler } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
import { KnownIcons } from '../Icon/Icon.component';
import { ButtonVariant } from '../Button/index';
/**
 * The `Modal` component provides a flexible dialog window for user interactions,
 * supporting titles, dismissal controls, sizing options, and comprehensive footer configurations.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-modal-modal--docs
 * @see {@link ModalProps}
 */
export declare const Modal: ({ title, heading, ariaLabel, initialFocus, open, closeable, closeOnEsc, closeOnBackdropClick, disableCloseButton, size, unpad, className, children, modalFooter, confirmButtonLabel, cancelButtonLabel, confirmButtonIcon, confirmButtonVariant, cancelButtonIcon, disableConfirmButton, disableCancelButton, onConfirm, onCancel, ...props }: ModalProps) => ReactNode;
type ModalSize = "small" | "large" | "xl" | "2xl";
export interface ModalProps extends Omit<HTMLProps<HTMLDivElement>, "size" | "title"> {
    /**
     * The title of the modal. This will be rendering as the heading of the modal, and the modal's `aria-labelledby` attribute will reference the title/heading element. If the modal does not have `title` or `heading`, use `ariaLabel` to provide an accessible name for the modal.
     */
    title?: ReactNode;
    /**
     * Also the title of the modal, just for API flexibility. If both `title` and `heading` are passed, `title` will take precedence.
     */
    heading?: ReactNode;
    /**
     * The aria-label of the modal. Use only if the modal does NOT have a `title` or `heading`.
     */
    ariaLabel?: string;
    /**
     * By default, the first element in the tab order of the Modal content will be focussed. To specify an element to be focussed when the modal opens, pass an element, DOM node, or selector string.
     */
    initialFocus?: HTMLElement | SVGElement | string;
    /**
     * Whether the modal will be open.
     * @default false
     */
    open?: boolean;
    /**
     * Whether the modal can be closed using an "X"-Button at the top right.
     * @default true
     */
    closeable?: boolean;
    /**
     * Whether the modal should be closed when the backdrop is clicked. Essentially 'un-modals' the modal.
     * @default false
     */
    closeOnBackdropClick?: boolean;
    /**
     * Determines whether the close button should be disabled.
     * @default false
     */
    disableCloseButton?: boolean;
    /**
     * Whether the modal can be closed by hitting the ESC key.
     * @default true
     */
    closeOnEsc?: boolean;
    /**
     * The Modal size, determines the aesthetics of the modal.
     * @default small
     */
    size?: ModalSize;
    /**
     * Pass to remove default padding from the content area of the modal.
     * @default false
     */
    unpad?: boolean;
    /**
     * Custom className to add to the modal for additional styling.
     * @default ""
     */
    className?: string;
    /**
     * The children of the modal. These will be rendered as the modal content. To render custom buttons at the bottom, see `modalFooter` below.
     */
    children?: ReactNode;
    /**
     * Optional. Pass a `<ModalFooter />` component with custom content as required. Will default to using the `<ModalFooter/>` component internally.
     */
    modalFooter?: ReactElement;
    /**
     * Pass a label to render a confirm button and a Cancel button.
     * @default ""
     */
    confirmButtonLabel?: string;
    /**
     * Pass a label for the cancel button. Defaults to "Cancel".
     * @default "Cancel"
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
     * A handler to execute once the modal is confirmed by clicking the confirm button if exists. Note that we do not close the modal automatically.
     */
    onConfirm?: MouseEventHandler<HTMLElement>;
    /**
     * A handler to execute once the modal is cancelled or dismissed using the x-Close button,  Cancel-button or pressing ESC.
     */
    onCancel?: (_event: MouseEvent<HTMLElement> | KeyboardEvent) => void;
}
export {};
//# sourceMappingURL=Modal.component.d.ts.map