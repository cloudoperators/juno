/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Container, ContentHeading } from "@cloudoperators/juno-ui-components"
import { useLoaderData } from "@tanstack/react-router"
import { PluginPresetsDataGrid } from "./PluginPresetsDataGrid"
import { PluginPresetsFilters } from "./PluginPresetsFilters"
import { PluginPresetsMetaInfo } from "./PluginPresetsMetaInfo"
import { PluginPresetsStats } from "./PluginPresetsStats"

export const PluginPresets = () => {
  const { pluginPresetsPromise, statsPromise } = useLoaderData({ from: "/admin/plugin-presets" })

  return (
    <>
      <Container px={false} py>
        <ContentHeading>Plugin Presets Overview</ContentHeading>
        <p>Manage and monitor plugin preset configurations across all clusters</p>
      </Container>
      <Container px={false} py>
        <PluginPresetsStats statsPromise={statsPromise} />
      </Container>
      <Container px={false} py>
        <PluginPresetsFilters />
        <PluginPresetsMetaInfo />
        <PluginPresetsDataGrid pluginPresetsPromise={pluginPresetsPromise} />
      </Container>
    </>
  )
}
