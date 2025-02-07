/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
// @ts-expect-error TS(2792) FIXME: Cannot find module 'luxon'. Did you mean to set th... Remove this comment to see the full error message
import { DateTime } from "luxon"

//get start and end time of the silence

const SilencesTimestamp = ({ timestamp }: any) => {
  let dt
  if (timestamp.includes("T")) {
    dt = DateTime.fromISO(timestamp)
  } else {
    dt = DateTime.fromSQL(timestamp)
  }

  const formattedTime = dt.toFormat("yyyy-LL-dd HH:mm Z")

  return <div>{formattedTime}</div>
}
export default SilencesTimestamp
