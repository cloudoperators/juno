import { HTMLProps, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
/**
 * `ComboBoxOption` is a component used within a `ComboBox` to represent each selectable option.
 * It displays the option's label and value, and indicates the selected state with styles or an icon.
 * @see https://cloudoperators.github.io/juno/?path=/docs/forms-combobox-comboboxoption--docs
 * @see {@link ComboBoxOptionProps}
 */
export declare const ComboBoxOption: ({ children, disabled, value, label, className, ...props }: ComboBoxOptionProps) => ReactNode;
export interface ComboBoxOptionProps extends HTMLProps<HTMLLIElement> {
    /**
     * Content to render inside the ComboBoxOption. Should be specified as a string.
     */
    children?: string;
    /**
     * If true, the option is disabled and not selectable.
     * @default false
     */
    disabled?: boolean;
    /** The value to be submitted if this option is selected. */
    value?: string;
    /** The label text for the option, displayed when `children` is not provided. */
    label?: string;
    /**
     * CSS class names for custom styling.
     * @default ""
     */
    className?: string;
}
//# sourceMappingURL=ComboBoxOption.component.d.ts.map