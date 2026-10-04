import { HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
export interface FormRowProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Content to render inside FormRow.
     * Typically, these will be form elements such as TextInput, Textarea, Select, Radio, CheckboxGroups, etc.
     */
    children?: ReactNode;
    /**
     * Additional CSS classes to apply to the FormRow for custom styling.
     * @default ""
     */
    className?: string;
}
/**
 * The `FormRow` component structures individual form elements within a row layout.
 * It serves as a container for inputs like `TextInput`, `Textarea`, and others,
 * supporting custom styling with class names.
 * @see https://cloudoperators.github.io/juno/?path=/docs/forms-formrow--docs
 * @see {@link FormRowProps}
 */
export declare const FormRow: ({ children, className, ...props }: FormRowProps) => ReactNode;
//# sourceMappingURL=FormRow.component.d.ts.map