/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { DateTime } from "luxon"
import { Stack } from "@cloudoperators/juno-ui-components"

type IssueTimestampProps = {
  targetDate: string
}

export const IssueTimestamp = ({ targetDate }: IssueTimestampProps) => {
  const dateFormat = { ...DateTime.DATE_MED }
  const targetDateTime = DateTime.fromISO(targetDate)

  return (
    <Stack direction="vertical" gap="1">
      <div>{targetDateTime.toLocaleString(dateFormat)}</div>
    </Stack>
  )
}
