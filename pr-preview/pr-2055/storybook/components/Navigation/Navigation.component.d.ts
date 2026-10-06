import { default as React, ReactNode, HTMLAttributes } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
type ItemChangeHandler = (value: ReactNode) => void;
type AddItemFunction = (key: ReactNode, children: ReactNode, label: string, value: string) => void;
export interface NavigationContextType {
    activeItem?: ReactNode;
    addItem?: AddItemFunction;
    handleActiveItemChange?: ItemChangeHandler;
    navigationDisabled?: boolean;
    navigationRole?: string;
}
export declare const NavigationContext: React.Context<NavigationContextType | undefined>;
/**
 * A generic `Navigation` component that offers context-managed item selection,
 * designed for internal use with semantic wrappers like `SideNavigation`,
 * `TabNavigation`, and `TopNavigation`.
 * @see https://cloudoperators.github.io/juno/?path=/docs/internal-navigation--docs
 * @see {@link NavigationProps}
 */
export declare const Navigation: ({ activeItem, ariaLabel, children, className, disabled, onActiveItemChange, ...props }: NavigationProps) => ReactNode;
export interface NavigationProps extends HTMLAttributes<HTMLUListElement> {
    /**
     * The currently active item. Pass the `value`, `label` prop, or the child string of the respective NavigationItem.
     */
    activeItem?: ReactNode;
    /**
     * The aria label of the navigation for accessibility purposes.
     */
    ariaLabel?: string;
    /**
     * The child navigation items to be rendered within the navigation component.
     */
    children?: ReactNode;
    /**
     * Pass a custom className to the navigation parent element.
     * @default ""
     */
    className?: string;
    /**
     * Whether the navigation is disabled, affecting interactivity for all children.
     * @default false
     */
    disabled?: boolean;
    /**
     * Handler to execute when the active item changes.
     */
    onActiveItemChange?: ItemChangeHandler;
}
export {};
//# sourceMappingURL=Navigation.component.d.ts.map