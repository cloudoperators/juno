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
  Icon,
} from "@cloudoperators/juno-ui-components"

type SeverityCountProps = {
  icon: KnownIcons
  color: string
  count: number
  variant: BadgeVariantType
  tooltipContent: string
  showDashIfZero?: Boolean
}

export const SeverityCount = ({
  icon,
  color,
  count,
  variant,
  tooltipContent,
  showDashIfZero = false,
}: SeverityCountProps) => {
  // Show dash if count is zero and showDashIfZero is true
  if (!!showDashIfZero && count === 0) {
    return <span>&mdash;</span>
  }

  // For all mode, always show the badge with the count (even if zero)
  return (
    <Tooltip triggerEvent="hover">
      <TooltipTrigger>
        <Badge icon={icon} text={count > 0 ? count.toString() : "0"} variant={count > 0 ? variant : "default"}>
          {/* <Icon icon={icon} color={color}></Icon> */}
        </Badge>
      </TooltipTrigger>
      <TooltipContent>{tooltipContent}</TooltipContent>
    </Tooltip>
  )
}
