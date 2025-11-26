/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Icon, Tooltip, TooltipTrigger, TooltipContent, KnownIcons, Stack } from "@cloudoperators/juno-ui-components"

type SeverityCountProps = {
  severity: "critical" | "high" | "medium" | "low" | "unknown"
  count: number
  tooltipContent: string
}

const getSeverityIcon = (severity: SeverityCountProps["severity"]): KnownIcons => {
  switch (severity) {
    case "critical":
      return "severityCritical"
    case "high":
      return "severityHigh"
    case "medium":
      return "severityMedium"
    case "low":
      return "severityLow"
    case "unknown":
      return "severityUnknown"
    default:
      return "severityUnknown"
  }
}

const getSeverityColor = (severity: SeverityCountProps["severity"]): string => {
  switch (severity) {
    case "critical":
      return "text-theme-severity-critical"
    case "high":
      return "text-theme-severity-high"
    case "medium":
      return "text-theme-severity-medium"
    case "low":
      return "text-theme-severity-low"
    case "unknown":
      return "text-theme-severity-unknown"
    default:
      return "text-theme-severity-unknown"
  }
}

export const SeverityCount = ({ severity, count, tooltipContent }: SeverityCountProps) => {
  const icon = getSeverityIcon(severity)
  const color = getSeverityColor(severity)

  return (
    <Tooltip triggerEvent="hover">
      <TooltipTrigger>
        <Stack alignment="start">
          <Icon icon={icon} color={count > 0 ? color : "text-theme-disabled"} />
          <span>{count > 0 ? count.toString() : "—"}</span>
        </Stack>
      </TooltipTrigger>
      <TooltipContent>{tooltipContent}</TooltipContent>
    </Tooltip>
  )
}
