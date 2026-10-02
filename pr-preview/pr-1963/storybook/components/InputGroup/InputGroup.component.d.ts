import { HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
type VariantTypes = "default" | "primary" | "primary-danger" | "subdued";
export interface InputGroupProps extends HTMLAttributes<HTMLElement> {
    /**
     * The children to render within the InputGroup.
     * This can be any React node or a collection of React nodes such as Buttons, TextInput, and Select elements.
     */
    children?: ReactNode;
    /**
     * Additional CSS class name(s) to apply to the InputGroup for custom styling.
     * @default ""
     */
    className?: string;
    /**
     * The variant style to apply to the group and its children.
     */
    variant?: VariantTypes;
    /**
     * If true, all elements within the InputGroup will be disabled.
     * Individual elements can override this setting if needed.
     * @default false
     */
    disabled?: boolean;
}
/**
 * InputGroup is a component used to visually group related elements such as
 * Buttons, TextInput, and Select elements, providing a cohesive styling approach.
 * @see https://cloudoperators.github.io/juno/?path=/docs/wip-inputgroup--docs
 * @see {@link InputGroupProps}
 */
export declare const InputGroup: ({ children, className, variant, disabled, ...props }: InputGroupProps) => ReactNode;
export {};
//# sourceMappingURL=InputGroup.component.d.ts.map