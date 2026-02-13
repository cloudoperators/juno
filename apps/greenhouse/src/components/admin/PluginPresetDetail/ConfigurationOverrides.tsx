/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { PluginPreset } from "../types/k8sTypes"
import YamlData from "../common/YamlData"

export const ConfigurationOverrides = ({ pluginPreset }: { pluginPreset: PluginPreset }) => (
  <>
    {pluginPreset.spec?.plugin?.optionValues && (
      <YamlData value={pluginPreset.spec?.plugin?.optionValues} heightMode="fill" />
    )}
  </>
)
