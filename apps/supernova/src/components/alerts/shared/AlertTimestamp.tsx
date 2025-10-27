/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { Icon, Stack, Tooltip, TooltipContent, TooltipTrigger } from "@cloudoperators/juno-ui-components"

const AlertTimestamp = ({ startTimestamp }: any) => {
  const startTime = new Date(startTimestamp)
  const now = new Date()

  // Calculate days difference
  const diffInMs = now.getTime() - startTime.getTime()
  const daysFiring = diffInMs / (1000 * 60 * 60 * 24)

  const formattedDate = startTime.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })

  const formattedTime = startTime.toLocaleString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZoneName: "short",
  })

  return (
    <Stack direction="vertical" gap="1">
      <div>{formattedDate}</div>
      <div>{formattedTime}</div>
      {daysFiring > 7 && (
        <Tooltip variant="warning" triggerEvent="hover">
          <TooltipTrigger asChild>
            <Icon icon="warning" color="text-theme-warning" />
          </TooltipTrigger>
          <TooltipContent>{`Alert has been firing for ${Math.round(daysFiring)} days`}</TooltipContent>
        </Tooltip>
      )}
    </Stack>
  )
}
export default AlertTimestamp
