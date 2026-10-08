import { HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
export interface ContentContainerProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Additional CSS class names for styling the content container.
     * @default ""
     */
    className?: string;
    /** Components or elements to render inside the content container. */
    children?: ReactNode;
}
/**
 * The `ContentContainer` serves as a wrapper for application content, designed for manual layout creation.
 * It can center content when the browser window is wider than the max breakpoint.
 * @see https://cloudoperators.github.io/juno/?path=/docs/internal-contentcontainer--docs
 * @see {@link ContentContainerProps}
 */
export declare const ContentContainer: ({ className, children, ...props }: ContentContainerProps) => ReactNode;
//# sourceMappingURL=ContentContainer.component.d.ts.map