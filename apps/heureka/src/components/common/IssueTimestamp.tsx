/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Stack } from "@cloudoperators/juno-ui-components"

type IssueTimestampProps = {
  targetDate: string
}

export const IssueTimestamp = ({ targetDate }: IssueTimestampProps) => {
  const targetDateTime = new Date(targetDate)

  const formattedDate = targetDateTime.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })

  return (
    <Stack direction="vertical" gap="1">
      <div>{formattedDate}</div>
    </Stack>
  )
}
