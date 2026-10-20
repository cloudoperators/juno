import { ReactNode, HTMLAttributes, FocusEventHandler, ChangeEventHandler } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
/**
 * A component to hold a secret text, e.g. an SSH key, and conceal or reveal as needed.
 * @see https://cloudoperators.github.io/juno/?path=/docs/forms-secrettext--docs
 * @see {@link SecretTextProps}
 */
export declare const SecretText: ({ autoComplete, className, clear, copy, copyConfirmtext, disableClear, disableCopy, disabled, disablePaste, disableToggle, errortext, helptext, id, onBlur, onChange, onClear, onCopy, onFocus, onHide, onPaste, onReveal, onToggle, label, name, paste, placeholder, readOnly, required, reveal, successtext, toggle, valid, invalid, value, wrapperClassName, ...props }: SecretTextProps) => ReactNode;
export interface SecretTextProps extends Omit<HTMLAttributes<HTMLTextAreaElement>, "onCopy" | "onPaste"> {
    /** Whether the secret field should autocomplete. */
    autoComplete?: string;
    /** Pass a custom className to the Secret input field. */
    className?: string;
    /** Whether the Clear button is rendered. */
    clear?: boolean;
    /** Whether the Copy button is rendered. */
    copy?: boolean;
    /** A small text to display for a second to confirm the secret's content was copied to the clipboard. */
    copyConfirmtext?: string;
    /** Disable the Clear button */
    disableClear?: boolean;
    /** Disable the Copy button */
    disableCopy?: boolean;
    /** Whether the Secret's input is disabled. */
    disabled?: boolean;
    /** Disable the Paste button */
    disablePaste?: boolean;
    /** Disable the Hide/Reveal button */
    disableToggle?: boolean;
    /** A small text to display information regarding any errors in the context of the Secret. */
    errortext?: ReactNode;
    /** A small text to display giving more information and context about the Secret. */
    helptext?: ReactNode;
    /** Pass an id  */
    id?: string;
    /** Whether the Secret's content is invalid. */
    invalid?: boolean;
    /** A label to display above the SecretText's textarea. */
    label?: string;
    /** The name of the SecretText's textarea. */
    name?: string;
    /** A handler to execute when the Secret's input area looses focus. */
    onBlur?: FocusEventHandler<HTMLTextAreaElement>;
    /** A handler to execute when the Secret's content changes. */
    onChange?: ChangeEventHandler<HTMLTextAreaElement>;
    /** A handler to execute when the user clears the Secret's content using the Clear button. */
    onClear?: () => void;
    /** A handler to execute when the user copies the Secret's content to the clipboard. */
    onCopy?: (value: string) => void;
    /** A handler to execute when the SecretText textarea receives focus */
    onFocus?: FocusEventHandler<HTMLTextAreaElement>;
    /** A handler to execute when the user hides the Secret's content. */
    onHide?: () => void;
    /** A handler to execute when the user pastes text from the clipboard into the SecretText. */
    onPaste?: (value: string) => void;
    /** A handler to execute when the user reveals the Secret's content. */
    onReveal?: () => void;
    /** A handler to execute when the visibility of the SecretText's content is toggled, i.e. this will be run when the content is revealed and when it is hidden. */
    onToggle?: () => void;
    /** Whether a button to paste text content even in hidden mode is rendered. */
    paste?: boolean;
    /** Pass a placeholder to the SecretText's textarea */
    placeholder?: string;
    /** Whether the SecretText content is read only, i.e. can not be edited..*/
    readOnly?: boolean;
    /** Whether the SecretText is required. Passing `true` will render a small required marker to the label. This will only have an effect when a label is passed, too.  */
    required?: boolean;
    /** Whether the secret's content is revealed / legible. */
    reveal?: boolean;
    /** A small text to display giving information in the context of the secret, e.g. when it was successfully validated or matches specific requirements, etc.  */
    successtext?: ReactNode;
    /** Whether a button to toggle visibility of the SecretText's content should be rendered. */
    toggle?: boolean;
    /** Whether the Secret's content was successfully validated. */
    valid?: boolean;
    /** The value of the SecretText, i.e. the Secret's content.  */
    value?: string;
    /** Pass a className to the outer wrapper element */
    wrapperClassName?: string;
}
//# sourceMappingURL=SecretText.component.d.ts.map