import { default as React, HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.1/node_modules/react';
import { CellVerticalAlignmentType } from '../DataGrid/DataGrid.component';
import { TextContainType } from '../../shared/textContain';
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
     * @deprecated Use `textContain="no-wrap"` instead. When `textContain` is set, `nowrap` is ignored.
     */
    nowrap?: boolean;
    /**
     * Controls how the cell contains text that exceeds its available space:
     * truncation with an ellipsis (`"truncate-end"`, `"truncate-start"`), forced
     * breaking (`"break-word"`, `"break-all"`), or single-line (`"no-wrap"`).
     *
     * The `truncate-*` values only take visible effect when the cell has a bounded
     * width. In a `DataGrid` the column usually supplies this constraint. Truncation
     * is rendered on an inner wrapper element so it works regardless of
     * `cellVerticalAlignment` — vertical centering is preserved.
     *
     * Takes precedence over the deprecated `nowrap` prop.
     */
    textContain?: TextContainType;
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