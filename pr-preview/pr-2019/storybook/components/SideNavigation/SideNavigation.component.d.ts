import { HTMLAttributes, ReactElement, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
import { SideNavigationListProps } from '../SideNavigationList';
/**
 * A generic vertical side navigation component.
 * Place SideNavigationItem components as children.
 * @see https://cloudoperators.github.io/juno/?path=/docs/navigation-sidenavigation-sidenavigation--docs
 * @see {@link SideNavigationProps}
 */
export declare const SideNavigation: ({ ariaLabel, children, className, ...props }: SideNavigationProps) => ReactNode;
export interface SideNavigationProps extends HTMLAttributes<HTMLElement> {
    /** The aria-label of the navigation. Specify when there are more than one elements with an implicit or explicit `role="navigation"` on a page/view. */
    ariaLabel?: string;
    /** The children of the Navigation. These should be SideNavigationItem(s) */
    children?: ReactElement<SideNavigationListProps> | ReactElement<SideNavigationListProps>[];
    /** Pass custom classname. */
    className?: string;
}
//# sourceMappingURL=SideNavigation.component.d.ts.map