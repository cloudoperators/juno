import { ReactNode, MouseEventHandler, KeyboardEventHandler, ChangeEventHandler, HTMLProps } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
export interface SearchInputProps extends Omit<HTMLProps<HTMLInputElement>, "onClick"> {
    /**
     * Specifies the name attribute for the input element.
     */
    name?: string;
    /**
     * Determines the visual styling variant of the SearchInput component.
     * - "default": Standard search input styling.
     * - "hero": A larger search input intended for standalone use on a dedicated search page, akin to the initial Google search page.
     * - "rounded": A search input with rounded edges.
     */
    variant?: "rounded" | "hero" | "default";
    /**
     * Disables the search input when set to true.
     */
    disabled?: boolean;
    /**
     * Custom placeholder text displayed in the search input.
     */
    placeholder?: string;
    /**
     * Initial value for the search input.
     */
    value?: string;
    /**
     * Controls the autocomplete attribute of the input element.
     * Pass a valid autocomplete value.
     * We do not enforce validity.
     */
    autoComplete?: string;
    /**
     * Determines whether to show the 'Clear' button.
     */
    clear?: boolean;
    /**
     * Pass an optional CSS class to apply to the search input.
     */
    className?: string;
    /**
     * Callback function invoked when a search is triggered, either by pressing the 'Enter' key or by clicking the search icon.
     */
    onSearch?: (value: string) => void;
    /**
     * Click handler for the search icon.
     */
    onClick?: MouseEventHandler<HTMLElement>;
    /**
     * Change handler for the search input.
     */
    onChange?: ChangeEventHandler<HTMLInputElement>;
    /**
     * KeyPress handler for the search input. By default, triggers the onSearch function when the 'Enter' key is pressed.
     */
    onKeyPress?: KeyboardEventHandler<HTMLInputElement>;
    /**
     * Click handler for the 'Clear' button.
     */
    onClear?: MouseEventHandler<HTMLElement>;
}
/**
 * A SearchInput is a controlled input component for searching.
 * It provides a text field to enter a search query and optional clear and search icons.
 * Three styling variants are supported: "rounded", "hero", and "default".
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-searchinput--docs
 * @see {@link SearchInputProps}
 */
export declare const SearchInput: ({ value, name, variant, disabled, clear, onSearch, onChange, onClick, onKeyPress, onClear, autoComplete, placeholder, className, ...props }: SearchInputProps) => ReactNode;
//# sourceMappingURL=SearchInput.component.d.ts.map