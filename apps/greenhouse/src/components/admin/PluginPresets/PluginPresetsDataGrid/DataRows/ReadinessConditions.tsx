/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Badge, Tooltip, TooltipTrigger, TooltipContent, Stack } from "@cloudoperators/juno-ui-components"
import { createConditionAbbreviation } from "../../../utils"

const CONDITION_VARIANTS = {
  True: "success",
  False: "error",
  Unknown: "warning",
} as const

type ReadinessCondition = {
  type: string
  status: string
}

const ConditionBadge: React.FC<{ condition: ReadinessCondition }> = ({ condition }) => {
  const variant = CONDITION_VARIANTS[condition.status as keyof typeof CONDITION_VARIANTS] ?? CONDITION_VARIANTS.Unknown
  const displayValue = createConditionAbbreviation(condition.type)
  return (
    <Tooltip triggerEvent="hover">
      <TooltipTrigger asChild>
        <Badge icon text={displayValue} variant={variant} />
      </TooltipTrigger>
      <TooltipContent>{condition.type}</TooltipContent>
    </Tooltip>
  )
}

type ReadinessConditionsProps = {
  conditions: ReadinessCondition[]
}

const ReadinessConditions: React.FC<ReadinessConditionsProps> = ({ conditions }) => (
  <Stack gap="2">
    {conditions.map((condition) => (
      <ConditionBadge key={condition.type} condition={condition} />
    ))}
  </Stack>
)

export default ReadinessConditions
