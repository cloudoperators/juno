import { HTMLProps, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
import { TypeValueLabelType } from './JsonViewer.types';
import * as themes from "./themes";
export declare const getTypeOfTheValue: (value: unknown) => TypeValueLabelType;
/**
 * The `JsonViewer` component provides a structured visualization of JSON data,
 * with support for syntax highlighting, collapsible elements, and search functionality.
 * Tailorable themes and display settings are available for user customization.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-jsonviewer--docs
 * @see {@link JsonViewerProps}
 */
export declare const JsonViewer: ({ data, showRoot, toolbar, theme, expanded, indentWidth, style, truncate, className, ...props }: JsonViewerProps) => ReactNode;
type ThemeType = "dark" | "light";
export interface JsonViewerProps extends Omit<HTMLProps<HTMLDivElement>, "data"> {
    /**
     * JSON data to render; essential for visualizing complex structures.
     */
    data: string | object | object[];
    /** Pass a styles object for inline customizations. */
    style?: object;
    /**
     * Toggles toolbar display, including expansion and search functionalities.
     * @default false
     */
    toolbar?: boolean;
    /**
     * Displays the root node key for hierarchical clarity.
     * @default false
     */
    showRoot?: boolean;
    /** Preset theme (dark/light) or map of colors for custom styling.
     * @param dark dark theme
     * @param light light theme
     * @param base00 background
     * @param base01 NOT used
     * @param base02 border, NaN,null, undefined background
     * @param base03 NOT used
     * @param base04 size (x items)
     * @param base05 type "undefined"
     * @param base06 NOT used
     * @param base07 key, brace
     * @param base08 type "NaN"
     * @param base09 ellipsis (...), type "string"
     * @param base0A types: "null", "regex"
     * @param base0B type "float"
     * @param base0C index
     * @param base0D expanded icon, types: "date", "function"
     * @param base0E collapsed icon, types: "boolean"
     * @param base0F copy icon, type "integer"
     */
    theme?: themes.JsonViewerTheme | ThemeType;
    /**
     * Default expansion level for JSON objects, set as true, false, or a numeric level.
     * @default 1
     */
    expanded?: boolean | number;
    /**
     * Max length for truncating strings within displayed JSON data; defaults to 100 characters if true.
     */
    truncate?: boolean | number;
    /**
     * Pixel width for indentation.
     * @default 4
     */
    indentWidth?: number;
    /**
     * Additional CSS classes for styled customization.
     * @default ""
     */
    className?: string;
}
export {};
//# sourceMappingURL=JsonViewer.component.d.ts.map