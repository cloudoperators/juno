import { default as React, HTMLAttributes, MouseEvent, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
/**
 * `DataGridRow` represents a row in a `DataGrid`, supporting interactions such as selection and click handling.
 * It provides styles for active states and custom behavior when interacted with.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-datagrid-datagridrow--docs
 * @see {@link DataGridRowProps}
 */
export declare const DataGridRow: React.ForwardRefExoticComponent<DataGridRowProps & React.RefAttributes<HTMLDivElement>>;
export interface DataGridRowProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Indicates if the DataGridRow should be in an active state,
     * applying styles for persistent selection or activation.
     */
    isSelected?: boolean;
    /**
     * Row click handler
     */
    onClick?: (_event: MouseEvent<HTMLDivElement>) => void;
    /**
     * Additional custom CSS class names that can be applied to the DataGridRow.
     */
    className?: string;
    /**
     * Elements or components that will be rendered within the DataGridRow.
     */
    children?: ReactNode;
}
//# sourceMappingURL=DataGridRow.component.d.ts.map