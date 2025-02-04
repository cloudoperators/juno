/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

// @ts-expect-error TS(2792) FIXME: Cannot find module '@cloudoperators/juno-ui-compon... Remove this comment to see the full error message
import { Icon, Stack } from "@cloudoperators/juno-ui-components"

const severityStyles = (severity: any, count: any) => {
  let baseStyles = `
    text-lg/5
  `
  if (!count || count < 1) {
    return `${baseStyles} text-theme-light`
  }

  switch (severity) {
    case "critical":
      baseStyles += ` bg-theme-danger/50`
      break
    case "warning":
      baseStyles += ` bg-theme-warning/50`
      break
    case "info":
      baseStyles += ` bg-theme-info/40`
      break
  }

  return baseStyles
}

const calculateCount = (total: any, suppressed: any) => {
  if (!total) return "--"
  return suppressed ? total - suppressed : total
}

const RegionSeverity = ({ severity, severityCountTotal, severityCountSuppressed }: any) => {
  return (
    <Stack
      direction="vertical"
      alignment="stretch"
      distribution="center"
      className={severityStyles(severity, severityCountTotal)}
    >
      <Stack direction="vertical" alignment="center" distribution="center" className="h-full">
        {calculateCount(severityCountTotal, severityCountSuppressed)}
      </Stack>
      {severityCountSuppressed && (
        <div className="text-xs bg-black/10 mt-auto">
          <Stack alignment="center" distribution="center">
            <Icon icon="notificationsOff" size="0.75rem" />
            <span>{severityCountSuppressed}</span>
          </Stack>
        </div>
      )}
    </Stack>
  )
}

export default RegionSeverity
