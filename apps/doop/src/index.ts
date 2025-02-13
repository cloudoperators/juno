/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createRoot } from "react-dom/client"
import React from "react"

// export mount and unmount functions
export const mount = (container: any, options = {}) => {
  import("./App").then((App) => {
    // @ts-expect-error TS(2339) FIXME: Property 'root' does not exist on type '(container... Remove this comment to see the full error message
    mount.root = createRoot(container)
    // @ts-expect-error TS(2339) FIXME: Property 'root' does not exist on type '(container... Remove this comment to see the full error message
    mount.root.render(React.createElement(App.default, options?.props))
  })
}

// @ts-expect-error TS(2339) FIXME: Property 'root' does not exist on type '(container... Remove this comment to see the full error message
export const unmount = () => mount.root && mount.root.unmount()
