/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Icon, KnownIcons } from "@cloudoperators/juno-ui-components"
import { getSeverityColor } from "../../Services/utils"

type IssueIconProps = {
  severity: string
}

const getIconForSeverity = (severity: string) => {
  const severityLower = severity.toLowerCase()
  const iconColor = getSeverityColor(severity)

  const iconMap: Record<string, KnownIcons> = {
    critical: "danger",
    high: "warning",
    medium: "errorOutline",
    low: "info",
    none: "help",
  }

  return <Icon icon={iconMap[severityLower] || "help"} color={iconColor} />
}

export const IssueIcon: React.FC<IssueIconProps> = ({ severity }) => {
  return getIconForSeverity(severity)
}
