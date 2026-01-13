/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { useLoaderData, useRouter } from "@tanstack/react-router"
import { Stack, Button } from "@cloudoperators/juno-ui-components/index"

export const PluginPresetsMetaInfo = () => {
  const router = useRouter()
  const { lastUpdatedAt } = useLoaderData({ from: "/admin/plugin-presets" })

  const handleRefresh = () => {
    router.invalidate()
  }

  return (
    <Stack className="status-bar bg-theme-background-lvl-1 py-1.5 px-4 my-px text-theme-light" alignment="center">
      <Stack alignment="center" className="ml-auto">
        {lastUpdatedAt && `Last update: ${new Date(lastUpdatedAt).toLocaleString()}`}
        <Button label="Refresh" className="ml-4" onClick={handleRefresh} variant="subdued" />
      </Stack>
    </Stack>
  )
}
