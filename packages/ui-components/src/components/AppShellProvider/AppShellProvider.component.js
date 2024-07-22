/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"

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
}) => {
  const Wrapper = React.useCallback(
    ({ children }) =>
      shadowRoot ? (
        <ShadowRoot mode={shadowRootMode}>{children}</ShadowRoot>
      ) : (
        children
      ),
    [shadowRoot, shadowRootMode]
  )
  return (
    <Wrapper>
      <StyleProvider
        theme={theme}
        stylesWrapper={shadowRoot ? "inline" : stylesWrapper}
      >
        <PortalProvider>{children}</PortalProvider>
      </StyleProvider>
    </Wrapper>
  )
}

AppShellProvider.propTypes = {
  /** Whether the app is rendered inside a ShadowRoot. Only choose false if the app is meant to run as a stand-alone application. */
  shadowRoot: PropTypes.bool,
  /** Shadow root mode */
  shadowRootMode: PropTypes.oneOf(["open", "closed"]),
  /** Where app stylesheets are imported. This is only relevant if shadowRoot === false. If you use a ShadowRoot the styles must be inline. */
  stylesWrapper: PropTypes.oneOf(["head", "inline"]),
  /** theme: theme-dark or theme-light */
  theme: PropTypes.string,
  children: PropTypes.any,
}
