/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { forwardRef } from "react"

// @ts-expect-error TS(2792) FIXME: Cannot find module '@cloudoperators/juno-ui-compon... Remove this comment to see the full error message
import { Icon } from "@cloudoperators/juno-ui-components"

const AlertIcon = ({
  severity
}: any, ref: any) => {
  const iconColor = () => {
    switch (severity) {
      case "critical":
        return "text-theme-danger"
      case "warning":
        return "text-theme-warning"
      case "info":
        return "text-theme-info"
    }
  }

  return <>
    {severity === "critical" ? (
      <Icon ref={ref} icon="danger" color={iconColor()} />
    ) : severity?.match(/^(warning|info)$/) ? (
      <Icon icon={severity} color={iconColor()} ref={ref} />
    ) : (
      <Icon ref={ref} icon="errorOutline" />
    )}
  </>;
}

export default forwardRef(AlertIcon)
