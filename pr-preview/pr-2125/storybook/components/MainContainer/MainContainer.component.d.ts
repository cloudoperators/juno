import { HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
/**
 * The `MainContainer` is the core container for application content, ideal for manual scaffold setups.
 * In most instances, `AppShell` offers a comprehensive layout alternative.
 * @see https://cloudoperators.github.io/juno/?path=/docs/internal-maincontainer--docs
 * @see {@link MainContainerProps}
 */
export declare const MainContainer: ({ className, children, ...props }: MainContainerProps) => ReactNode;
export interface MainContainerProps extends HTMLAttributes<HTMLElement> {
    /**
     * Custom CSS class names for styling the main container.
     * @default ""
     */
    className?: string;
    /**
     * Components or content to render within the main container.
     */
    children?: ReactNode;
}
//# sourceMappingURL=MainContainer.component.d.ts.map