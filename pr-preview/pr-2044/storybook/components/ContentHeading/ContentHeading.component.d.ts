import { HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
export interface ContentHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    /**
     * Custom content to render within the heading.
     * Takes precedence over the `heading` prop.
     */
    children?: ReactNode;
    /**
     * Text for the heading, used if `children` is not provided.
     * Note that the `children` prop takes precedence over this prop.
     */
    heading?: string;
    /**
     * Custom CSS classes for styling the heading.
     * @default ""
     */
    className?: string;
}
/**
 * The `ContentHeading` represents the primary heading of a page or view, usable within a `<ContentContainer>`
 * or `<AppShell>`. The heading can be defined via the `heading` prop or the `children` prop.
 * @see https://cloudoperators.github.io/juno/?path=/docs/internal-contentheading--docs
 * @see {@link ContentHeadingProps}
 */
export declare const ContentHeading: ({ heading, className, children, ...props }: ContentHeadingProps) => ReactNode;
//# sourceMappingURL=ContentHeading.component.d.ts.map