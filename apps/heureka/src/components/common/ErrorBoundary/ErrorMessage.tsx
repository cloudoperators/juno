/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { FallbackProps } from "react-error-boundary"
import { Icon, Stack } from "@cloudoperators/juno-ui-components"

type ErrorMessageProps = {
  error: Error
} | FallbackProps

export const ErrorMessage = ({ error }: ErrorMessageProps) => {
  // Handle both direct Error prop and FallbackProps from react-error-boundary
  const errorObj = error as Error
  const errorName = errorObj.name ? `${errorObj.name}: ` : "Error: "
  const errorMessage = errorObj.message || "Something went wrong"

  return (
    <Stack gap="2" alignment="center">
      <Icon icon="danger" className="text-theme-danger" />
      <span>
        {errorName}
        {errorMessage}
      </span>
    </Stack>
  )
}
