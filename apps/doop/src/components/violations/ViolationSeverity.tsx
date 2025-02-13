/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Icon, Tooltip, TooltipTrigger, TooltipContent } from "@cloudoperators/juno-ui-components"

// data to be used for severity while rendering
const SEVERITY_DATA = {
  debug: {
    borderCss: "border-theme-default",
    icon: "errorOutline",
    iconCss: "text-theme-default",
    tooltip: "Debug: this violation is currently in the planning phase.",
  },
  info: {
    borderCss: "border-theme-info",
    icon: "info",
    iconCss: "text-theme-info",
    tooltip: "Info: this violation contains details with low severity.",
  },
  warning: {
    borderCss: "border-theme-warning",
    icon: "warning",
    iconCss: "text-theme-warning",
    tooltip: "Warning: this violation contains details with medium severity.",
  },
  error: {
    borderCss: "border-theme-error",
    icon: "danger",
    iconCss: "text-theme-danger",
    tooltip: "Error: this violation contains details with high severity.",
  },
}

// StatusIcon renders the icon for the severity
const StatusIcon = ({ severityData, title }: any) => (
  <Tooltip triggerEvent="hover">
    <TooltipTrigger>
      <Icon icon={severityData.icon} title={title} color={severityData.iconCss} />
    </TooltipTrigger>

    <TooltipContent>{severityData.tooltip}</TooltipContent>
  </Tooltip>
)

// ViolationSeverity renders the severity of the violation
const ViolationSeverity = ({ severities, border, className = "" }: any) => {
  // worstSeverity is the severity with the highest weight
  const severityData = React.useMemo(() => {
    if (!severities || severities.length === 0) return null

    // return the severity with the highest weight
    // @ts-expect-error TS(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    return SEVERITY_DATA[severities[0]]
  }, [severities])

  if (!severityData) return null

  // border should be true when the severity is being rendered in the alert list
  return (
    <div className={`${border ? "border-l-2 h-full " + severityData.borderCss : ""} ${className}`}>
      <StatusIcon severityData={severityData} title={severities[0]} />
    </div>
  )
}

export default ViolationSeverity
