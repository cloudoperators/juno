import { default as React, ReactNode, HTMLAttributes, ElementType, ComponentPropsWithRef, Key } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
import { KnownIcons } from '../Icon/Icon.component';
export interface PopupMenuContextType {
    close: () => void;
    isOpen: boolean;
    menuSize: "normal" | "small";
}
export interface PopupMenuProps extends HTMLAttributes<HTMLElement> {
    /** Whether the PopupMenu is disabled. */
    disabled?: boolean;
    /** The icon to render when using the default toggle. Will be ignored if a PopupMenu.Toggle child is passed. */
    icon?: KnownIcons;
    /** The size of the menu and its items. */
    menuSize?: "normal" | "small";
    /** Handler to run when the Menu closes. */
    onClose?: () => void;
    /** Handler to run when the Menu opens. */
    onOpen?: () => void;
}
export interface PopupMenuToggleProps extends HTMLAttributes<HTMLElement> {
    /** Element type to render as */
    as?: ElementType;
    /** Whether the toggle is disabled */
    disabled?: boolean;
}
type HeadlessMenuItemsProps = ComponentPropsWithRef<ElementType>;
export interface PopupMenuOptionsProps extends HeadlessMenuItemsProps {
    as?: ElementType;
    className?: string;
    children?: ReactNode;
    key?: Key;
}
export interface PopupMenuItemBag {
    active: boolean;
    disabled: boolean;
    focus: boolean;
}
export interface PopupMenuItemProps extends Omit<HTMLAttributes<HTMLElement>, "children"> {
    as?: ElementType;
    children?: ReactNode | ((_itemBag: PopupMenuItemBag) => ReactNode);
    className?: string;
    disabled?: boolean;
    href?: string;
    icon?: KnownIcons;
    label?: string;
    rel?: string;
    target?: string;
}
export interface PopupMenuSectionProps {
    children?: ReactNode;
    className?: string;
}
export interface PopupMenuSectionHeadingProps {
    children?: ReactNode;
    className?: string;
    label?: string;
}
export interface PopupMenuSectionSeparatorProps {
    className?: string;
}
declare const PopupMenuContext: React.Context<PopupMenuContextType | null>;
export declare const usePopupMenuContext: () => PopupMenuContextType;
export { PopupMenuContext };
/**
 * A Popup Menu component that wraps Headless UI Menu. The Menu will be rendered into a Juno Portal, so using Juno's PortalProvider (which is already included when using Juno's AppShell) is mandatory.
 * @see https://cloudoperators.github.io/juno/?path=/docs/wip-popupmenu--docs
 * @see {@link PopupMenuProps}
 */
declare const PopupMenu: ({ children, className, disabled, icon, menuSize, onClose, onOpen, ...props }: PopupMenuProps) => ReactNode;
export declare const PopupMenuToggle: ({ as, disabled, children, className, ...props }: PopupMenuToggleProps) => ReactNode;
export declare const PopupMenuOptions: ({ children, className, ...props }: PopupMenuOptionsProps) => ReactNode;
export declare const PopupMenuItem: ({ as, children, className, disabled, href, icon, label, rel, target, ...props }: PopupMenuItemProps) => ReactNode;
export declare const PopupMenuSection: ({ children, className, ...props }: PopupMenuSectionProps) => ReactNode;
export declare const PopupMenuSectionHeading: ({ children, label, className, ...props }: PopupMenuSectionHeadingProps) => ReactNode;
export declare const PopupMenuSectionSeparator: ({ className, ...props }: PopupMenuSectionSeparatorProps) => ReactNode;
export { PopupMenu };
//# sourceMappingURL=PopupMenu.component.d.ts.map