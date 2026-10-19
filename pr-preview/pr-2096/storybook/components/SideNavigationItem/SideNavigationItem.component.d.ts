import { ReactNode, HTMLAttributes, MouseEventHandler, ReactElement } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
import { KnownIcons } from '../Icon/Icon.component';
export interface SideNavigationItemProps extends Omit<HTMLAttributes<HTMLElement>, "onToggle"> {
    /** Provides an accessibility label for the navigation item. */
    ariaLabel?: string;
    /** Nested SideNavigationItem components rendered as a sub-list when expanded. A string may be passed instead and will be treated as a label. */
    children?: ReactElement<SideNavigationItemProps> | ReactElement<SideNavigationItemProps>[] | string;
    /** Marks the item as non-interactive if set to true. */
    disabled?: boolean;
    /** URL for navigation; transforms the item into a link. */
    href?: string;
    /** Defines the icon to display alongside the label. */
    icon?: KnownIcons;
    /** Text label displayed for the navigation item. Takes precedence over a label passed as children. */
    label?: ReactNode;
    /** Function handler triggered upon item click. */
    onClick?: MouseEventHandler<HTMLElement>;
    /** Fired when the user clicks the chevron to expand or collapse the nested children. Receives the next open state. */
    onToggle?: (_isOpen: boolean) => void;
    /** Sets the open state of the nested children. The component owns the open state internally but re-syncs to this prop whenever the parent updates it, so it can be used either as the initial value or to drive the state from the outside. */
    open?: boolean;
    /** Indicates if the item is currently selected or active. */
    selected?: boolean;
}
/**
 * SideNavigationItem is a versatile component designed to be used within the SideNavigation component,
 * providing navigational functionalities in hierarchical interfaces.
 *
 * It serves as an individual item representing a link or action within a navigation menu,
 * capable of displaying text labels, icons, and handling click events.
 *
 * Key Features:
 * - Hierarchical Structure: Supports nested items for multi-level navigation through its children prop (up to 3 levels).
 * - Interactive Elements: Can operate as a link using the href prop or execute functions via onClick handlers.
 * - State Indicators: Supports active and disabled states, visually indicating the current focus or usability.
 * - Expandable Sections: When nested, automatically renders expand/collapse controls for child navigation items.
 * - Customization: Offers extensive styling versatility through CSS classes and optional icon rendering for visual enhancement.
 *
 * @see https://cloudoperators.github.io/juno/?path=/docs/navigation-sidenavigation-sidenavigationitem--docs
 * @see {@link SideNavigationItemProps}
 */
export declare const SideNavigationItem: ({ ariaLabel, children, disabled, href, icon, label, onClick, onToggle, open, selected, ...props }: SideNavigationItemProps) => ReactNode;
//# sourceMappingURL=SideNavigationItem.component.d.ts.map