import { HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
export interface GridRowProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Elements to be rendered within the grid row.
     * Typically, these would be GridColumn components.
     */
    children?: ReactNode;
    /**
     * Additional CSS classes to apply to the grid row for custom styling.
     * @default ""
     */
    className?: string;
}
/**
 * The `GridRow` component acts as a container to hold `GridColumn` elements
 * within a `Grid`. It ensures proper flexbox wrapping for responsive design.
 * @see https://cloudoperators.github.io/juno/?path=/docs/layout-grid-gridrow--docs
 * @see {@link GridRowProps}
 */
export declare const GridRow: ({ children, className, ...props }: GridRowProps) => ReactNode;
//# sourceMappingURL=GridRow.component.d.ts.map