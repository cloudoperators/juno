/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode } from "react"
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary"
import ErrorFallback from "./ErrorFallback"

const ErrorBoundary = ({ children }: { children: ReactNode }) => (
  <ReactErrorBoundary fallbackRender={ErrorFallback}>{children}</ReactErrorBoundary>
)

export default ErrorBoundary
