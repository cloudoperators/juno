/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Stack, Pill, Tooltip, TooltipTrigger, TooltipContent } from "@cloudoperators/juno-ui-components"
import { KubernetesCondition } from "../../../types/types"
import humanizedTimePeriodToNow from "../../../utils/humanizedTimePeriodToNow"

interface ConditionPillListProps {
  conditionArray: KubernetesCondition[]
}
const ConditionList: React.FC<ConditionPillListProps> = (props: ConditionPillListProps) => {
  return (
    <Stack gap="2" alignment="start" wrap={true}>
      {props.conditionArray.map((condition: KubernetesCondition) => {
        return (
          <Tooltip triggerEvent="hover" key={condition.type}>
            <TooltipTrigger>
              <Pill
                pillKeyLabel={condition.type}
                pillKey={condition.type}
                // @ts-expect-error TS(2322): Type 'string' is not assignable to type 'never'
                pillkeyvalue={condition.status}
                pillValue={condition.status}
              />
            </TooltipTrigger>
            <TooltipContent>
              <ul>
                <li>{humanizedTimePeriodToNow(condition.lastTransitionTime!)} ago</li>
                <li>{condition.message}</li>
              </ul>
            </TooltipContent>
          </Tooltip>
        )
      })}
    </Stack>
  )
}

export default ConditionList
