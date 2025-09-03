/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Stack } from "@cloudoperators/juno-ui-components"
import { IssuesCountsType } from "../types"
import { SeverityCount } from "./SeverityCount"

type IssueCountsPerSeverityLevelProps = {
  counts: IssuesCountsType
}

export const IssueCountsPerSeverityLevel = ({ counts }: IssueCountsPerSeverityLevelProps) => {
  if (counts.total === 0) {
    return <div>No vulnerabilities found! 🚀</div>
  }

  return (
    <Stack gap="1">
      <>
        <div className="font-bold">All vulnerabilities:</div>
        <div className="font-bold mr-2">{counts.total}</div>
      </>
      <SeverityCount
        icon="danger"
        count={counts.critical}
        variant={counts.critical > 0 ? "danger" : "default"}
        tooltipContent="Critical Vulnerabilities"
      />
      <SeverityCount
        icon="warning"
        count={counts.high}
        variant={counts.high > 0 ? "warning" : "default"}
        tooltipContent="High Vulnerabilities"
      />
      <SeverityCount
        icon="errorOutline"
        count={counts.medium}
        variant={counts.medium > 0 ? "warning" : "default"}
        tooltipContent="Medium Vulnerabilities"
      />
      <SeverityCount
        icon="info"
        count={counts.low}
        variant={counts.low > 0 ? "info" : "default"}
        tooltipContent="Low Vulnerabilities"
      />
      <SeverityCount icon="help" count={counts.none} variant="default" tooltipContent="None Vulnerabilities" />
    </Stack>
  )
}
