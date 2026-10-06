import { default as React, HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
/**
 * `DataGridHeadCell` is designed for use within a `DataGrid` header, defining column attributes and appearance.
 * It accommodates configurations like sorting (future implementation) and display styles.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-datagrid-datagridheadcell--docs
 * @see {@link DataGridHeadCellProps}
 */
export declare const DataGridHeadCell: React.ForwardRefExoticComponent<DataGridHeadCellProps & React.RefAttributes<HTMLDivElement>>;
export interface DataGridHeadCellProps extends HTMLAttributes<HTMLElement> {
    /** Add a col span to the cell. This works like a colspan in a normal html table, so you have to take care not to place too many cells in a row if some of them have a colspan.  */
    colSpan?: number;
    /** Set nowrap to true if the cell content shouldn't wrap (this is achieved by adding white-space: nowrap;) */
    nowrap?: boolean;
    /** Children to render in the DataGridHeadCell */
    children?: ReactNode;
    /** Add a classname */
    className?: string;
}
//# sourceMappingURL=DataGridHeadCell.component.d.ts.map