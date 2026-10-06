import { HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
/**
 * The `HeaderContainer` component serves as a fixed, styled container at the top
 * of a page or view, supporting full-width or constrained layouts.
 * @see https://cloudoperators.github.io/juno/?path=/docs/internal-headercontainer--docs
 * @see {@link HeaderContainerProps}
 */
export declare const HeaderContainer: ({ fullWidth, className, children, ...props }: HeaderContainerProps) => ReactNode;
export interface HeaderContainerProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Whether the page/view content will stretch over the full width of the viewport or not.
     * @default false
     */
    fullWidth?: boolean;
    /**
     * Custom CSS class name to apply to the header container.
     * @default ""
     */
    className?: string;
    /**
     * Content to be rendered within the header container.
     */
    children?: ReactNode;
}
//# sourceMappingURL=HeaderContainer.component.d.ts.map