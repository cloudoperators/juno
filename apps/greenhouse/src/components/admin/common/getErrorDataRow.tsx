/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Stack } from "@cloudoperators/juno-ui-components/index"
import { EmptyDataGridRow } from "./EmptyDataGridRow"
import { ErrorMessage } from "./ErrorBoundary/ErrorMessage"

export const getErrorDataRowComponent = ({ colspan }: { colspan: number }) => {
  const ErrorDataRow = ({ error }: { error: Error }) => (
    <EmptyDataGridRow colSpan={colspan}>
      <Stack gap="2" alignment="center">
        <ErrorMessage error={error} />
      </Stack>
    </EmptyDataGridRow>
  )
  ErrorDataRow.displayName = "ErrorDataRow"
  return ErrorDataRow
}
