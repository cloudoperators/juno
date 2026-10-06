import { HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
/**
 * `DataGridFoot` is used to display a footer section for a `DataGrid`, supporting summary data or controls
 * related to the grid content. It is styled consistently with other grid sections.
 * @see https://cloudoperators.github.io/juno/?path=/docs/wip-datagrid-datagridfoot--docs
 * @see {@link DataGridFootProps}
 */
export declare const DataGridFoot: ({ className, children, ...props }: DataGridFootProps) => ReactNode;
export interface DataGridFootProps extends HTMLAttributes<HTMLTableSectionElement> {
    /**
     * Elements or components to render within the DataGridFoot.
     */
    children?: ReactNode;
    /**
     * Custom CSS class names for styling.
     * @default ""
     */
    className?: string;
}
//# sourceMappingURL=DataGridFoot.component.d.ts.map