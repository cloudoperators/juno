/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { StyleProvider } from "../StyleProvider"
import { ShadowRoot } from "../ShadowRoot"
import { PortalProvider } from "../PortalProvider"
import { DEFAULT_THEME_NAME } from "../StyleProvider/StyleProvider.component"

const Wrapper: React.FC<WrapperProps> = ({ children, shadowRoot, shadowRootMode }) => {
  return shadowRoot ? (
    <ShadowRoot mode={shadowRootMode}>
      <>{children}</>
    </ShadowRoot>
  ) : (
    children
  )
}

/**
 * The `AppShellProvider` component serves as a wrapper for Juno apps. It integrates both
 * `StyleProvider` and `PortalProvider`, offering consistent theming and managing portals across the app.
 * This provider can optionally render within a `ShadowRoot` to encapsulate styles independently.
 *
 * @component
 * @param {boolean} [shadowRoot] Determines if the app should be encapsulated within a `ShadowRoot`.
 * This is useful for isolating styles and components, especially when embedding the app.
 * Defaults to `true`.
 * @param {string} [shadowRootMode] Sets the mode of the `ShadowRoot`. Common values are `"open"` or `"closed"`.
 * Defaults to `"open"`.
 * @param {AppShellStyleWrapper} [stylesWrapper] Specifies where stylesheets are imported.
 * Relevant only if `shadowRoot` is `false`. Must be `"inline"` if using a `ShadowRoot`.
 * Defaults to `"inline"`.
 * @param {string} [theme] Chooses between light or dark theme variants: `"theme-dark"` or `"theme-light"`.
 * Uses the globally defined default theme if none specified.
 * @param {React.ReactNode} [children] React nodes or a collection of nodes to be rendered within the provider.
 * @returns {React.ReactElement} A JSX element wrapping provided children with style and portal management configurations.
 */
export const AppShellProvider: React.FC<AppShellProviderProps> = ({
  shadowRoot = true,
  shadowRootMode = "open",
  stylesWrapper = "inline",
  theme = DEFAULT_THEME_NAME,
  children,
}) => {
  return (
    <Wrapper shadowRoot={shadowRoot} shadowRootMode={shadowRootMode}>
      <StyleProvider theme={theme} stylesWrapper={shadowRoot ? "inline" : stylesWrapper}>
        <PortalProvider>{children}</PortalProvider>
      </StyleProvider>
    </Wrapper>
  )
}

export type AppShellStyleWrapper = "head" | "inline"

interface WrapperProps {
  /**
   * React nodes or a collection of React nodes to be rendered as content.
   */
  children?: React.ReactNode

  /**
   * Determines whether the app is rendered inside a `ShadowRoot`.
   * Only set to `false` if the app runs as a standalone application.
   * @default true
   */
  shadowRoot?: boolean

  /**
   * Specifies the mode of the `ShadowRoot`.
   * @default "open"
   */
  shadowRootMode?: ShadowRootMode
}

export interface AppShellProviderProps extends WrapperProps {
  /**
   * Specifies where app stylesheets are imported.
   * This is relevant only if `shadowRoot` is `false`. Must be `"inline"` if using a `ShadowRoot`.
   * @default "inline"
   */
  stylesWrapper?: AppShellStyleWrapper

  /**
   * Determines the theme of the application, choosing between `"theme-dark"` or `"theme-light"`.
   * Defaults to the global default theme name.
   * @default DEFAULT_THEME_NAME
   */
  theme?: "theme-dark" | "theme-light"
}
