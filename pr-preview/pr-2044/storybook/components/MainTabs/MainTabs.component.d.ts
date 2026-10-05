import { HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
/**
 * `MainTabs` represents primary tab navigation at the content area's top, for complete content switching.
 * Ideal for major interface tabbing; use `Tabs` for partial content areas.
 * @see https://cloudoperators.github.io/juno/?path=/docs/layout-tabs-maintabs--docs
 * @see {@link MainTabsProps}
 */
export declare const MainTabs: ({ children, defaultIndex, selectedIndex, onSelect, className, ...props }: MainTabsProps) => ReactNode;
export interface MainTabsProps extends Omit<HTMLAttributes<HTMLElement>, "onSelect"> {
    /**
     * All the child elements of MainTabs: Tab(s) inside a TabList and TabPanel(s).
     */
    children?: ReactNode;
    /**
     * The index of the Tab to be selected by default in "Uncontrolled Mode" (default) where Tabs handle their state internally. Do not use in "Controlled Mode".
     */
    defaultIndex?: number;
    /**
     * The index of the Tab to be selected by default. This enables "Controlled Mode" where the developer takes over control of the Tabs state and behaviour. Requires onSelect to be set.
     */
    selectedIndex?: number | null;
    /**
     * Handler required in "Controlled Mode".
     */
    onSelect?: (_value: number) => void;
    /**
     * Add a custom className to the whole Tabs construct.
     * @default ""
     */
    className?: string;
}
//# sourceMappingURL=MainTabs.component.d.ts.map