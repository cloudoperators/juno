import { ReactNode, ChangeEventHandler, MouseEventHandler, SelectHTMLAttributes } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
export interface NativeSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    /**
     * Name of the select element.
     * Used as a key for the selected value if a form is submitted.
     * @default "Unnamed Select"
     */
    name?: string;
    /**
     * ID of the select element.
     */
    id?: string;
    /**
     * Additional CSS classes to apply to the select element for custom styling.
     * @default ""
     */
    className?: string;
    /**
     * Elements to be rendered inside the select element.
     * This can be any React node or a collection of React nodes.
     * Typically, these are SelectOption or SelectOptionGroup components.
     */
    children?: ReactNode;
    /**
     * Disables the select element, making it unclickable.
     * @default false
     */
    disabled?: boolean;
    /**
     * Highlights the select element as invalid, indicating incorrect user input or validation errors.
     * @default false
     */
    invalid?: boolean;
    /**
     * Highlights the select element as valid, indicating correct user input or successful validation.
     * @default false
     */
    valid?: boolean;
    /**
     * Displays a loading indicator over the select element.
     * Used for async operations like fetching data.
     * @default false
     */
    loading?: boolean;
    /**
     * Displays an error state over the select element, such as during data fetching errors.
     * Should not be used for validation errors.
     * @default false
     */
    error?: boolean;
    /**
     * Event handler for the change event of the select element.
     * Triggered when the user changes the selected option.
     */
    onChange?: ChangeEventHandler<HTMLSelectElement>;
    /**
     * Event handler for the click event on the select element.
     * Triggered when the user clicks on the select element.
     */
    onClick?: MouseEventHandler<HTMLSelectElement>;
    /**
     * Additional CSS classes to apply to the outer wrapper of the select component for custom styling.
     * @default ""
     */
    wrapperClassName?: string;
}
/**
 * The `NativeSelect` component is a basic HTML select element with extra features
 * such as styles and loading/error states. It supports native select options while
 * offering customization for validation indicators.
 * @see https://cloudoperators.github.io/juno/?path=/docs/forms-nativeselect-nativeselect--docs
 * @see {@link NativeSelectProps}
 */
export declare const NativeSelect: ({ name, id, children, className, disabled, invalid, valid, loading, error, onChange, onClick, wrapperClassName, ...props }: NativeSelectProps) => ReactNode;
//# sourceMappingURL=NativeSelect.component.d.ts.map