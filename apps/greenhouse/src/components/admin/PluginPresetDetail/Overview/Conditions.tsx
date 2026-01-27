/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Stack } from "@cloudoperators/juno-ui-components"
import { PluginPreset } from "../../types/k8sTypes"
import ReadinessConditions from "../../common/ReadinessConditions"

type ConditionsProps = {
  pluginPreset: PluginPreset
}

export const Conditions: React.FC<ConditionsProps> = ({ pluginPreset }) => (
  <Stack direction="vertical" gap="4">
    <h3>Conditions</h3>
    <ReadinessConditions conditions={pluginPreset.status?.statusConditions?.conditions || []} enableDetailsView />
  </Stack>
)
