import { HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
export interface FormSectionProps extends HTMLAttributes<HTMLElement> {
    /**
     * Title for the form section.
     * @default ""
     */
    title?: string;
    /**
     * Additional CSS classes to apply to the form section for custom styling.
     * @default ""
     */
    className?: string;
    /**
     * Content to be rendered within the form section.
     * This can include form elements and other React nodes.
     */
    children?: ReactNode;
    /**
     * Additional CSS classes to apply to the form section's title if present.
     * @default ""
     */
    titleClassName?: string;
}
/**
 * The `FormSection` component groups related form elements within a section,
 * offering a title and customizable styling. It assists in organizing content within forms.
 * @see https://cloudoperators.github.io/juno/?path=/docs/forms-formsection--docs
 * @see {@link FormSectionProps}
 */
export declare const FormSection: ({ title, children, className, titleClassName, ...props }: FormSectionProps) => ReactNode;
//# sourceMappingURL=FormSection.component.d.ts.map