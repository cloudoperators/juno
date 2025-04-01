/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Stack, Badge } from "@cloudoperators/juno-ui-components"
import { IssuesCountsWithTotalCountType, IssuesCountsType } from "../../Services/useFetchServicesCounts"

type IssuesCountBadgesProps = {
  counts: IssuesCountsWithTotalCountType | IssuesCountsType
  displayMode: "all" | "criticalHigh"
}

export const IssuesCountBadges = ({ counts, displayMode = "all" }: IssuesCountBadgesProps) => {
  return (
    <Stack gap="1">
      {"totalCount" in counts && (
        <>
          <div className="font-bold">All issues:</div>
          <div className="font-bold mr-2">{counts.totalCount}</div>
        </>
      )}
      <Badge icon="danger" text={`${counts.critical}`} variant={counts.critical > 0 ? "danger" : "default"} />
      <Badge icon="warning" text={`${counts.high}`} variant={counts.high > 0 ? "warning" : "default"} />
      {displayMode === "all" && (
        <>
          <Badge icon="errorOutline" text={`${counts.medium}`} variant={counts.medium > 0 ? "warning" : "default"} />
          <Badge icon="info" text={`${counts.low}`} variant={counts.low > 0 ? "info" : "default"} />
          <Badge text={`${counts.none}`} variant="default" />
        </>
      )}
    </Stack>
  )
}
