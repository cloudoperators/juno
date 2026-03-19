/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PluginNav from "../nav/PluginNav"
import NotificationsContainer from "../NotificationsContainer"

interface ShellLayoutProps {
  children: React.ReactNode
}

const shellStyles = `
  grid
  grid-cols-[max-content_auto]
  grid-rows-[minmax(100vh,100%)]
  w-full
  min-w-0`

const mainStyles = `
  bg-theme-content-area-bg
  overflow-x-auto
  min-w-0
  h-full`

const contentStyles = `
  py-4
  pl-4`

const ShellLayout = ({ children }: ShellLayoutProps) => {
  return (
    <div className={`greenhouse-shell ${shellStyles}`}>
      <PluginNav />
      <div className={`greenhouse-main ${mainStyles}`}>
        <NotificationsContainer />
        <div className={contentStyles}>{children}</div>
      </div>
    </div>
  )
}

export default ShellLayout
