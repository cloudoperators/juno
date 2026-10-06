import { HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
/**
 * The `Container` component serves as a basic layout container with configurable padding options,
 * providing structure and spacing within layouts.
 * @see https://cloudoperators.github.io/juno/?path=/docs/layout-container--docs
 * @see {@link ContainerProps}
 */
export declare const Container: ({ px, py, className, children, ...props }: ContainerProps) => ReactNode;
export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Specifies whether horizontal padding should be added.
     * @default true
     */
    px?: boolean;
    /**
     * Specifies whether vertical padding should be added.
     * @default false
     */
    py?: boolean;
    /** Additional custom class names for styling the container.
     * @default ""
     */
    className?: string;
    /** Elements or components to render within the Container. */
    children?: ReactNode;
}
//# sourceMappingURL=Container.component.d.ts.map