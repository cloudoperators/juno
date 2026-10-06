import { HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
export interface ContentAreaToolbarProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Custom CSS classes for styling the toolbar.
     * @default ""
     */
    className?: string;
    /**
     * Content or elements to render within the content area toolbar.
     */
    children?: ReactNode;
}
/**
 * The `ContentAreaToolbar` represents the main toolbar within a content area, providing space
 * for main actions relevant to the current page context. It supports custom content and styling.
 * @see https://cloudoperators.github.io/juno/?path=/docs/layout-contentareatoolbar--docs
 * @see {@link ContentAreaToolbarProps}
 */
export declare const ContentAreaToolbar: ({ className, children, ...props }: ContentAreaToolbarProps) => ReactNode;
//# sourceMappingURL=ContentAreaToolbar.component.d.ts.map