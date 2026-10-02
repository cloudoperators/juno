import { default as React, HTMLAttributes, MouseEventHandler, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
export interface CardProps extends HTMLAttributes<HTMLElement> {
    /**
     * Components or elements to be rendered as content.
     */
    children?: ReactNode;
    /**
     * Optional padding for the Card component.
     * @default false
     */
    padding?: boolean;
    /**
     * Additional CSS styles to apply.
     * @default ""
     */
    className?: string;
    /**
     * When set, renders the card as an <a> element.
     */
    href?: string;
    /**
     * When set (without href), renders the card as a <button> element.
     */
    onClick?: MouseEventHandler<HTMLElement>;
    /**
     * Disables interaction; native disabled on <button>, aria-disabled + stripped href on <a>, renders "not-allowed"-cursor.
     * @default false
     */
    disabled?: boolean;
}
/**
 * The `Card` component acts as a versatile container for various types of content, providing
 * an optional padding feature for additional layout flexibility. It is commonly used for
 * displaying information or grouping elements, allowing for consistent styling and shadow effects.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-card--docs
 * @see {@link CardProps}
 */
export declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLElement>>;
//# sourceMappingURL=Card.component.d.ts.map