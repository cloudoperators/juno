/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import {
  Icon,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  KnownIcons,
  Stack,
} from "@cloudoperators/juno-ui-components"

type SeverityCountProps = {
  icon: KnownIcons
  count: number
  color: string
  tooltipContent: string
  showDashIfZero?: Boolean
}

export const SeverityCount = ({ icon, count, color, tooltipContent, showDashIfZero = false }: SeverityCountProps) => {
  // Show dash if count is zero and showDashIfZero is true
  if (!!showDashIfZero && count === 0) {
    return <span>&mdash;</span>
  }

  // For all mode, always show the icon with the count (even if zero)
  return (
    <Tooltip triggerEvent="hover">
      <TooltipTrigger>
        <Stack gap="0.5" direction="horizontal" alignment="center">
          <Icon icon={icon} color={count > 0 ? color : "text-theme-default"} />
          <span>{count > 0 ? count.toString() : "0"}</span>
        </Stack>
      </TooltipTrigger>
      <TooltipContent>{tooltipContent}</TooltipContent>
    </Tooltip>
  )
}
