/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PluginNav from "../nav/PluginNav"
import NotificationsContainer from "../NotificationsContainer"

const shellStyles = `
  grid
  grid-cols-[max-content_auto]
  grid-rows-[minmax(100vh,100%)]
  w-full
  min-w-0
`

const mainStyles = `
  py-4
  pl-4
  bg-theme-content-area-bg
  h-full
  overflow-auto
  min-w-0
`

const ShellLayout = ({ children }: any) => {
  return (
    <div className={`greenhouse-shell ${shellStyles}`}>
      <PluginNav />
      <div className="min-w-0 overflow-hidden">
        <NotificationsContainer />
        <div className={`greenhouse-main ${mainStyles}`}>{children}</div>
      </div>
    </div>
  )
}

export default ShellLayout
