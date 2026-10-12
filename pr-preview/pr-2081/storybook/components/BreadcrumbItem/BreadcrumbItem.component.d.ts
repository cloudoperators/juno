import { ReactNode, HTMLAttributes, MouseEventHandler } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
import { KnownIcons } from '../Icon/Icon.component';
export interface BreadcrumbItemProps extends HTMLAttributes<HTMLElement> {
    /**
     * The type of icon to display within the breadcrumb item.
     */
    icon?: KnownIcons;
    /**
     * The URL that the breadcrumb item points to for navigation.
     * @default undefined
     */
    href?: string;
    /**
     * The text to display within the breadcrumb item.
     * @default "Item"
     */
    label?: string;
    /**
     * The value for the `aria-label` attribute, enhancing accessibility by providing a textual description.
     */
    ariaLabel?: string;
    /**
     * Specifies whether this item is the last or currently active breadcrumb.
     * @default false
     */
    active?: boolean;
    /**
     * The click event handler for the breadcrumb item, called when the item is clicked.
     */
    onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
    /**
     * If `true`, disables the breadcrumb item, preventing interaction.
     * @default false
     */
    disabled?: boolean;
    /**
     * Additional CSS class names to apply for custom styling of the breadcrumb item.
     * @default ""
     */
    className?: string;
    /**
     * Custom content to be rendered inside the breadcrumb item, replacing default content.
     * This takes precedence over other content.
     */
    children?: ReactNode;
}
/**
 * The `BreadcrumbItem` component represents an individual item within a Breadcrumb component.
 * It can render as either a static label or a navigable link, depending on the `active`
 * and `disabled` states. It supports custom icons, labels, and click functionality.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-breadcrumb-breadcrumbitem--docs
 * @see {@link BreadcrumbItemProps}
 */
export declare const BreadcrumbItem: ({ href, label, ariaLabel, active, children, disabled, onClick, className, icon, ...props }: BreadcrumbItemProps) => ReactNode;
//# sourceMappingURL=BreadcrumbItem.component.d.ts.map