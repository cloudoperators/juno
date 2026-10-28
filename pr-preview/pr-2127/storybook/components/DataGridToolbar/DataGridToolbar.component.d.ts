import { HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
/**
 * `DataGridToolbar` is a styled wrapper for the filter, search, and state zone (Zones 2+3) of a DataGrid header.
 * It provides a background, consistent padding, and separation from the grid below. Use `Stack` inside to compose and position content.
 * Zone 1 content (primary actions and sorting) does not use this component — use a plain `Stack` there instead.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-datagrid-datagridtoolbar--docs
 * @see {@link DataGridToolbarProps}
 */
export declare const DataGridToolbar: ({ className, children, ...props }: DataGridToolbarProps) => ReactNode;
export interface DataGridToolbarProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Elements or components to render within the DataGridToolbar.
     */
    children?: ReactNode;
    /**
     * Custom CSS class names for styling the toolbar.
     * @default ""
     */
    className?: string;
}
//# sourceMappingURL=DataGridToolbar.component.d.ts.map