import { HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
/**
 * @deprecated TabPanel is deprecated and may be removed in any of the next major releases. Once TabBar is refactored to being representational-only, you will be able to use TabBar in combination with react-tabs directly if you want to keep the react-tabs internal logic.
 * The TabPanel holds content related to a Tab in a TabList in a wrapping Tab component. Not to be used standalone / outside a Tabs wrapper.
 *  * @see https://cloudoperators.github.io/juno/?path=/docs/layout-tabs-tabpanel--docs
 * @see {@link TabPanelProps}
 */
export declare const TabPanel: {
    ({ children, className, ...props }: TabPanelProps): ReactNode;
    tabsRole: string;
};
export interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
}
//# sourceMappingURL=TabPanel.component.d.ts.map