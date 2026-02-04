/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Card, Stack } from "@cloudoperators/juno-ui-components"

interface StatCardProps {
  label: string
  value: number | string
  subtext?: string
  variant?: "success" | "warning" | "danger" | "default"
}

export const StatCard: React.FC<StatCardProps> = ({ label, value, subtext, variant = "default" }) => {
  const getVariantColor = () => {
    switch (variant) {
      case "success":
        return "text-theme-success"
      case "warning":
        return "text-theme-warning"
      case "danger":
        return "text-theme-danger"
      default:
        return "text-theme-default"
    }
  }

  return (
    <Card padding className="flex-1">
      <Stack direction="vertical" gap="1" className="flex-1">
        <span className="text-theme-light text-sm">{label}</span>
        <Stack direction="horizontal" gap="1" alignment="baseline">
          <span className={`text-2xl font-bold ${getVariantColor()}`}>{value}</span>
          {subtext && <span className="text-xs text-theme-light">{subtext}</span>}
        </Stack>
      </Stack>
    </Card>
  )
}
