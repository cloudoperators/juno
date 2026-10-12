import { default as React, AnchorHTMLAttributes, MouseEventHandler, ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
import { KnownIcons } from '../Icon/Icon.component';
export type BadgeVariantType = "default" | "info" | "success" | "warning" | "danger" | "error";
export interface BadgeProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "disabled"> {
    /**
     * Specify a semantic variant that determines the appearance of the badge.
     * @default "default"
     */
    variant?: BadgeVariantType;
    /**
     * Determines whether to display an icon. If set to `true`, an icon related
     * to the variant will be used. If a valid string representing a known icon
     * is provided, that icon will be displayed.
     * @default false
     */
    icon?: boolean | KnownIcons;
    /**
     * The optional text content of the badge. If children are provided, they take precedence.
     */
    text?: string;
    /**
     * Additional CSS class to apply to the badge.
     * @default ""
     */
    className?: string;
    /**
     * React nodes or a collection of React nodes to be rendered as content, taking
     * precedence over the `text` property.
     */
    children?: ReactNode;
    /**
     * Renders the badge as an `<a>` element. When combined with `onClick`, `href` takes precedence.
     */
    href?: string;
    /**
     * Click handler. Passing it renders the badge as a `<button>`, unless `href` is set.
     */
    onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
    /**
     * Disables the badge. Only meaningful when rendered as a `<button>` or `<a>`.
     * @default false
     */
    disabled?: boolean;
}
/**
 * The `Badge` component visually represents properties or states of an entity.
 * It supports multiple semantic variants, each with distinct styling. An optional
 * icon can be included to further emphasize meaning. Pass `onClick` to render the
 * badge as a `<button>`, or `href` to render it as an `<a>` element, with hover,
 * focus, active, and disabled states applied automatically.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-badge--docs
 * @see {@link BadgeProps}
 */
export declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLAnchorElement | HTMLButtonElement>>;
//# sourceMappingURL=Badge.component.d.ts.map