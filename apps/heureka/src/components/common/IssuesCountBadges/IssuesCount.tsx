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

type SeverityCountProps = { count: number; icon: KnownIcons; variant: BadgeVariantType; tooltipContent: string }

export const SeverityCount = ({ count, icon, variant, tooltipContent }: SeverityCountProps) => (
  <>
    {count > 0 ? (
      <Tooltip triggerEvent="hover">
        <TooltipTrigger>
          <Badge icon={icon} text={count > 0 ? count.toString() : "-"} variant={count > 0 ? variant : "default"} />
        </TooltipTrigger>
        <TooltipContent>{tooltipContent}</TooltipContent>
      </Tooltip>
    ) : (
      <span>&mdash;</span>
    )}
  </>
)
