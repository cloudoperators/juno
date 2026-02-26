/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Container } from "@cloudoperators/juno-ui-components"
import { PluginPresetStats } from "./PluginPresetStats"
import { BasicInformation } from "./BasicInformation"
import { ClusterSelector } from "./ClusterSelector"
import { PluginPreset } from "../../types/k8sTypes"
import { PluginInstances } from "./PluginInstances"
import { Conditions } from "./Conditions"

const Section = ({ children, ...rest }: React.HTMLAttributes<HTMLDivElement>) => (
  <Container px={false} py {...rest}>
    {children}
  </Container>
)

export const Overview = ({ pluginPreset }: { pluginPreset: PluginPreset }) => (
  <>
    <Section className="pt-0">
      <PluginPresetStats pluginPreset={pluginPreset} />
    </Section>
    <Section className="flex gap-4">
      <BasicInformation pluginPreset={pluginPreset} />
      <ClusterSelector pluginPreset={pluginPreset} />
    </Section>
    <Section>
      <Conditions pluginPreset={pluginPreset} />
    </Section>
    <Section className="pb-0">
      <PluginInstances />
    </Section>
  </>
)
