/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { createRoot, Root } from "react-dom/client"
import { AppProps } from "./App"

let root: Root

type Options = {
  props?: AppProps
}

export const mount = async (container: Element | DocumentFragment, options: Options = {}): Promise<void> => {
  const { default: App } = await import("./App")
  root = createRoot(container)
  root.render(React.createElement(App, options?.props))
}

export const unmount = () => root?.unmount()
