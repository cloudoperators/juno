/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Icon } from "@cloudoperators/juno-ui-components"
import { getSeverityColor } from "../../Services/utils"

type IssueIconProps = {
  severity: string
}

const getIconForSeverity = (severity: string) => {
  const severityLower = severity.toLowerCase()
  const iconColor = getSeverityColor(severity)

  if (severityLower === "critical") {
    return <Icon icon="danger" color={iconColor} />
  }
  if (severityLower === "high") {
    return <Icon icon="warning" color={iconColor} />
  }
  if (severityLower === "medium") {
    return <Icon icon="info" color={iconColor} />
  }
  return <Icon icon="errorOutline" color={iconColor} />
}

export const IssueIcon: React.FC<IssueIconProps> = ({ severity }) => {
  return getIconForSeverity(severity)
}
