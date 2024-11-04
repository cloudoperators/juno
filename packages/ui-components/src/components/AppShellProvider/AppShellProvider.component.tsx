/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { StyleProvider } from "../StyleProvider"
import { ShadowRoot } from "../ShadowRoot"
import { PortalProvider } from "../PortalProvider"
import { DEFAULT_THEME_NAME } from "../StyleProvider/StyleProvider.component"

const Wrapper = ({ children, shadowRoot, shadowRootMode }: WrapperProps) => {
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
export const AppShellProvider = ({
  shadowRoot = true,
  shadowRootMode = "open",
  stylesWrapper = "inline",
  theme = DEFAULT_THEME_NAME,
  children,
}: AppShellProviderProps) => {
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
  children?: React.ReactNode
  /** Whether the app is rendered inside a ShadowRoot. Only choose false if the app is meant to run as a stand-alone application. */
  shadowRoot?: boolean
  /** Shadow root mode */
  shadowRootMode?: ShadowRootMode
}

export interface AppShellProviderProps {
  /** Whether the app is rendered inside a ShadowRoot. Only choose false if the app is meant to run as a stand-alone application. */
  shadowRoot?: boolean
  /** Shadow root mode */
  shadowRootMode?: ShadowRootMode
  /** Where app stylesheets are imported. This is only relevant if shadowRoot === false. If you use a ShadowRoot the styles must be inline. */
  stylesWrapper?: AppShellStyleWrapper
  /** theme: theme-dark or theme-light */
  theme?: "theme-dark" | "theme-light"
  children?: React.ReactNode
}
