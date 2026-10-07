import { default as React, HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
import { CellVerticalAlignmentType } from '../DataGrid/DataGrid.component';
/**
 * `DataGridCell` is a versatile layout component for `DataGrid`, supporting cell-specific configurations
 * like column span and wrapping. It adapts orientation based on grid context.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-datagrid-datagridcell--docs
 * @see {@link DataGridCellProps}
 */
export declare const DataGridCell: React.ForwardRefExoticComponent<DataGridCellProps & React.RefAttributes<HTMLDivElement>>;
export interface DataGridCellProps extends HTMLAttributes<HTMLDivElement> {
    /** Defines the number of columns the cell spans. */
    colSpan?: number;
    /**
     * If set, content within the cell will not wrap.
     * @default false
     */
    nowrap?: boolean;
    /**
     * Overrides the parent `DataGrid`'s `cellVerticalAlignment` for this cell.
     * When not set, the cell inherits the grid-level setting.
     */
    verticalAlignment?: CellVerticalAlignmentType;
    /** Components or elements to render within the DataGridCell. */
    children?: ReactNode;
    /**
     * Additional CSS class names for custom styling.
     * @default ""
     */
    className?: string;
}
//# sourceMappingURL=DataGridCell.component.d.ts.map