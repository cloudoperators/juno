import { HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
    /**
     * Additional CSS classes for styling the breadcrumb component.
     * @default ""
     */
    className?: string;
    /**
     * Optional React nodes or a collection of React nodes to be rendered as custom content.
     * The `BreadcrumbItem` component is typically used.
     */
    children?: ReactNode;
}
/**
 * The `Breadcrumb` component structures navigational links in a breadcrumb trail, providing a way to display
 * hierarchical navigation paths. It efficiently manages:
 * - Wrapping `BreadcrumbItem` or other custom components to form breadcrumb navigation.
 * - Automatic insertion of separator icons between items, enhancing visibility.
 * - Filtering out invalid React elements to prevent rendering errors.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-breadcrumb-breadcrumb--docs
 * @see {@link BreadcrumbProps}
 */
export declare const Breadcrumb: ({ children, className, ...props }: BreadcrumbProps) => ReactNode;
//# sourceMappingURL=Breadcrumb.component.d.ts.map