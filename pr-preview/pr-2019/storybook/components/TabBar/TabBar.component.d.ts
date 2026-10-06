import { default as React, HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
export type TabBarAppearance = "main" | "content";
/** @deprecated Use TabBarAppearance instead */
export type TabStyle = TabBarAppearance;
export interface TabBarContextType {
    appearance: TabBarAppearance;
    /** @deprecated Use appearance instead */
    tabStyle?: TabBarAppearance;
}
/** @deprecated Use TabBarContextType instead. Can be removed when TabNavigation is removed. */
export type TabNavigationContextType = TabBarContextType;
export declare const TabBarContext: React.Context<TabBarContextType | undefined>;
/** @deprecated Use TabBarContext instead */
export declare const TabNavigationContext: React.Context<TabBarContextType | undefined>;
/**
 * An all-purpose bar of tab-shaped items for navigation or filtering.
 * Use to wrap `<TabBarItem>` elements. For tabs with corresponding tab panels, use a tabbed content library such as react-tabs directly.
 * @see https://cloudoperators.github.io/juno/?path=/docs/navigation-tabbar-tabbar--docs
 * @see {@link TabBarProps}
 */
export declare const TabBar: ({ activeItem, ariaLabel, children, className, disabled, onActiveItemChange, appearance, tabStyle, ...props }: TabBarProps) => ReactNode;
export interface TabBarProps extends HTMLAttributes<HTMLElement> {
    /** The label of the selected tab. The `activeItem` prop set on the parent will override any `active` prop set on a child. */
    activeItem?: ReactNode;
    /** The aria-label of the navigation. Specify when there are more than one elements with an implicit or explicit `role="navigation"` on a page/view. */
    ariaLabel?: string;
    /** The child `<TabBarItem>` elements to render. */
    children?: ReactNode;
    /** A custom className */
    className?: string;
    /** Whether the tab bar is disabled. If `true`, all child items will be disabled. */
    disabled?: boolean;
    /** A handler to execute when the active tab changes */
    onActiveItemChange?: (activeItem: ReactNode) => void;
    /** The visual appearance of the TabBar. Use `main` as the first child in an AppShell. Use `content` for tabs inside page content — adds a darkened bottom border on inactive tabs. */
    appearance?: TabBarAppearance;
    /** @deprecated Use appearance instead */
    tabStyle?: TabBarAppearance;
}
/** @deprecated Use TabBarProps instead. Can be removed when TabNavigation is removed. */
export type TabNavigationProps = TabBarProps;
//# sourceMappingURL=TabBar.component.d.ts.map