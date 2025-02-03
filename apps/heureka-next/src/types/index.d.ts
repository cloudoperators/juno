/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/// <reference types="vite-plugin-svgr/client" />
/// <reference types="vite/client" />

type AppProps = {
  theme?: "theme-dark" | "theme-light"
  embedded?: boolean
}

//TODO: use ItemKeyType from ui-components package when available
type ItemKeyType = string | ReactNode
