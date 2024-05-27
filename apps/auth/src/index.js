/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createRoot } from "react-dom/client"
import React from "react"

// import { broadcast, watch, get, onGet } from "communicator"
// window.broadcast = broadcast
// window.watch = watch
// window.onGet = onGet
// window.get = get

// export mount and unmount functions
export const mount = (container, options = {}) => {
  import("./App").then((App) => {
    mount.root = createRoot(container)
    mount.root.render(React.createElement(App.default, options?.props))
  })
}

export const unmount = () => mount.root && mount.root.unmount()
