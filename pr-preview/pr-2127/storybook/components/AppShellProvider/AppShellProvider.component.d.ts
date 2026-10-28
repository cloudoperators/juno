import { ReactNode } from '../../../../../node_modules/.pnpm/react@19.3.0/node_modules/react';
/**
 * The `AppShellProvider` component serves as a wrapper for Juno apps. It integrates both
 * `StyleProvider` and `PortalProvider`, offering consistent theming and managing portals across the app.
 * This provider can optionally render within a `ShadowRoot` to encapsulate styles independently.
 * @see https://cloudoperators.github.io/juno/?path=/docs/layout-appshellprovider--docs
 * @see {@link AppShellProviderProps}
 */
export declare const AppShellProvider: ({ shadowRoot, shadowRootMode, stylesWrapper, theme, children, }: AppShellProviderProps) => ReactNode;
export type AppShellStyleWrapper = "head" | "inline";
interface WrapperProps {
    /**
     * React nodes or a collection of React nodes to be rendered as content.
     */
    children?: ReactNode;
    /**
     * Determines whether the app is rendered inside a `ShadowRoot`.
     * Only set to `false` if the app runs as a standalone application.
     * @default true
     */
    shadowRoot?: boolean;
    /**
     * Specifies the mode of the `ShadowRoot`.
     * @default "open"
     */
    shadowRootMode?: ShadowRootMode;
}
export interface AppShellProviderProps extends WrapperProps {
    /**
     * Specifies where app stylesheets are imported.
     * This is relevant only if `shadowRoot` is `false`. Must be `"inline"` if using a `ShadowRoot`.
     * @default "inline"
     */
    stylesWrapper?: AppShellStyleWrapper;
    /**
     * Determines the theme of the application, choosing between `"theme-dark"` or `"theme-light"`.
     * Defaults to the global default theme name.
     * @default DEFAULT_THEME_NAME
     */
    theme?: "theme-dark" | "theme-light";
}
export {};
//# sourceMappingURL=AppShellProvider.component.d.ts.map