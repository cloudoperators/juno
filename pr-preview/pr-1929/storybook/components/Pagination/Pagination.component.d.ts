import { HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
export type PaginationProps = Omit<HTMLAttributes<HTMLDivElement>, "onBlur"> & {
    /**
     * The variant determines the style and user interaction method of the Pagination component:
     * - "default": Renders previous and next buttons only.
     * - "number": Displays the current page number between next and previous buttons.
     * - "select": Provides a dropdown menu between next and previous buttons for specific page selection.
     * - "input": Provides an input field for specific page entry.
     */
    variant?: "default" | "number" | "select" | "input";
    /**
     * The current page number.
     */
    currentPage?: number;
    /**
     * The total number of pages available.
     */
    totalPages?: number;
    /**
     * A fallback property for providing the total number of pages, maintained for backward compatibility.
     */
    pages?: number;
    /**
     * When true, disables the entire pagination component, preventing any interaction.
     */
    disabled?: boolean;
    /**
     * When true, simulates the component being on the first page, disabling the previous button.
     */
    isFirstPage?: boolean;
    /**
     * When true, simulates the component being on the last page, disabling the next button.
     */
    isLastPage?: boolean;
    /**
     * Callback function triggered when the previous button is pressed.
     */
    onPressPrevious?: (newPage?: number) => void;
    /**
     * Callback function triggered when the next button is pressed.
     */
    onPressNext?: (newPage?: number) => void;
    /**
     * Callback function triggered when a new page is selected from the dropdown, applicable when variant is "select".
     */
    onSelectChange?: (selected: number) => void;
    /**
     * Callback function triggered when the input field value changes, applicable when variant is "input".
     */
    onInputChange?: (inputValue?: number) => void;
    /**
     * Callback function triggered when a key is pressed in the input field, applicable when variant is "input".
     */
    onKeyPress?: (controlCurrentPage?: number) => void;
    /**
     * Callback function triggered when the input field loses focus, applicable when variant is "input".
     */
    onBlur?: (controlCurrentPage?: number) => void;
    /**
     * Displays a loading spinner and disables interaction when true.
     */
    progress?: boolean;
    /**
     * Additional CSS classes for custom styling.
     */
    className?: string;
};
/**
 * The Pagination component provides navigation controls for paginated content.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-pagination--docs
 * @see {@link PaginationProps}
 */
export declare const Pagination: ({ variant, currentPage, totalPages, pages, disabled, isFirstPage, isLastPage, onPressPrevious, onPressNext, onSelectChange, onInputChange, onKeyPress, onBlur, progress, className, ...props }: PaginationProps) => ReactNode;
//# sourceMappingURL=Pagination.component.d.ts.map