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
  Icon,
  KnownIcons,
  BadgeVariantType,
} from "@cloudoperators/juno-ui-components"
import { IssuesCountsWithTotalCountType, IssuesCountsType } from "../../Services/useFetchServicesCounts"

type IssuesCountBadgesProps = {
  counts: IssuesCountsWithTotalCountType | IssuesCountsType
  displayMode?: "all" | "criticalHigh"
}

type ToolTipBadgeType = {
  icon?: KnownIcons
  text: string
  variant: BadgeVariantType
  tooltipContent: string
}

const ToolTipBadge = ({ icon, text, variant, tooltipContent }: ToolTipBadgeType) => (
  <Tooltip triggerEvent="hover">
    <TooltipTrigger>
      <Badge icon={icon} text={text} variant={variant} />
    </TooltipTrigger>
    <TooltipContent>{tooltipContent}</TooltipContent>
  </Tooltip>
)

export const IssuesCountBadges = ({ counts, displayMode = "all" }: IssuesCountBadgesProps) => {
  return (
    <Stack gap="1">
      {"totalCount" in counts && (
        <>
          <div className="font-bold">All issues:</div>
          <div className="font-bold mr-2">{counts.totalCount}</div>
        </>
      )}
      <ToolTipBadge
        icon="danger"
        text={`${counts.critical}`}
        variant={counts.critical > 0 ? "danger" : "default"}
        tooltipContent="Critical Issues"
      />
      <ToolTipBadge
        icon="warning"
        text={`${counts.high}`}
        variant={counts.high > 0 ? "warning" : "default"}
        tooltipContent="High Issues"
      />
      {displayMode === "all" && (
        <>
          <ToolTipBadge
            icon="errorOutline"
            text={`${counts.medium}`}
            variant={counts.medium > 0 ? "warning" : "default"}
            tooltipContent="Medium Issues"
          />
          <ToolTipBadge
            icon="info"
            text={`${counts.low}`}
            variant={counts.low > 0 ? "info" : "default"}
            tooltipContent="Low Issues"
          />
          <ToolTipBadge icon="help" text={`${counts.none}`} variant="default" tooltipContent="None Issues" />
        </>
      )}
    </Stack>
  )
}
