import { default as React, HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
import { TextContainType } from '../../shared/textContain';
/**
 * `DataGridHeadCell` is designed for use within a `DataGrid` header, defining column attributes and appearance.
 * It accommodates configurations like sorting (future implementation) and display styles.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-datagrid-datagridheadcell--docs
 * @see {@link DataGridHeadCellProps}
 */
export declare const DataGridHeadCell: React.ForwardRefExoticComponent<DataGridHeadCellProps & React.RefAttributes<HTMLDivElement>>;
export interface DataGridHeadCellProps extends HTMLAttributes<HTMLElement> {
    /** Defines the number of columns the cell spans. */
    colSpan?: number;
    /**
     * If set, content within the cell will not wrap.
     * @default false
     * @deprecated Use `textContain="no-wrap"` instead. When `textContain` is set, `nowrap` is ignored.
     */
    nowrap?: boolean;
    /**
     * Controls how the cell contains text that exceeds its available space.
     * Forwarded to the underlying `DataGridCell` — see its documentation for full details.
     * Takes precedence over the deprecated `nowrap` prop.
     */
    textContain?: TextContainType;
    /** Children to render in the DataGridHeadCell */
    children?: ReactNode;
    /** Add a classname */
    className?: string;
}
//# sourceMappingURL=DataGridHeadCell.component.d.ts.map