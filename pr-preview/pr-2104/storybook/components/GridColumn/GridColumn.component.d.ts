import { HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
export interface GridColumnProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * The number of columns to span the column over.
     */
    cols?: number;
    /**
     * The width in percent.
     * If a width is given, it will override the 'cols' prop.
     */
    width?: number;
    /**
     * Determines whether the column should set an auto width.
     * @default false
     */
    auto?: boolean;
    /**
     * Additional CSS classes to apply to the grid column for custom styling.
     * @default ""
     */
    className?: string;
    /**
     * Content to be rendered inside the column.
     */
    children?: ReactNode;
}
/**
 * The `GridColumn` component represents an individual column within a `Grid`,
 * providing options for span and width adjustments. It supports flexible styling
 * for responsive layout.
 * @see https://cloudoperators.github.io/juno/?path=/docs/layout-grid-gridcolumn--docs
 * @see {@link GridColumnProps}
 */
export declare const GridColumn: ({ width, cols, auto, className, children, ...props }: GridColumnProps) => ReactNode;
//# sourceMappingURL=GridColumn.component.d.ts.map