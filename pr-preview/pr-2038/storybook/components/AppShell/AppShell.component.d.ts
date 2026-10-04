import { HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
/**
 * The `AppShell` component provides the foundational layout structure for the application.
 * It acts similarly to an HTML `body` element, organizing pages with headers, footers,
 * navigation, and content areas. For simpler manual layout setup, consider using `AppBody`.
 * @see https://cloudoperators.github.io/juno/?path=/docs/layout-appshell--docs
 * @see {@link AppShellProps}
 */
export declare const AppShell: ({ children, className, embedded, pageHeader, pageFooter, fullWidthContent, sideNavigation, topNavigation, ...props }: AppShellProps) => ReactNode;
export interface AppShellProps extends HTMLAttributes<HTMLElement> {
    /**
     * The main content of the app.
     */
    children?: ReactNode;
    /**
     * Add a custom class name to style the component.
     * @default ""
     */
    className?: string;
    /**
     * Determines if the app should be rendered in embedded mode, reducing layout components to core content.
     * @default false
     */
    embedded?: boolean;
    /**
     * Pass either a `<PageHeader>` component or a string to be used as the application name in the standard page header.
     * @default `<PageHeader />`
     */
    pageHeader?: ReactNode;
    /**
     * An optional `<PageFooter>` component if specified. Uses the default `<PageFooter />` if undefined.
     * @default `<PageFooter />`
     */
    pageFooter?: ReactNode;
    /**
     * Optional `<TopNavigation>` component. Only rendered if provided.
     */
    topNavigation?: ReactNode;
    /**
     * Optional `<SideNavigation>` component. Only rendered if provided.
     */
    sideNavigation?: ReactNode;
    /**
     * Indicates whether the main content should span the full viewport width.
     * Defaults to `false` unless embedded, allowing content to occupy full width.
     */
    fullWidthContent?: boolean;
}
//# sourceMappingURL=AppShell.component.d.ts.map