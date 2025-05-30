/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { PortalProvider } from "../PortalProvider"
import { ShadowRoot } from "../ShadowRoot"
import { StyleProvider } from "../StyleProvider"
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
 * This provider acts as a wrapper for Juno apps. It renders a StyleProvider and PortalProvider
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
  /** React nodes or a collection of React nodes to be rendered as content. */
  children?: React.ReactNode
  /** Whether the app is rendered inside a ShadowRoot. Only choose false if the app is meant to run as a stand-alone application. */
  shadowRoot?: boolean
  /** Shadow root mode */
  shadowRootMode?: ShadowRootMode
}

export interface AppShellProviderProps extends WrapperProps {
  /** Where app stylesheets are imported. This is only relevant if shadowRoot === false. If you use a ShadowRoot the styles must be inline. */
  stylesWrapper?: AppShellStyleWrapper
  /** theme: theme-dark or theme-light */
  theme?: "theme-dark" | "theme-light"
}
