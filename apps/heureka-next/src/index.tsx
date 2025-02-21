/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { createRoot, Root } from "react-dom/client"
import "tailwindcss/tailwind.css"
import "./index.scss"
import { AppProps } from "./App"

let root: Root

export const mount = (container: HTMLElement, props: AppProps = {}) => {
  import("./App").then((App) => {
    root = createRoot(container)
    root.render(React.createElement(App.default, props))
  })
}

export const unmount = () => root?.unmount()
