/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import {
  Badge,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  Stack,
  Icon,
  Box,
  Grid,
  GridRow,
  GridColumn,
} from "@cloudoperators/juno-ui-components"
import { createConditionAbbreviation } from "../utils"

const CONDITION_VARIANTS = {
  True: "success",
  False: "error",
  Unknown: "warning",
} as const

type ConditionVariant = (typeof CONDITION_VARIANTS)[keyof typeof CONDITION_VARIANTS]

type ReadinessCondition = {
  type: string
  status: string
  message?: string
  lastTransitionTime?: string
  reason?: string
}

const getReadinessConditionVariant = (status: string) =>
  CONDITION_VARIANTS[status as keyof typeof CONDITION_VARIANTS] ?? CONDITION_VARIANTS.Unknown

const ConditionBadge: React.FC<{ condition: ReadinessCondition }> = ({ condition }) => {
  const variant = getReadinessConditionVariant(condition.status)
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

const getVariantStyles = (variant: ConditionVariant) => {
  switch (variant) {
    case "success":
      return "bg-theme-success/25 border-theme-success"
    case "error":
      return "bg-theme-danger/25 border-theme-danger"
    case "warning":
      return "bg-theme-warning/25 border-theme-warning"
    default:
      return "bg-theme-default/25 border-theme-default"
  }
}

const ConditionCard: React.FC<{ condition: ReadinessCondition }> = ({ condition }) => {
  const variant = getReadinessConditionVariant(condition.status)

  return (
    <Box className={`p-4 border ${getVariantStyles(variant)}`}>
      <Stack direction="vertical" gap="4">
        <div>
          <ConditionBadge condition={condition} />
        </div>
        <Grid>
          <GridRow className="py-1">
            <GridColumn>
              <strong>{condition.type}</strong>
            </GridColumn>
            <GridColumn auto>{condition.status}</GridColumn>
          </GridRow>
          <GridRow className="py-1">
            <GridColumn>
              <strong>Last status change</strong>
            </GridColumn>
            <GridColumn auto>
              {condition.lastTransitionTime ? new Date(condition.lastTransitionTime).toLocaleString() : "N/A"}
            </GridColumn>
          </GridRow>
          {condition.message && (
            <GridRow className="py-1">
              <GridColumn>
                <strong>Last message</strong>
              </GridColumn>
              <GridColumn auto>{condition.message}</GridColumn>
            </GridRow>
          )}
          {condition.reason && (
            <GridRow className="py-1">
              <GridColumn>
                <strong>Reason</strong>
              </GridColumn>
              <GridColumn auto>{condition.reason}</GridColumn>
            </GridRow>
          )}
        </Grid>
      </Stack>
    </Box>
  )
}

type ReadinessConditionsProps = {
  conditions: ReadinessCondition[]
  enableDetailsView?: boolean
}

const ReadinessConditions: React.FC<ReadinessConditionsProps> = ({ conditions, enableDetailsView = false }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  if (!enableDetailsView) {
    return (
      <Stack gap="2">
        {conditions.map((condition) => (
          <ConditionBadge key={condition.type} condition={condition} />
        ))}
      </Stack>
    )
  }

  return (
    <Stack direction="vertical" gap="4">
      <Stack gap="2" alignment="center">
        {conditions.map((condition) => (
          <ConditionBadge key={condition.type} condition={condition} />
        ))}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-theme-link hover:text-theme-link-hover cursor-pointer flex items-center gap-1"
        >
          <span>{isExpanded ? "Hide" : "Show"} full conditions details</span>
          <Icon icon={isExpanded ? "expandLess" : "expandMore"} size="18" />
        </button>
      </Stack>
      {isExpanded && (
        <Stack direction="vertical" gap="3">
          {conditions.map((condition) => (
            <ConditionCard key={condition.type} condition={condition} />
          ))}
        </Stack>
      )}
    </Stack>
  )
}

export default ReadinessConditions
