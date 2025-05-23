/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Stack } from "@cloudoperators/juno-ui-components"

import MetricsBox, { MetricsProps } from "./MetricsBox"

interface MetricsDisplayProps {
  metrics: MetricsProps[]
}

const MetricsDisplay: React.FC<MetricsDisplayProps> = ({ metrics }) => (
  <Stack direction="horizontal" gap="6" distribution="between">
    {metrics.map((metric, index) => (
      <MetricsBox
        key={index}
        label={metric.label}
        number={metric.value}
        peakDetails={metric.peakDetails}
        hoverable={metric.hoverable}
        peakType={metric.peakType}
        isLoading={metric.isLoading}
      />
    ))}
  </Stack>
)

export default MetricsDisplay
