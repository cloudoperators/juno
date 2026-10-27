import { HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
type FormHintVariant = "help" | "error" | "success";
export interface FormHintProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * The content to render as a hint for a form element.
     * If children are provided, they will take precedence over text.
     */
    children?: ReactNode;
    /**
     * The text to render as a hint for a form element.
     * Overridden by children, if provided.
     * @default ""
     */
    text?: ReactNode;
    /**
     * The variant of the hint ("help", "error", or "success") determining its appearance.
     * @default "help"
     */
    variant?: FormHintVariant;
    /**
     * Additional CSS classes to apply to the form hint for custom styling.
     * @default ""
     */
    className?: string;
}
/**
 * The `FormHint` component provides contextual messages associated with form elements,
 * such as help, error, or success messages. It adjusts appearance based on the variant specified.
 * @see https://cloudoperators.github.io/juno/?path=/docs/forms-formhint--docs
 * @see {@link FormHintProps}
 */
export declare const FormHint: {
    ({ children, text, variant, className, ...props }: FormHintProps): ReactNode;
    displayName: string;
};
export {};
//# sourceMappingURL=FormHint.component.d.ts.map