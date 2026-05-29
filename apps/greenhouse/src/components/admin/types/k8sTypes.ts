/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { components } from "./schema"

export type Cluster = components["schemas"]["Cluster"]
export type Plugin = components["schemas"]["Plugin"]
export type PluginPreset = components["schemas"]["PluginPreset"]
export type PluginsWithExposedServices = components["schemas"]["PluginsWithExposedServices"]
export type PluginOptionValues = NonNullable<Plugin["spec"]>["optionValues"]
export type PluginOptionValue = NonNullable<PluginOptionValues>[number]
