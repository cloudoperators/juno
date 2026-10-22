import { default as React, HTMLAttributes } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
/**
 * The `Label` component is a reusable, accessible label for form elements.
 * It supports optional features like disabling, required indicators, and floating label styles.
 * @see https://cloudoperators.github.io/juno/?path=/docs/forms-label--docs
 * @see {@link LabelProps}
 */
export declare const Label: React.ForwardRefExoticComponent<LabelProps & React.RefAttributes<HTMLLabelElement>>;
export interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
    /**
     * Text content for the label, required for display.
     */
    text?: string;
    /**
     * ID of an input element to associate the label with for accessibility.
     */
    htmlFor?: string;
    /**
     * Displays the required indicator when set.
     * @default false
     */
    required?: boolean;
    /**
     * Custom CSS class names for label styling.
     * @default ""
     */
    className?: string;
    /**
     * Enables disabled styling to indicate non-interactive fields.
     * @default false
     */
    disabled?: boolean;
    /**
     * Applies floating label styles for improved UX.
     * @default false
     */
    floating?: boolean;
    /**
     * Applies minimized label styles; requires `floating` to be `true`.
     * @default false
     */
    minimized?: boolean;
}
//# sourceMappingURL=Label.component.d.ts.map