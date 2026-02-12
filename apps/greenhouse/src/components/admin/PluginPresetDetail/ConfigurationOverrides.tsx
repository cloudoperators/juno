/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Container, CodeBlock, JsonViewer } from "@cloudoperators/juno-ui-components"
import { PluginPreset } from "../types/k8sTypes"

export const ConfigurationOverrides = ({ pluginPreset }: { pluginPreset: PluginPreset }) => (
  <CodeBlock>
    <JsonViewer data={pluginPreset.spec?.plugin?.optionValues || {}} toolbar expanded={2} />
  </CodeBlock>
)
