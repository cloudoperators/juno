/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

const SilencesTimestamp = ({ timestamp }: any) => {
  const formatDateTime = (timestamp: any) => {
    const date = new Date(timestamp)
    return date.toLocaleString("en-GB", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Europe/Berlin",
      timeZoneName: "short",
    })
  }

  return <div>{formatDateTime(timestamp)}</div>
}

export default SilencesTimestamp
