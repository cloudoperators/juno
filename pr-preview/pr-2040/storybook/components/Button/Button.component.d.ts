import { default as React, HTMLProps, MouseEventHandler, ReactNode, ButtonHTMLAttributes } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
import { KnownIcons } from '../Icon/Icon.component';
/**
 * The `Button` component provides an interactive element for user actions, supporting various sizes,
 * styles, and states such as disabled or in-progress.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-button--docs
 * @see {@link ButtonProps}
 */
export declare const Button: React.ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & React.RefAttributes<HTMLAnchorElement | HTMLButtonElement>>;
export type ButtonVariant = "primary" | "primary-danger" | "default" | "subdued";
type ButtonSize = "small" | "xs" | "default";
export interface ButtonProps extends Omit<HTMLProps<HTMLAnchorElement> | HTMLProps<HTMLButtonElement>, "size"> {
    /**
     * Child elements or text to be rendered inside the button.
     */
    children?: ReactNode;
    /**
     * Choose a variant for your button style. Defaults to "default" if unspecified.
     * @default "default"
     */
    variant?: ButtonVariant;
    /**
     * Chooses the button size. Defaults to "default" if unspecified.
     * @default "default"
     */
    size?: ButtonSize;
    /**
     * Indicates if the button is disabled.
     */
    disabled?: boolean;
    /**
     * Optionally specify an href. This renders the Button as an `<a>` element.
     */
    href?: string;
    /**
     * Button label can be passed directly or as children.
     */
    label?: string;
    /**
     * Specify a title for accessibility purposes. Defaults to the label if not specified.
     */
    title?: string;
    /**
     * Pass the name of an icon that the button should display. Can be any icon included with Juno.
     */
    icon?: KnownIcons;
    /**
     * Additional class names for styling.
     * @default ""
     */
    className?: string;
    /**
     * Click event handler for the button.
     */
    onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
    /**
     * Button type.
     * @default "button"
     */
    type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
    /**
     * Indicates whether the button's action is in progress.
     * @default false
     */
    progress?: boolean;
    /**
     * Display an alternative label while the button's action is in progress.
     */
    progressLabel?: string;
}
export {};
//# sourceMappingURL=Button.component.d.ts.map