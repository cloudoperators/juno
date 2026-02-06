/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { FallbackProps } from "react-error-boundary"
import { Message } from "@cloudoperators/juno-ui-components"

const ErrorFallback = ({ error }: FallbackProps) => {
  const message = error instanceof Error && error.message ? error.message : "An error occurred"
  return <Message text={message} variant="danger" />
}

export default ErrorFallback
