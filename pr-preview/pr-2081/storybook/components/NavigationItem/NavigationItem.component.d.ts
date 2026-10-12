import { ReactNode, HTMLAttributes, MouseEventHandler } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
import { KnownIcons } from '../Icon/Icon.component';
/**
 * `NavigationItem` acts as a singular navigational unit within a `Navigation`,
 * offering styles for active and inactive states, and supporting disabled
 * interactions internally.
 * @see https://cloudoperators.github.io/juno/?path=/docs/internal-navigation-navigationitem--docs
 * @see {@link NavigationItemProps}
 */
export declare const NavigationItem: ({ active, activeItemStyles, ariaLabel, children, className, disabled, icon, inactiveItemStyles, label, href, onClick, value, wrapperClassName, ...props }: NavigationItemProps) => ReactNode;
export interface NavigationItemProps extends HTMLAttributes<HTMLElement> {
    /**
     * Whether the navigation item is the currently active item. If an active item is set on the parent, the one on the parent will win.
     * @default false
     */
    active?: boolean;
    /**
     * Styles to apply when the item is active.
     * @default ""
     */
    activeItemStyles?: string;
    /**
     * The aria-label of the item for accessibility.
     */
    ariaLabel?: string;
    /**
     * Pass custom classNames to the item itself.
     * @default ""
     */
    className?: string;
    /**
     * The child nodes of the item, overriding `label` if specified.
     */
    children?: ReactNode;
    /**
     * Determines if the item is disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * An icon to render within the item for visual indication.
     */
    icon?: KnownIcons;
    /**
     * Styles applied to inactive items, ensuring differentiation from active.
     * @default ""
     */
    inactiveItemStyles?: string;
    /**
     * The label of the item, displayed if `children` are not provided.
     */
    label?: string;
    /**
     * Presence transforms the item into an anchor, enabling navigation.
     */
    href?: string;
    /**
     * Handler executed during item clicks for operational logic.
     */
    onClick?: MouseEventHandler<EventTarget>;
    /**
     * Value for technical/item identification purposes, utilized when differing from `label` or child strings.
     */
    value?: string;
    /**
     * Pass className to parent `<li>` element, styling the container.
     * @default ""
     */
    wrapperClassName?: string;
}
//# sourceMappingURL=NavigationItem.component.d.ts.map