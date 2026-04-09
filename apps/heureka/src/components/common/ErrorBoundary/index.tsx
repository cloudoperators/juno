/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode } from "react"
import { ErrorBoundary as ReactErrorBoundary, FallbackProps } from "react-error-boundary"
import { ErrorMessage } from "./ErrorMessage"

export const ErrorBoundary = ({
  children,
  displayErrorMessage,
  fallbackRender,
  resetKeys,
  className,
}: {
  children: ReactNode
  displayErrorMessage?: boolean
  fallbackRender?: (props: FallbackProps) => ReactNode
  resetKeys?: any
  className?: string
}) => (
  <ReactErrorBoundary
    resetKeys={resetKeys}
    fallbackRender={!!displayErrorMessage ? fallbackRender || ErrorMessage : () => null}
  >
    {className ? <div className={className}>{children}</div> : children}
  </ReactErrorBoundary>
)
