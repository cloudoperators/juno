import { default as React, ReactNode, HTMLAttributes, FocusEventHandler, ChangeEventHandler } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
type AddOptionValueAndLabelFunction = (value: string, label: string, children: ReactNode) => void;
export type ComboBoxContextType = {
    selectedValue?: string;
    truncateOptions: boolean;
    addOptionValueAndLabel: AddOptionValueAndLabelFunction;
};
export declare const ComboBoxContext: React.Context<ComboBoxContextType | undefined>;
/**
 * The `ComboBox` component is a customizable, accessible, and interactive dropdown component, allowing users to select from a list of options.
 * It features dynamic filtering and optional asynchronous loading for extended functionality.
 * @see https://cloudoperators.github.io/juno/?path=/docs/forms-combobox-combobox--docs
 * @see {@link ComboBoxProps}
 */
export declare const ComboBox: ({ ariaLabel, children, className, defaultValue, disabled, error, errortext, helptext, id, invalid, loading, label, name, onBlur, onChange, onFocus, onInputChange, placeholder, required, successtext, truncateOptions, valid, value, valueLabel, width, wrapperClassName, ...props }: ComboBoxProps) => ReactNode;
export type ComboBoxWidth = "full" | "auto";
export interface ComboBoxProps extends Omit<HTMLAttributes<HTMLElement>, "onChange" | "onInput" | "children"> {
    /** ARIA label for accessibility. Defaults to label if provided. */
    ariaLabel?: string;
    /** Children to render, typically using `ComboBox.Option`. */
    children?: ReactNode;
    /**
     * Additional class names for styling.
     * @default ""
     */
    className?: string;
    /** Default value for ComboBox, applicable in uncontrolled mode. */
    defaultValue?: string;
    /**
     * Indicates if ComboBox is disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * Indicates internal ComboBox error. Use `invalid` for validation failures.
     * @default false
     */
    error?: boolean;
    /** Text displayed for validation errors or internal issues. */
    errortext?: ReactNode;
    /** Additional context or instructions displayed below the ComboBox. */
    helptext?: ReactNode;
    /** ID for ComboBox. If unspecified, auto-generated. */
    id?: string;
    /**
     * Identifies invalid ComboBox state.
     * @default false
     */
    invalid?: boolean;
    /** ComboBox label text. */
    label?: string;
    /**
     * Loading state for asynchronous actions.
     * @default false
     */
    loading?: boolean;
    /** Name attribute when used within a form. */
    name?: string;
    /** Handler for when the ComboBox loses focus. */
    onBlur?: FocusEventHandler<HTMLInputElement>;
    /** Handler for changes in the ComboBox selection. */
    onChange?: (_value: string) => void;
    /** Handler for when the ComboBox input gains focus. */
    onFocus?: FocusEventHandler<HTMLInputElement>;
    /** Handler for changes in the ComboBox's text input value. */
    onInputChange?: ChangeEventHandler<HTMLInputElement>;
    /** Placeholder text for ComboBox input.
     * @default "Select…"
     */
    placeholder?: string;
    /**
     * Flags the ComboBox as a required field.
     * @default false
     */
    required?: boolean;
    /** Text shown upon successful validation of the ComboBox. */
    successtext?: ReactNode;
    /**
     * Controls option text truncation in the dropdown.
     * @default false
     */
    truncateOptions?: boolean;
    /**
     * Specifies successful validation state.
     * @default false
     */
    valid?: boolean;
    /** Controlled value for ComboBox in managed state. */
    value?: string;
    /** Label corresponding to the selected or default value for display. */
    valueLabel?: string;
    /**
     * Width determination for input: "full" or "auto".
     * @default "full"
     */
    width?: ComboBoxWidth;
    /** Custom styling classes for the ComboBox's wrapper.
     * @default ""
     */
    wrapperClassName?: string;
}
export {};
//# sourceMappingURL=ComboBox.component.d.ts.map