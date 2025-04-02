/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Icon } from "@cloudoperators/juno-ui-components"

type IssueIconProps = {
  severity: string
}

export const IssueIcon = ({ severity }: IssueIconProps) => {
  const iconColor = () => {
    switch (severity.toLowerCase()) {
      case "critical":
        return "text-theme-danger"
      case "high":
        return "text-theme-warning"
      case "medium":
        return "text-theme-info"
      default:
        return "text-theme-default"
    }
  }

  return (
    <>
      {severity.toLowerCase() === "critical" ? (
        <Icon icon="danger" color={iconColor()} />
      ) : severity.toLowerCase() === "high" ? (
        <Icon icon="warning" color={iconColor()} />
      ) : severity.toLowerCase() === "medium" ? (
        <Icon icon="info" color={iconColor()} />
      ) : (
        <Icon icon="errorOutline" color={iconColor()} />
      )}
    </>
  )
}
