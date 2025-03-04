/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createRoot, Root } from "react-dom/client"
import React from "react"

interface MountOptions {
  props?: Record<string, any>
}

let root: Root | null = null

// export mount and unmount functions
export const mount = (container: HTMLElement, options: MountOptions = {}) => {
  import("./App").then((App) => {
    root = createRoot(container)
    root.render(React.createElement(App.default, options?.props))
  })
}

export const unmount = () => {
  if (root) {
    root.unmount()
    root = null
  }
}
