/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
// @ts-expect-error TS(2792) FIXME: Cannot find module 'luxon'. Did you mean to set th... Remove this comment to see the full error message
import { DateTime } from "luxon"

// @ts-expect-error TS(2792) FIXME: Cannot find module '@cloudoperators/juno-ui-compon... Remove this comment to see the full error message
import { Icon, Stack, Tooltip, TooltipContent, TooltipTrigger } from "@cloudoperators/juno-ui-components"

const AlertTimestamp = ({ startTimestamp }: any) => {
  const dateFormat = { ...DateTime.DATE_MED }
  const timeFormat = { ...DateTime.TIME_24_WITH_SHORT_OFFSET }
  const startTime = DateTime.fromISO(startTimestamp)
  const daysFiring = DateTime.now().diff(startTime, "days")

  return (
    <Stack direction="vertical" gap="1">
      <div>{startTime.toLocaleString(dateFormat)}</div>
      <div>{startTime.toLocaleString(timeFormat)}</div>
      {daysFiring.days > 7 && (
        <Tooltip variant="warning" triggerEvent="hover">
          <TooltipTrigger asChild>
            <Icon icon="warning" color="text-theme-warning" />
          </TooltipTrigger>
          <TooltipContent>{`Alert has been firing for ${Math.round(daysFiring.days)} days`}</TooltipContent>
        </Tooltip>
      )}
    </Stack>
  )
}
export default AlertTimestamp
