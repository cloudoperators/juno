/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Message } from "@cloudoperators/juno-ui-components"

const ErrorFallback = ({ error }: { error: Error }) => (
  <Message text={error?.message || "An error occurred"} variant="danger" onDismiss={undefined} children={undefined} />
)

export default ErrorFallback
