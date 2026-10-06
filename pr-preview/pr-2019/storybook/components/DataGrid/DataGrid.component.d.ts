import { HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
interface DataGridContextType {
    cellVerticalAlignment?: CellVerticalAlignmentType;
    isDataGrid?: boolean;
}
export declare const useDataGridContext: () => DataGridContextType;
/**
 * The `DataGrid` component displays tabular data with customizable columns and layout.
 * It supports interactive styling through child components like `DataGridRow` for advanced interactions.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-datagrid-datagrid--docs
 * @see {@link DataGridProps}
 */
export declare const DataGrid: ({ columns, columnMaxSize, columnMinSize, minContentColumns, gridColumnTemplate, cellVerticalAlignment, className, children, ...props }: DataGridProps) => ReactNode;
export type CellVerticalAlignmentType = "center" | "top";
export interface DataGridProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Specifies the number of columns in the grid.
     * @default 1
     */
    columns?: number;
    /**
     * Defines maximum column sizing.
     * @default "auto"
     */
    columnMaxSize?: string;
    /**
     * Specifies minimum column size.
     * @default "0px"
     */
    columnMinSize?: string;
    /** Array of indices for columns sized by minimum content. */
    minContentColumns?: number[];
    /** Custom CSS grid-template-columns. Overwrites other sizing props. */
    gridColumnTemplate?: string;
    /**
     * Vertical alignment for all grid cells, using a flexbox column layout.
     * @default "center"
     */
    cellVerticalAlignment?: CellVerticalAlignmentType;
    /** Components or elements to render within the DataGrid container. */
    children?: ReactNode;
    /**
     * Additional class names for styling.
     * @default ""
     */
    className?: string;
}
export {};
//# sourceMappingURL=DataGrid.component.d.ts.map