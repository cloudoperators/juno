/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Stack, ContentHeading } from "@cloudoperators/juno-ui-components"

import { Cluster } from "../../types/k8sTypes"
import ReadinessConditions from "../../common/ReadinessConditions"

type ConditionsProps = {
  clusters: Cluster
}

export const Conditions: React.FC<ConditionsProps> = ({ clusters }) => (
  <Stack direction="vertical" gap="4">
    <ContentHeading>Conditions</ContentHeading>
    <ReadinessConditions conditions={clusters.status?.statusConditions?.conditions || []} enableDetailsView />
  </Stack>
)
