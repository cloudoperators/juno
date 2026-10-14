import { default as React, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
export interface TabsContextType {
    variant?: TabsVariant;
}
export declare const useTabsContext: () => TabsContextType;
/**
 * @deprecated Tabs is deprecated and may be removed in any of the next major releases. Once TabBar is refactored to being representational-only, you will be able to use TabBar in combination with react-tabs directly if you want to keep the react-tabs internal logic.
 * A Tabs component.
 * The parent wrapping TabList, Tab, and TabPanel subcomponents.
 * For a navigation that looks like tabs, but runs onClick handlers or contains hrefs, use TabBar instead.
 * Tabs are used to provide a tabbed section within the content area when combining static content and tabbed content on the same page. You will probably want to use a 'Container' (px=false) inside the TabPanels to get nice padding.
 * @see https://cloudoperators.github.io/juno/?path=/docs/layout-tabs-tabs--docs
 * @see {@link TabsProps}
 */
export declare const TabsBase: {
    ({ children, defaultIndex, selectedIndex, onSelect, variant, className, ...props }: TabsProps): React.JSX.Element;
    tabsRole: string;
};
export declare const Tabs: React.FC<TabsProps> & {
    tabsRole: string;
};
export type TabsVariant = "main" | "content" | "codeblocks";
export interface TabsProps {
    /** All the child elements of the Tabs: Tab(s) inside a TabList and TabPanel(s) */
    children?: ReactNode;
    /** The index of the Tab to be selected by default in "Uncontrolled Mode" (default) where Tabs handle their state internally. Do not use in "Controlled Mode".*/
    defaultIndex?: number;
    /** The index of the Tab to be selected by default. This enables "Controlled Mode" where the developer takes over control of the Tabs state and behaviour. Requires onSelect to be set.*/
    selectedIndex?: number | null;
    /** Handler required in "Controlled Mode" */
    onSelect?: (value: number) => void;
    /** Switch on Main Tab styles and context if needed */
    variant?: TabsVariant;
    /** Add a custom className to the whole Tabs construct */
    className?: string;
}
//# sourceMappingURL=Tabs.component.d.ts.map