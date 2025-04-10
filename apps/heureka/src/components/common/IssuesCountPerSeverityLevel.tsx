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
  displayMode?: "all" | "criticalHigh"
}

export const IssuesCountPerSeverityLevel = ({ counts, displayMode = "all" }: IssuesCountPerSeverityLevelProps) => {
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
        icon="danger"
        count={counts.critical}
        variant={counts.critical > 0 ? "danger" : "default"}
        tooltipContent="Critical Issues"
        className={counts.critical > 0 ? "" : "opacity-50"}
      />
      <SeverityCount
        icon="warning"
        count={counts.high}
        variant={counts.high > 0 ? "warning" : "default"}
        tooltipContent="High Issues"
        className={counts.high > 0 ? "" : "opacity-50"}
      />
      {displayMode === "all" && (
        <>
          <SeverityCount
            icon="errorOutline"
            count={counts.medium}
            variant={counts.medium > 0 ? "warning" : "default"}
            tooltipContent="Medium Issues"
            className={counts.medium > 0 ? "" : "opacity-50"}
          />
          <SeverityCount
            icon="info"
            count={counts.low}
            variant={counts.low > 0 ? "info" : "default"}
            tooltipContent="Low Issues"
            className={counts.low > 0 ? "" : "opacity-50"}
          />
          <SeverityCount
            icon="help"
            count={counts.none}
            variant="default"
            tooltipContent="None Issues"
            className={counts.none > 0 ? "" : "opacity-50"}
          />
        </>
      )}
    </Stack>
  )
}
