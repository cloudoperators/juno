import { HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
/**
 * The `ButtonRow` component is designed to contain one or several buttons,
 * providing them with structured spacing and alignment. It uses the `Stack`
 * component for consistent gap management and alignment, ensuring that
 * button elements are neatly organized within a row. This is particularly
 * useful in dialogs, forms, or any interface requiring a uniform presentation
 * for multiple actions.
 * @see https://cloudoperators.github.io/juno/?path=/docs/forms-buttonrow--docs
 * @see {@link ButtonRowProps}
 */
export declare const ButtonRow: ({ children, className, ...props }: ButtonRowProps) => ReactNode;
export interface ButtonRowProps extends HTMLAttributes<HTMLElement> {
    /**
     * Add a class to the ButtonRow for additional styling.
     * @default ""
     */
    className?: string;
    /**
     * Children to render within the ButtonRow.
     */
    children?: ReactNode;
}
//# sourceMappingURL=ButtonRow.component.d.ts.map