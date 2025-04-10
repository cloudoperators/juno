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

type SeverityCountType = {
  icon?: KnownIcons
  count: number
  variant: BadgeVariantType
  tooltipContent: string
  className?: string
}

export const SeverityCount = ({ icon, count, variant, tooltipContent, className }: SeverityCountType) =>
  count > 0 ? (
    <Tooltip triggerEvent="hover">
      <TooltipTrigger>
        <Badge icon={icon} text={count.toString()} variant={variant} className={className} />
      </TooltipTrigger>
      <TooltipContent>{tooltipContent}</TooltipContent>
    </Tooltip>
  ) : (
    <span>&mdash;</span>
  )
