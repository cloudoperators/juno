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
      <SeverityCount severity="critical" count={counts.critical} tooltipContent="Critical Vulnerabilities" />
      <SeverityCount severity="high" count={counts.high} tooltipContent="High Vulnerabilities" />
      <SeverityCount severity="medium" count={counts.medium} tooltipContent="Medium Vulnerabilities" />
      <SeverityCount severity="low" count={counts.low} tooltipContent="Low Vulnerabilities" />
      <SeverityCount severity="unknown" count={counts.none} tooltipContent="None Vulnerabilities" />
    </Stack>
  )
}
