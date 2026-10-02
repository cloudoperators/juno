import { HTMLAttributes, MouseEventHandler, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
import { KnownIcons } from '../Icon/Icon.component.js';
/**
 * An individual Tab Navigation Item. Use wrapped in a `<TabNavigation>` parent component.
 * @see https://cloudoperators.github.io/juno/?path=/docs/navigation-tabnavigation-tabnavigationitem--docs
 * @see {@link TabProps}
 */
export declare const TabNavigationItem: ({ active, ariaLabel, children, className, disabled, href, icon, label, onClick, value, ...props }: TabNavigationItemProps) => ReactNode;
export interface TabNavigationItemProps extends HTMLAttributes<HTMLElement> {
    /** Whether the tab navigation item is active */
    active?: boolean;
    /** The aria label of the item */
    ariaLabel?: string;
    /** The children to render. In order to make the navigation work, you also need to pass a `value` or `label` prop, or both. */
    children?: ReactNode;
    /** Pass a custom className */
    className?: string;
    /** Whether the tab navigation item is disabled */
    disabled?: boolean;
    href?: string;
    /** Pass the name of an icon to render in the Tab. Can be any icon included with Juno. */
    icon?: KnownIcons;
    /** The label of the tab navigation item. Must be unique within any given `<TabNavigation>` group. */
    label?: string;
    /** Pass a custom handler to execute when the tab is clicked */
    onClick?: MouseEventHandler<HTMLElement>;
    /** An optional technical identifier for the tab. If not passed, the label will be used to identify the tab. NOTE: If value is passed, the value of the active tab MUST be used when setting the activeItem prop on the parent TabNavigation.*/
    value?: string;
}
//# sourceMappingURL=TabNavigationItem.component.d.ts.map