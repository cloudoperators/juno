/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export const SELECTED_FILTER_PREFIX = "f_"

export const NO_VALUE_DEFAULT = "--"

export const SUPPORT_GROUP_LABEL = "greenhouse.sap/owned-by"
export const REGION_LABEL = "metadata.greenhouse.sap/region"
export const CONNECTIVITY_LABEL = "greenhouse.sap/cluster-connectivity"
export const CLUSTER_TYPE_LABEL = "metadata.greenhouse.sap/cluster-type"

export const FILTER_IDS = {
  CLUSTER_TYPE: "clusterType",
  PLUGIN_PRESET_DEFINITION: "pluginPresetDefinition",
  REGION: "region",
  SUPPORT_GROUP: "supportGroup",
} as const
