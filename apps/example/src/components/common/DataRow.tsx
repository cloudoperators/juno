/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import {
  DataGridRow,
  DataGridCell,
  Stack,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  Icon,
} from "@cloudoperators/juno-ui-components"

interface DataRowProps {
  label: string
  content: React.ReactNode
  tooltipText?: string
}

const DataRow: React.FC<DataRowProps> = ({ label, content, tooltipText }) => (
  <DataGridRow>
    <DataGridCell>
      <Stack direction="horizontal" gap="1" alignment="center">
        <span>{label}</span>
        {tooltipText && (
          <Tooltip triggerEvent="hover">
            <TooltipTrigger asChild>
              <Icon icon="help" color="jn-global-text" size="20px" />
            </TooltipTrigger>
            <TooltipContent>{tooltipText}</TooltipContent>
          </Tooltip>
        )}
      </Stack>
    </DataGridCell>
    <DataGridCell>{content}</DataGridCell>
  </DataGridRow>
)

export default DataRow
