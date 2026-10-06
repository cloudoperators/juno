import { HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
/**
 * A generic horizontal top level navigation component. To be placed below the application header but above application content.
 * Place `TopNavigationItem` elements as children.
 * @see https://cloudoperators.github.io/juno/?path=/docs/navigation-topnavigation-topnavigation--docs
 * @see {@link TopNavigationProps}
 */
export declare const TopNavigation: ({ activeItem, ariaLabel, children, className, disabled, onActiveItemChange, ...props }: TopNavigationProps) => ReactNode;
export interface TopNavigationProps extends HTMLAttributes<HTMLElement> {
    /** The active navigation item by label */
    activeItem?: ReactNode;
    /** The aria-label of the navigation. Specify when there are more than one elements with an implicit or explicit `role="navigation"` on a page/view. */
    ariaLabel?: string;
    /** The children of the Navigation. Typically these should be TopNavigationItem(s) */
    children?: ReactNode;
    /** Pass a custom classname. */
    className?: string;
    /** Whether the navigation is disabled */
    disabled?: boolean;
    /** Handler to execute when the active item changes */
    onActiveItemChange?: (activeItem: ReactNode) => void;
}
//# sourceMappingURL=TopNavigation.component.d.ts.map