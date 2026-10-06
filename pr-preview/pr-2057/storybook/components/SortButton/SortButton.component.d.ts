import { ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
import { ButtonProps } from '../Button';
type OrderType = "asc" | "desc";
export interface SortButtonProps extends Omit<ButtonProps, "value" | "onChange"> {
    /** Specifies the current sort order, defaulting to "desc". It determines the initial state of sorting when the component is rendered, allowing toggling between ascending ("asc") and descending ("desc"). */
    order?: OrderType;
    /** A callback function executed upon a change in the sort order. It receives the new order, enabling custom logic or state updates to be applied dynamically based on user interaction. */
    onChange?: (_order: OrderType) => void;
    /**
     * A callback function similar to onChange, designed for older implementations.
     * @deprecated: Will be removed in the next major release, use onChange instead.
     */
    onOrderChange?: (_order: OrderType) => void;
    /** Provides the toggle button with sort options, each defined by a value and a label. This determines the selectable states (e.g., ascending or descending) and their visual representation, defaulting to icons corresponding to the sort direction. */
    options?: {
        value: OrderType;
        label: ReactNode;
    }[];
}
/**
 * The `SortButton` component is a specialized toggle button designed for sorting functionalities in user interfaces.
 * It allows users to toggle between predefined sorting orders (ascending or descending) with visual indicators.
 * The button is built to facilitate easy switching of sort states, providing an intuitive user experience for data lists, tables, or other elements requiring sort capabilities.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-sortbutton--docs
 * @see {@link SortButtonProps}
 */
export declare const SortButton: ({ order, onChange, options, ...props }: SortButtonProps) => ReactNode;
export {};
//# sourceMappingURL=SortButton.component.d.ts.map