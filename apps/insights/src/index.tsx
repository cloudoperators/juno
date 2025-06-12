/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { createRoot, Root } from "react-dom/client"
import "tailwindcss/tailwind.css"
import { AppProps } from "./App"

let root: Root

type Options = {
  props?: AppProps
}

export const mount = (container: HTMLElement, options: Options = {}) => {
  import("./App").then((App) => {
    root = createRoot(container)
    root.render(React.createElement(App.default, options?.props))
  })
}

export const unmount = () => root?.unmount()
