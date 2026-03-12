/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Icon, Stack } from "@cloudoperators/juno-ui-components"

function getErrorInfo(error: unknown): { name: string; message: string } {
  const defaultError = { name: "Error", message: "Something went wrong" }

  if (error instanceof Error) {
    return {
      name: error.name || defaultError.name,
      message: error.message || defaultError.message,
    }
  }

  if (typeof error === "string") {
    return { name: defaultError.name, message: error }
  }

  return defaultError
}

export interface ErrorMessageProps {
  error: unknown
}

export const ErrorMessage = ({ error }: ErrorMessageProps) => {
  const { name, message } = getErrorInfo(error)

  return (
    <Stack gap="2" alignment="center">
      <Icon icon="danger" className="text-theme-danger" />
      <span>
        {name}: {message}
      </span>
    </Stack>
  )
}
