/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from "react"
import { KnownIcons } from "@cloudoperators/juno-ui-components"

export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const getSeverityColor = (severity: string): string => {
  switch (severity.toLowerCase()) {
    case "critical":
      return "text-theme-severity-critical"
    case "high":
      return "text-theme-severity-high"
    case "medium":
      return "text-theme-severity-medium"
    case "low":
      return "text-theme-severity-low"
    case "none":
      return "text-theme-severity-unknown"
    default:
      return "text-theme-default"
  }
}

export const iconMap: Record<string, KnownIcons> = {
  critical: "severityCritical",
  high: "severityHigh",
  medium: "severityMedium",
  low: "severityLow",
  none: "severityUnknown",
}

/**
 * Hook to detect if text content overflows its container
 * @param text - The text content to check
 * @returns Object containing needsExpansion boolean and textRef for the element
 */
export const useTextOverflow = (text: string | null) => {
  const [needsExpansion, setNeedsExpansion] = useState(false)
  const textRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!text || !textRef.current) {
      setNeedsExpansion(false)
      return
    }

    const element = textRef.current
    // Check if text overflows by comparing scroll width/height with client width/height
    const isOverflowing = element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth

    setNeedsExpansion(isOverflowing)
  }, [text])

  return { needsExpansion, textRef }
}
