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

/**
 * Utility functions to replace lodash dependencies
 */

// Replace _.isEmpty()
export const isEmpty = (value: any): boolean => {
  if (value == null) return true
  if (typeof value === "string" || Array.isArray(value)) return value.length === 0
  if (typeof value === "object") return Object.keys(value).length === 0
  return false
}

// Replace _.isNil()
export const isNil = (value: any): value is null | undefined => {
  return value == null
}

// Replace _.omit()
export const omit = <T extends Record<string, any>, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> => {
  const result = { ...obj }
  keys.forEach((key) => {
    delete result[key]
  })
  return result
}

// Replace _.map() for objects - transforms object values
export const mapObject = <T, U>(obj: Record<string, T>, iteratee: (value: T, key: string) => U): Record<string, U> => {
  const result: Record<string, U> = {}
  Object.entries(obj).forEach(([key, value]) => {
    result[key] = iteratee(value, key)
  })
  return result
}
