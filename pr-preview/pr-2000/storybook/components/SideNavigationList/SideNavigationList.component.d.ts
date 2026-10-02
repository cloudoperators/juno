import { ReactElement, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
import { SideNavigationGroupProps } from '../SideNavigationGroup';
import { SideNavigationItemProps } from '../SideNavigationItem/SideNavigationItem.component';
export interface SideNavigationListProps {
    /** Accommodates a collection of allowable React elements to be rendered, essential for the navigation list's functionality */
    children: ReactElement<SideNavigationItemProps> | ReactElement<SideNavigationItemProps>[] | ReactElement<SideNavigationGroupProps> | ReactElement<SideNavigationGroupProps>[];
}
/**
 * The `SideNavigationList` component is a fundamental building block within `SideNavigation`, designed to arrange and render navigation items and groups in a structured list format.
 * It ensures visually consistent and space-efficient presentation of navigation links embedded within the sidebar.
 * This component serves as a container for SideNavigationItem and SideNavigationGroup elements, effectively arranging them for navigational usage.
 * @see https://cloudoperators.github.io/juno/?path=/docs/navigation-sidenavigation-sidenavigationlist--docs
 * @see {@link SideNavigationListProps}
 */
export declare const SideNavigationList: ({ children }: SideNavigationListProps) => ReactNode;
//# sourceMappingURL=SideNavigationList.component.d.ts.map