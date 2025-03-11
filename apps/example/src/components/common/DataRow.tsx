/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { DataGridRow, DataGridCell, Stack } from "@cloudoperators/juno-ui-components"
import HelpTooltip from "./HelpTooltip"

interface DataRowProps {
  label: React.ReactNode
  content: React.ReactNode
  tooltipText?: string
}

const DataRow: React.FC<DataRowProps> = ({ label, content, tooltipText }) => (
  <DataGridRow>
    <DataGridCell>
      <Stack direction="horizontal" gap="1" alignment="center">
        <span>{label}</span>
        {tooltipText && <HelpTooltip tooltipText={tooltipText} />}
      </Stack>
    </DataGridCell>
    <DataGridCell>{content}</DataGridCell>
  </DataGridRow>
)

export default DataRow
