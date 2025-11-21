/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createFileRoute } from "@tanstack/react-router"
import { Crumb } from "../-types"
import { PluginPresets } from "../../components/admin/PluginPresets"

const dummyData = [
  {
    deploymentStatus: "failing",
    status: "Failing",
    name: "ingress-regional",
    pluginDefinition: "ingress-nginx",
    message: "1 plugin in unknown state, unable to reach cluster",
    pluginInstances: "3/4",
    lastModified: "Oct 20, 2025, 01:05 PM",
  },
  {
    deploymentStatus: "ready",
    status: "Ready",
    name: "monitoring-stack",
    pluginDefinition: "prometheus",
    message: "All instances running successfully",
    pluginInstances: "8/8",
    lastModified: "Nov 15, 2025, 09:30 AM",
  },
  {
    deploymentStatus: "failing",
    status: "Failing",
    name: "backup-controller",
    pluginDefinition: "velero",
    message: "2 plugins failed to initialize",
    pluginInstances: "2/5",
    lastModified: "Nov 18, 2025, 03:45 PM",
  },
  {
    deploymentStatus: "ready",
    status: "Ready",
    name: "cert-manager-prod",
    pluginDefinition: "cert-manager",
    message: "Certificates issued and active",
    pluginInstances: "6/6",
    lastModified: "Nov 20, 2025, 11:20 AM",
  },
]

export const Route = createFileRoute("/admin/plugin-presets")({
  component: PluginPresets,
  loader: async () => {
    const crumb: Crumb = {
      label: "Plugin Presets",
    }

    // Dummy data for demonstration
    const pluginPresetsPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(dummyData)
      }, 3000)
    })

    return {
      crumb,
      pluginPresetsPromise: pluginPresetsPromise,
    }
  },
})
