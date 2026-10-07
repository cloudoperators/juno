import { HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
import { TabsVariant } from '../Tabs/Tabs.component';
/**
 * @deprecated TabList is deprecated and may be removed in any of the next major releases. Use react-tabs directly instead.
 * A tabList component wraps all individual Tabs inside a parent Tabs component
 * @see https://cloudoperators.github.io/juno/?path=/docs/layout-tabs-tablist--docs
 * @see {@link TabListProps}
 */
export declare const TabList: {
    ({ variant, children, ...props }: TabListProps): ReactNode;
    tabsRole: string;
};
export interface TabListProps extends HTMLAttributes<HTMLUListElement> {
    /** Pick the TabList style */
    variant?: TabsVariant;
    /** The individual child Tabs to render */
    children?: ReactNode;
}
//# sourceMappingURL=TabList.component.d.ts.map