import { default as React, HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
export interface TabNavigationContextType {
    tabStyle: TabStyle;
}
export declare const TabNavigationContext: React.Context<TabNavigationContextType | undefined>;
/**
 * A TabNavigation parent component. Use to wrap `<TabNavigationItem>` elements inside. For tabs with corresponding tab panels, use `<Tabs>` instead.
 * @see https://cloudoperators.github.io/juno/?path=/docs/navigation-tabnavigation-tabnavigation--docs
 * @see {@link TabNavigationProps}
 */
export declare const TabNavigation: ({ activeItem, ariaLabel, children, className, disabled, onActiveItemChange, tabStyle, ...props }: TabNavigationProps) => ReactNode;
export type TabStyle = "main" | "content";
export interface TabNavigationProps extends HTMLAttributes<HTMLElement> {
    /** The label of the selected tab. The `activeItem` prop set on the parent will override / take precedence over any `active` prop that may be set on a child. */
    activeItem?: ReactNode;
    /** The aria-label of the navigation. Specify when there are more than one elements with an implicit or explicit `role="navigation"` on a page/view. */
    ariaLabel?: string;
    /** The child `<TabNavigationItem>` elements to render. */
    children?: ReactNode;
    /** A custom className to be rendered on the tab navigation */
    className?: string;
    /** Whether the tab navigation is disabled. If set to `true`, all child tab navigation item elements will be disabled. */
    disabled?: boolean;
    /** A handler to execute when the active tab changes */
    onActiveItemChange?: (activeItem: ReactNode) => void;
    /** The stylistic variant of the Tabs: Use `main` as the first child in an `Appshell` (when manually scaffolding, as first child of `juno-content-container`). For tabs inside the page content use "content". `<TabNavigation tabStyle="main">` will have no darkened border on the bottom of inactive tabs, `tabStyle="content"` will.*/
    tabStyle?: TabStyle;
}
//# sourceMappingURL=TabNavigation.component.d.ts.map