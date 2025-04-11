/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import {
  Badge,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  KnownIcons,
  BadgeVariantType,
} from "@cloudoperators/juno-ui-components"

type SeverityCountProps = {
  icon: KnownIcons
  count: number
  variant: BadgeVariantType
  tooltipContent: string
  displayMode: "all" | "single"
}

export const SeverityCount = ({ icon, count, variant, tooltipContent, displayMode }: SeverityCountProps) => {
  // For single mode with zero count, show a dash
  if (displayMode === "single" && count === 0) {
    return <span>&mdash;</span>
  }

  // For all mode, always show the badge with the count (even if zero)
  return (
    <Tooltip triggerEvent="hover">
      <TooltipTrigger>
        <Badge icon={icon} text={count > 0 ? count.toString() : "0"} variant={count > 0 ? variant : "default"} />
      </TooltipTrigger>
      <TooltipContent>{tooltipContent}</TooltipContent>
    </Tooltip>
  )
}
