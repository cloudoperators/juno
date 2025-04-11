/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Stack } from "@cloudoperators/juno-ui-components"
import { IssuesCountsWithTotalCountType, IssuesCountsType } from "../Services/useFetchServicesIssuesCounts"
import { SeverityCount } from "./SeverityCount"

type IssuesCountPerSeverityLevelProps = {
  counts: IssuesCountsWithTotalCountType | IssuesCountsType
}

export const IssuesCountPerSeverityLevel = ({ counts }: IssuesCountPerSeverityLevelProps) => {
  if (counts.critical + counts.high + counts.medium + counts.low + counts.none === 0) {
    return <div>No issues found! 🚀</div>
  }

  return (
    <Stack gap="1">
      {"totalCount" in counts && (
        <>
          <div className="font-bold">All issues:</div>
          <div className="font-bold mr-2">{counts.totalCount}</div>
        </>
      )}
      <SeverityCount
        displayMode="all"
        icon="danger"
        count={counts.critical}
        variant={counts.critical > 0 ? "danger" : "default"}
        tooltipContent="Critical Issues"
      />
      <SeverityCount
        displayMode="all"
        icon="warning"
        count={counts.high}
        variant={counts.high > 0 ? "warning" : "default"}
        tooltipContent="High Issues"
      />
      <SeverityCount
        displayMode="all"
        icon="errorOutline"
        count={counts.medium}
        variant={counts.medium > 0 ? "warning" : "default"}
        tooltipContent="Medium Issues"
      />
      <SeverityCount
        displayMode="all"
        icon="info"
        count={counts.low}
        variant={counts.low > 0 ? "info" : "default"}
        tooltipContent="Low Issues"
      />
      <SeverityCount displayMode="all" icon="help" count={counts.none} variant="default" tooltipContent="None Issues" />
    </Stack>
  )
}
