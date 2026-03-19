/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createRoot, Root } from "react-dom/client"
import React from "react"
import App from "./App"

let root: Root | null = null

// export mount and unmount functions
export const mount = (container: HTMLElement, options: any = {}) => {
  root = createRoot(container)
  root.render(React.createElement(App, options?.props))
}

export const unmount = () => {
  if (root) {
    root.unmount()
    root = null
  }
}
