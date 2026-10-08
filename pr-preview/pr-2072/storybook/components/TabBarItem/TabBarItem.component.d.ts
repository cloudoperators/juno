import { HTMLAttributes, MouseEventHandler, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
import { KnownIcons } from '../Icon/Icon.component.js';
/**
 * An individual TabBar item. Use wrapped in a `<TabBar>` parent component.
 * @see https://cloudoperators.github.io/juno/?path=/docs/navigation-tabbar-tabbaritem--docs
 * @see {@link TabBarItemProps}
 */
export declare const TabBarItem: ({ active, ariaLabel, children, className, disabled, href, icon, label, onClick, value, ...props }: TabBarItemProps) => ReactNode;
export interface TabBarItemProps extends HTMLAttributes<HTMLElement> {
    /** Whether the tab bar item is active */
    active?: boolean;
    /** The aria label of the item */
    ariaLabel?: string;
    /** The children to render. Also pass a `value` or `label` prop to make navigation work. */
    children?: ReactNode;
    /** A custom className */
    className?: string;
    /** Whether the item is disabled */
    disabled?: boolean;
    /** Pass a href to render the item as an `<a>` */
    href?: string;
    /** Pass the name of an icon to render in the tab. Can be any icon included with Juno. */
    icon?: KnownIcons;
    /** The label of the item. Must be unique within any given `<TabBar>`. */
    label?: string;
    /** A custom handler to execute when the tab is clicked */
    onClick?: MouseEventHandler<HTMLElement>;
    /** An optional technical identifier. If not passed, the label is used. NOTE: If value is passed, it MUST be used when setting the activeItem prop on the parent TabBar. */
    value?: string;
}
/** @deprecated Use TabBarItemProps instead. Can be removed when TabNavigationItem is removed. */
export type TabNavigationItemProps = TabBarItemProps;
//# sourceMappingURL=TabBarItem.component.d.ts.map