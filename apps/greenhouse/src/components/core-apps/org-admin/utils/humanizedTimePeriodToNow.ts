/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

const humanizedTimePeriodToNow = (jsDateAllowedInput: string | number | Date): string => {
  const now = new Date()
  const inputDate = new Date(jsDateAllowedInput)
  const diffMs = Math.abs(now.getTime() - inputDate.getTime())

  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))

  const parts: string[] = []

  if (days > 0) {
    parts.push(`${days} ${days === 1 ? "day" : "days"}`)
  }
  if (hours > 0) {
    parts.push(`${hours} ${hours === 1 ? "hour" : "hours"}`)
  }
  if (minutes > 0) {
    parts.push(`${minutes} ${minutes === 1 ? "minute" : "minutes"}`)
  }

  return parts.length > 0 ? parts.join(", ") : "0 minutes"
}

export default humanizedTimePeriodToNow
