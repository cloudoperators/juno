/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
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
  const { setPluginActive } = useActions()

  return (
    <SideNavigation>
      {PLUGINS.map((plugin, index) => (
        <SideNavigationItem key={index} active={plugin.name === active} onClick={() => setPluginActive(plugin.name)}>
          {plugin.label} {plugin.beta && <Badge text="beta" variant="info" />}
        </SideNavigationItem>
      ))}
    </SideNavigation>
  )
}

export default SideNav
