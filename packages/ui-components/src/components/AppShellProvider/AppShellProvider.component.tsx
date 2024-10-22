/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { StyleProvider } from "../StyleProvider/StyleProvider.component"
import { ShadowRoot } from "../ShadowRoot/ShadowRoot.component"
import { PortalProvider } from "../PortalProvider/PortalProvider.component"

/**
 * This provider acts as a wrapper for Juno apps. It renders a StyleProvider and PortalProvider
 */
export const AppShellProvider = ({
  shadowRoot = true,
  shadowRootMode = "open",
  stylesWrapper = "inline",
  theme = null,
  children,
}: AppShellProviderProps) => {
  const Wrapper = React.useCallback(
    ({ children }: WrapperProps) => (shadowRoot ? <ShadowRoot mode={shadowRootMode}>{children}</ShadowRoot> : children),
    [shadowRoot, shadowRootMode]
  )
  return (
    <Wrapper>
      <StyleProvider theme={theme} stylesWrapper={shadowRoot ? "inline" : stylesWrapper}>
        <PortalProvider>{children}</PortalProvider>
      </StyleProvider>
    </Wrapper>
  )
}

export type AppShellStyleWrapper = "head" | "inline"

interface WrapperProps {
  children?: React.ReactNode
}

export interface AppShellProviderProps {
  /** Whether the app is rendered inside a ShadowRoot. Only choose false if the app is meant to run as a stand-alone application. */
  shadowRoot?: boolean
  /** Shadow root mode */
  shadowRootMode?: ShadowRootMode
  /** Where app stylesheets are imported. This is only relevant if shadowRoot === false. If you use a ShadowRoot the styles must be inline. */
  stylesWrapper?: AppShellStyleWrapper
  /** theme: theme-dark or theme-light */
  theme?: string | null
  children?: React.ReactNode
}
