import { ReactNode, InputHTMLAttributes, ChangeEventHandler, MouseEventHandler } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
/**
 * The `Checkbox` component is a versatile form element that allows users to
 * select one or multiple options. It can display states such as checked,
 * indeterminate, invalid, and valid, and integrates with a checkbox group context
 * for collective state management. This component supports labels, icons,
 * error/success indicators, and custom event handlers.
 * @see https://cloudoperators.github.io/juno/?path=/docs/forms-checkbox-checkbox--docs
 * @see {@link CheckboxProps}
 */
export declare const Checkbox: ({ checked, className, disabled, errortext, helptext, id, indeterminate, invalid, label, name, onChange, onClick, required, successtext, valid, value, wrapperClassName, ...props }: CheckboxProps) => ReactNode;
export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "value"> {
    /**
     * Specifies if the Checkbox is checked.
     * @default false
     */
    checked?: boolean;
    /**
     * Custom CSS class forwarded to the native checkbox input.
     * @default ""
     */
    className?: string;
    /**
     * Specifies if the Checkbox is disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * Text to display when the Checkbox has an error.
     */
    errortext?: ReactNode;
    /**
     * Help text explaining the significance of the Checkbox.
     */
    helptext?: ReactNode;
    /**
     * The ID of the Checkbox. Auto-generated if not provided.
     */
    id?: string;
    /**
     * Specifies if the Checkbox is in an indeterminate state; used for mixed states.
     * @default false
     */
    indeterminate?: boolean;
    /**
     * Indicates whether the Checkbox validation failed.
     * @default false
     */
    invalid?: boolean;
    /**
     * The label text for the Checkbox.
     */
    label?: string;
    /**
     * The name attribute of the Checkbox.
     */
    name?: string;
    /**
     * Event handler for change events on the Checkbox.
     */
    onChange?: ChangeEventHandler<HTMLInputElement>;
    /**
     * Event handler for click events on the Checkbox.
     */
    onClick?: MouseEventHandler<HTMLInputElement>;
    /**
     * Specifies if the Checkbox is required for form validation.
     * @default false
     */
    required?: boolean;
    /**
     * Text to display when the Checkbox passes validation.
     */
    successtext?: ReactNode;
    /**
     * Indicates whether the Checkbox validation succeeded.
     * @default false
     */
    valid?: boolean;
    /**
     * The value attribute of the Checkbox.
     */
    value?: string;
    /**
     * Custom CSS class for styling the outer wrapper element.
     * @default ""
     */
    wrapperClassName?: string;
}
//# sourceMappingURL=Checkbox.component.d.ts.map