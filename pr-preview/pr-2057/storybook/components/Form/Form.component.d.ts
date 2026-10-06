import { ReactNode, FormHTMLAttributes } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
    /**
     * Title for the form.
     * @default ""
     */
    title?: string;
    /**
     * Additional CSS classes to apply to the form for custom styling.
     * @default ""
     */
    className?: string;
    /**
     * Content to render inside the form.
     * This can include FormSections, FormGroups, and other form elements.
     */
    children?: ReactNode;
}
/**
 * The `Form` component is designed to encapsulate form sections and groups,
 * providing a structured way to build complex forms. It can include a title and
 * supports additional styling through custom CSS classes.
 * @see https://cloudoperators.github.io/juno/?path=/docs/forms-form--docs
 * @see {@link FormProps}
 */
export declare const Form: ({ title, className, children, ...props }: FormProps) => ReactNode;
//# sourceMappingURL=Form.component.d.ts.map