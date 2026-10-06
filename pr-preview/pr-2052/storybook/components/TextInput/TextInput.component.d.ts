import { ReactNode, ChangeEventHandler, FocusEventHandler, InputHTMLAttributes } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
/**
 * A controlled Text Input.
 * Also covers email, telephone, password, URL derivatives.
 * @see https://cloudoperators.github.io/juno/?path=/docs/forms-textinput--docs
 * @see {@link TextInputProps}
 */
export declare const TextInput: ({ value, id, name, placeholder, disabled, readOnly, required, invalid, valid, autoFocus, className, autoComplete, helptext, successtext, errortext, onChange, onFocus, onBlur, type, label, width, wrapperClassName, ...props }: TextInputProps) => ReactNode;
type TextInputType = "text" | "email" | "password" | "tel" | "url" | "number";
type TextInputWidth = "full" | "auto";
export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    /** Pass a name attribute */
    name?: string;
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
    /** Pass a classname. The class name is applied to the internal input element. */
    className?: string;
    /** Pass a valid autocomplete value. We do not police validity. */
    autoComplete?: string;
    /** Pass a change handler */
    onChange?: ChangeEventHandler<HTMLInputElement>;
    /** Pass a focus handler */
    onFocus?: FocusEventHandler<HTMLInputElement>;
    /** Pass a blur handler */
    onBlur?: FocusEventHandler<HTMLInputElement>;
    /** Specify the type attribute. Defaults to an input with no type attribute, which in turn will be treateas as type="text" by browsers. */
    type?: TextInputType;
    /** The label of the input */
    label?: string;
    /** A helptext to render to explain meaning and significance of the TextInput */
    helptext?: ReactNode;
    /** A text to render when the TextInput was successfully validated */
    successtext?: ReactNode;
    /** A text to render when the TextInput has an error or could not be validated */
    errortext?: ReactNode;
    /** The width of the text input. Either 'full' (default) or 'auto'. */
    width?: TextInputWidth;
    /** Pass a custom className to the wrapping element. This can be useful if you must add styling to the outermost wrapping element of this component, e.g. for positioning. */
    wrapperClassName?: string;
}
export {};
//# sourceMappingURL=TextInput.component.d.ts.map