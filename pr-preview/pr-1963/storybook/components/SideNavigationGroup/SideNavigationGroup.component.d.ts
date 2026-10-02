import { ReactElement, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
import { SideNavigationItemProps } from '../SideNavigationItem';
export interface SideNavigationGroupProps {
    /** Represents the nested components within the navigation group. */
    children?: ReactElement<SideNavigationItemProps> | ReactElement<SideNavigationItemProps>[];
    /** Label displayed for the navigation group. */
    label: ReactNode;
    /** Sets the open state of the navigation group. The component owns the open state internally but re-syncs to this prop whenever the parent updates it, so it can be used either as the initial value or to drive the state from the outside. */
    open?: boolean;
    /** Fired when the user clicks the group to toggle it. Receives the next open state. */
    onToggle?: (_isOpen: boolean) => void;
}
/**
 * SideNavigationGroup is a component designed to encapsulate and organize multiple
 * SideNavigationItem components, forming a logical grouping within a side navigation structure.
 *
 * This component is used to create and manage expandable and collapsible sections of navigation,
 * allowing users to efficiently navigate hierarchical menus.
 *
 * @see https://cloudoperators.github.io/juno/?path=/docs/navigation-sidenavigation-sidenavigationgroup--docs
 * @see {@link SideNavigationGroupProps}
 **/
export declare const SideNavigationGroup: ({ children, label, open, onToggle, }: SideNavigationGroupProps) => ReactNode;
//# sourceMappingURL=SideNavigationGroup.component.d.ts.map