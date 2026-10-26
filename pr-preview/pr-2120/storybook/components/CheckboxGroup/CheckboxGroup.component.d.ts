import { default as React, ReactNode, HTMLAttributes } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
type EventUpdateHandler = (value: string) => void;
export interface CheckboxGroupContextProps {
    selectedOptions?: string[];
    handleCheckboxChange?: EventUpdateHandler;
    name?: string;
    updateSelectedValue?: EventUpdateHandler;
    disabled?: boolean;
}
export declare const CheckboxGroupContext: React.Context<CheckboxGroupContextProps | undefined>;
/**
 * The `CheckboxGroup` component provides a context-managed grouping of checkbox elements.
 * It manages the collective state for checkboxes, allowing for individual or batch validation
 * and selection. It supports states such as disabled, valid, and invalid, and offers customization
 * for error and success messages. It also furnishes a grouped label and help text for a unified UI.
 * @see https://cloudoperators.github.io/juno/?path=/docs/forms-checkbox-checkboxgroup--docs
 * @see {@link CheckboxGroupProps}
 */
export declare const CheckboxGroup: ({ children, className, disabled, errortext, helptext, id, invalid, label, name, onChange, required, selected, successtext, valid, ...props }: CheckboxGroupProps) => ReactNode;
export interface CheckboxGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
    /** The Checkbox children of the CheckboxGroup. */
    children?: ReactNode;
    /**
     * Custom class names for styling the CheckboxGroup.
     * @default ""
     */
    className?: string;
    /**
     * Disables all checkboxes in the group.
     * @default false
     */
    disabled?: boolean;
    /** Text displayed if validation fails or there is an error. Indicates group invalidity when set. */
    errortext?: ReactNode;
    /** Additional text explaining the significance of this group. */
    helptext?: ReactNode;
    /** The group's ID. Automatically generated if not provided. */
    id?: string;
    /**
     * Indicates if the CheckboxGroup is marked as invalid.
     * @default false
     */
    invalid?: boolean;
    /** The label text for the CheckboxGroup. */
    label?: string;
    /**
     * Name for all checkboxes in the group. Generated if not supplied.
     * @default A unique identifier
     */
    name?: string;
    /** Event handler triggered when any checkbox selection changes. */
    onChange?: EventUpdateHandler;
    /**
     * Specifies if a selection is required in this group.
     * @default false
     */
    required?: boolean;
    /** Array of values representing the initially selected checkboxes in the group. */
    selected?: string[];
    /** Text displayed upon successful validation, which marks the group as valid. */
    successtext?: ReactNode;
    /**
     * Specifies if the CheckboxGroup has been successfully validated.
     * @default false
     */
    valid?: boolean;
}
export {};
//# sourceMappingURL=CheckboxGroup.component.d.ts.map