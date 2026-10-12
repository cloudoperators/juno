import { ReactNode, HTMLProps, ChangeEventHandler, FocusEventHandler } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
/**
 * A controlled Text Input.
 * Also covers email, telephone, password, URL derivatives.
 * @see https://cloudoperators.github.io/juno/?path=/docs/forms-textarea--docs
 * @see {@link TextareaProps}
 */
export declare const Textarea: ({ name, value, id, placeholder, disabled, readOnly, required, invalid, valid, autoFocus, className, autoComplete, helptext, successtext, errortext, onChange, onFocus, onBlur, label, width, wrapperClassName, ...props }: TextareaProps) => ReactNode;
type WidthType = "full" | "auto";
export interface TextareaProps extends HTMLProps<HTMLTextAreaElement> {
    /** Pass a name attribute */
    name?: string;
    /** The label of the textarea */
    label?: string;
    /** Pass a value */
    value?: string | number;
    /** Pass an id */
    id?: string;
    /** Pass a placeholder */
    placeholder?: string;
    /** Render a disabled input */
    disabled?: boolean;
    /** Render a readonly input */
    readOnly?: boolean;
    /** Whether the field is required */
    required?: boolean;
    /** Whether the field is invalid */
    invalid?: boolean;
    /** Whether the field is valid */
    valid?: boolean;
    /** Whether the field receives autofocus */
    autoFocus?: boolean;
    /** Pass a classname. The class name is applied to the internal textarea element. */
    className?: string;
    /** Pass a valid autocomplete value. We do not police validity. */
    autoComplete?: string;
    /** Pass a change handler */
    onChange?: ChangeEventHandler<HTMLTextAreaElement>;
    /** Pass a focus handler */
    onFocus?: FocusEventHandler<HTMLTextAreaElement>;
    /** Pass a blur handler */
    onBlur?: FocusEventHandler<HTMLTextAreaElement>;
    /** A helptext to render to explain meaning and significance of the Textarea */
    helptext?: ReactNode;
    /** A text to render when the Textarea was successfully validated */
    successtext?: ReactNode;
    /** A text to render when the Textarea has an error or could not be validated */
    errortext?: ReactNode;
    /** The width of the textarea. Either 'full' (default) or 'auto'. */
    width?: WidthType;
    /** Pass a custom className to the wrapping element. This can be useful if you must add styling to the outermost wrapping element of this component, e.g. for positioning. */
    wrapperClassName?: string;
}
export {};
//# sourceMappingURL=Textarea.component.d.ts.map