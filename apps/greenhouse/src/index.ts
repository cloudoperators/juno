/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createRoot } from "react-dom/client"
import React from "react"
import { version } from "../package.json"

const logAppName = (version: any) => {
  const appName = `%c
  ____ ____  _____ _____ _   _ _   _  ___  _   _ ____  _____ 
 / ___|  _ \\| ____| ____| \\ | | | | |/ _ \\| | | / ___|| ____|
| |  _| |_) |  _| |  _| |  \\| | |_| | | | | | | \\___ \\|  _|  
| |_| |  _ <| |___| |___| |\\  |  _  | |_| | |_| |___) | |___ 
 \\____|_| \\_\\_____|_____|_| \\_|_| |_|\\___/ \\___/|____/|_____| v${version}
`
  console.log(appName, "color:green")
}

logAppName(version)

// export mount and unmount functions
export const mount = (container: any, options = {}) => {
  import("./Shell").then((App) => {
    // @ts-expect-error TS(2339): Property 'root' does not exist on type '(container... Remove this comment to see the full error message
    mount.root = createRoot(container)
    // @ts-expect-error TS(2339): Property 'root' does not exist on type '(container... Remove this comment to see the full error message
    mount.root.render(React.createElement(App.default, options?.props))
  })
}

// @ts-expect-error TS(2339): Property 'root' does not exist on type '(container... Remove this comment to see the full error message
export const unmount = () => mount.root && mount.root.unmount()
