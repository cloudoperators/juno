import { HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
export interface SelectOptionProps extends HTMLAttributes<HTMLLIElement> {
    /** The primary display content for the option. If neither label nor value is provided, this becomes the fallback text. */
    children?: string;
    /** Additional styling */
    className?: string;
    /** Controls whether the option can be selected. When true, the option is visibly styled to appear disabled, marked by opacity reduction and a "not-allowed" cursor. */
    disabled?: boolean;
    /** Represents the unique value of the option. If omitted, children becomes the default value. This prop is fundamental for tracking selections within the dropdown list. */
    value?: string;
    /** Provides an alternative text label for the option. This can replace or supplement children and value in display scenarios. */
    label?: string;
}
/**
 * The `SelectOption` component is part of a customizable `Select` dropdown menu designed to enhance the user interface with selectable options.
 * It provides functionality to render each option within a dropdown list, distinctly handling states for selection, disabling, and styling preferences such as text truncation.
 * It leverages context to communicate option selections back to the parent Select component, facilitating seamless integration and interaction within form controls.
 * @see https://cloudoperators.github.io/juno/?path=/docs/forms-select-selectoption--docs
 * @see {@link SelectOptionProps}
 */
export declare const SelectOption: ({ children, className, disabled, value, label, ...props }: SelectOptionProps) => ReactNode;
//# sourceMappingURL=SelectOption.component.d.ts.map