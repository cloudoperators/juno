import { HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
export interface PageFooterProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Additional custom styling class name for the footer container.
     * @default ""
     */
    className?: string;
    /** The content to render inside the footer, typically links or informational text.
     * Use a list structure e.g. `<ul>` with `<li>` for grouped content or links, as in examples.
     * Available CSS classes for styling:
     * - `.juno-pagefooter-title`: Style for a title element within a column.
     * - `.juno-pagefooter-items`: Style for a list of items.
     * - `.juno-pagefooter-items-inline`: Style for a single line list with pipe separators.
     * - `.juno-pagefooter-item`: Style for individual list items.
     */
    children?: ReactNode;
    /**
     * Optional copyright notice to display within the footer.
     * @default ""
     */
    copyright?: string;
}
/**
 * `PageFooter` component renders a footer at the bottom of the page.
 * It can include links, informational text, and an optional copyright notice.
 * @see https://cloudoperators.github.io/juno/?path=/docs/layout-pagefooter--docs
 * @see {@link PageFooterProps}
 */
export declare const PageFooter: ({ className, children, copyright, ...props }: PageFooterProps) => ReactNode;
//# sourceMappingURL=PageFooter.component.d.ts.map