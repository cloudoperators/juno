/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Container, ContentHeading } from "@cloudoperators/juno-ui-components"
import { useLoaderData } from "@tanstack/react-router"
import { PluginPresetsDataGrid } from "./PluginPresetsDataGrid"
import { PluginPresetsFilter } from "./PluginPresetsFilter"

export const PluginPresets = () => {
  const { pluginPresetsPromise } = useLoaderData({ from: "/admin/plugin-presets" })

  return (
    <>
      <Container px={false} py>
        <ContentHeading>Plugin Presets Overview</ContentHeading>
        <p>Manage and monitor plugin preset configurations across all clusters</p>
      </Container>
      <Container px={false} py>
        <PluginPresetsFilter />
        <PluginPresetsDataGrid pluginPresetsPromise={pluginPresetsPromise} />
      </Container>
    </>
  )
}
