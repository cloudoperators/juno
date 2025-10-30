/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Icon, Stack } from "@cloudoperators/juno-ui-components"

type ErrorMessageProps = {
  error: Error
}

export const ErrorMessage = ({ error }: ErrorMessageProps) => {
  const errorName = error.name ? `${error.name}: ` : "Error: "
  const errorMessage = error.message || "Something went wrong"

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
