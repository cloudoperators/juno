/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import {
  Stack,
  Badge,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  KnownIcons,
  BadgeVariantType,
} from "@cloudoperators/juno-ui-components"
import { IssuesCountsWithTotalCountType, IssuesCountsType } from "../Services/useFetchServicesIssuesCounts"

type IssuesCountPerSeverityLevelProps = {
  counts: IssuesCountsWithTotalCountType | IssuesCountsType
  displayMode?: "all" | "criticalHigh"
}

type IssuesCountBadgeType = {
  icon?: KnownIcons
  count: number
  variant: BadgeVariantType
  tooltipContent: string
  className?: string
}

export const IssueCountBadge = ({ icon, count, variant, tooltipContent, className }: IssuesCountBadgeType) =>
  count > 0 ? (
    <Tooltip triggerEvent="hover">
      <TooltipTrigger>
        <Badge
          icon={count > 0 ? icon : undefined}
          text={count > 0 ? count.toString() : "—"}
          variant={variant}
          className={className}
        />
      </TooltipTrigger>
      <TooltipContent>{tooltipContent}</TooltipContent>
    </Tooltip>
  ) : (
    <span>&mdash;</span>
  )

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
      <IssueCountBadge
        icon="danger"
        count={counts.critical}
        variant={counts.critical > 0 ? "danger" : "default"}
        tooltipContent="Critical Issues"
        className={counts.critical > 0 ? "" : "opacity-50"}
      />
      <IssueCountBadge
        icon="warning"
        count={counts.high}
        variant={counts.high > 0 ? "warning" : "default"}
        tooltipContent="High Issues"
        className={counts.high > 0 ? "" : "opacity-50"}
      />
      {displayMode === "all" && (
        <>
          <IssueCountBadge
            icon="errorOutline"
            count={counts.medium}
            variant={counts.medium > 0 ? "warning" : "default"}
            tooltipContent="Medium Issues"
            className={counts.medium > 0 ? "" : "opacity-50"}
          />
          <IssueCountBadge
            icon="info"
            count={counts.low}
            variant={counts.low > 0 ? "info" : "default"}
            tooltipContent="Low Issues"
            className={counts.low > 0 ? "" : "opacity-50"}
          />
          <IssueCountBadge
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
