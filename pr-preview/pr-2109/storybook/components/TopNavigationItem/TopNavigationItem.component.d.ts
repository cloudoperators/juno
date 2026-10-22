import { HTMLAttributes, MouseEventHandler, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
import { KnownIcons } from '../Icon/Icon.component';
/**
 * An individual item of a top level navigation. Place inside TopNavigation.
 * @see https://cloudoperators.github.io/juno/?path=/docs/navigation-topnavigation-topnavigationitem--docs
 * @see {@link TopNavigationItemProps}
 */
export declare const TopNavigationItem: ({ active, ariaLabel, children, className, disabled, href, icon, label, onClick, value, ...props }: TopNavigationItemProps) => ReactNode;
export interface TopNavigationItemProps extends HTMLAttributes<HTMLElement> {
    /** Whether the item is the currently active item */
    active?: boolean;
    /** The aria label of the item */
    ariaLabel?: string;
    /** The children to render. In order to make the navigation work, you also need to pass a `value` or `label` prop, or both. */
    children?: ReactNode;
    /** Whether the item is disabled */
    disabled?: boolean;
    /** pass an icon name */
    icon?: KnownIcons;
    /** The label of the item */
    label?: string;
    /** Pass a custom className */
    className?: string;
    /** The link the item should point to. Will render the item as an anchor if passed */
    href?: string;
    /** A handler to execute once the navigation item is clicked. Will render the item as a button element if passed */
    onClick?: MouseEventHandler<HTMLElement>;
    /** An optional technical identifier for the tab. If not passed, the label will be used to identify the tab. NOTE: If value is passed, the value of the active tab MUST be used when setting the activeItem prop on the parent TabNavigation.*/
    value?: string;
}
//# sourceMappingURL=TopNavigationItem.component.d.ts.map