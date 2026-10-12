import { HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
export interface GridProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Controls whether columns should auto-size.
     * If true, this will override the default 12-column grid layout.
     * @default false
     */
    auto?: boolean;
    /**
     * Elements to be rendered within the grid.
     */
    children?: ReactNode;
    /**
     * Additional CSS classes to apply to the grid for custom styling.
     * @default ""
     */
    className?: string;
}
/**
 * The `Grid` component establishes a customizable grid layout, enabling
 * responsive design. It collaborates with `GridColumn` and `GridRow` for
 * flexible arrangement of content.
 * @see https://cloudoperators.github.io/juno/?path=/docs/layout-grid-grid--docs
 * @see {@link GridProps}
 */
export declare const Grid: ({ auto, children, className, ...props }: GridProps) => ReactNode;
//# sourceMappingURL=Grid.component.d.ts.map