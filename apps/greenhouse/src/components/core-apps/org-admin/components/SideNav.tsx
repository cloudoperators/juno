/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { SideNavigation, SideNavigationItem, Badge } from "@cloudoperators/juno-ui-components"
import { useActivePlugin, useActions } from "../StoreProvider"

const PLUGINS = [
  { name: "clusters", label: "Clusters" },
  { name: "teams", label: "Teams" },
  { name: "plugins", label: "Plugins", beta: true },
  { name: "secrets", label: "Secrets", beta: true },
]

const SideNav = () => {
  const active = useActivePlugin()
  // @ts-ignore
  const { setActive } = useActions()

  return (
    <SideNavigation>
      {PLUGINS.map((plugin) => (
        <SideNavigationItem key={plugin.name} selected={plugin.name === active} onClick={() => setActive(plugin.name)}>
          <div className="">
            <span>{plugin.label}</span>
            {plugin.beta && <Badge text="beta" variant="info" />}
          </div>
        </SideNavigationItem>
      ))}
    </SideNavigation>
  )
}

export default SideNav
