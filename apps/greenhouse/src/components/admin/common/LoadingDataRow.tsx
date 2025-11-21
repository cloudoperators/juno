/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Stack } from "@cloudoperators/juno-ui-components/index"
import { EmptyDataGridRow } from "./EmptyDataGridRow"

export const LoadingDataRow = ({ colSpan }: { colSpan: number }) => (
  <EmptyDataGridRow colSpan={colSpan}>
    <Stack gap="2" alignment="center">
      <div>Loading...</div>
    </Stack>
  </EmptyDataGridRow>
)
