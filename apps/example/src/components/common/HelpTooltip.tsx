/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Tooltip, TooltipTrigger, TooltipContent, Icon } from "@cloudoperators/juno-ui-components"

interface HelpTooltipProps {
  tooltipText?: string
}

const HelpTooltip: React.FC<HelpTooltipProps> = ({ tooltipText }) => (
  <Tooltip triggerEvent="hover">
    <TooltipTrigger asChild>
      <Icon icon="help" color="global-text" size="20px" />
    </TooltipTrigger>
    <TooltipContent>{tooltipText}</TooltipContent>
  </Tooltip>
)

export default HelpTooltip
