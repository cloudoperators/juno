/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Container } from "@cloudoperators/juno-ui-components"
import { PluginPreset } from "../types/k8sTypes"

export const ConfigurationOverrides = ({ pluginPreset }: { pluginPreset: PluginPreset }) => (
  <Container px={false} py>
    <p>Raw data information for {pluginPreset.metadata?.name} will be displayed here.</p>
  </Container>
)
