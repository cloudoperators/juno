import { HTMLAttributes, MouseEventHandler, ReactElement, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
/**
 * `PageHeader` component renders the top header of an application.
 * It includes customizable `logo`, `title`, and other options.
 * @see https://cloudoperators.github.io/juno/?path=/docs/layout-pageheader--docs
 * @see {@link PageHeaderProps}
 */
export declare const PageHeader: ({ heading, applicationName, href, className, logo, children, onClick, ...props }: PageHeaderProps) => ReactNode;
export interface PageHeaderProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Name of the application.
     * @default ""
     */
    applicationName?: string | ReactElement;
    /**
     * Deprecated - Replaced by `applicationName`. If `applicationName` is provided, it takes precedence.
     * @default ""
     */
    heading?: string | ReactElement;
    /**
     * Link to open when applicationName or logo is clicked.
     * @default ""
     */
    href?: string;
    /**
     * Custom class names.
     * @default ""
     */
    className?: string;
    /**
     * Application logo.
     * @default true
     */
    logo?: boolean | ReactElement;
    /**
     * Handler executed on click of `applicationName` or `logo`.
     */
    onClick?: MouseEventHandler<HTMLDivElement>;
    /**
     * Children to render in header like user info, avatar, log-in/out button, etc.
     */
    children?: ReactNode;
}
//# sourceMappingURL=PageHeader.component.d.ts.map