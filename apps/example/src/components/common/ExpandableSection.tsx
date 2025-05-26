/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import {
  Box,
  Stack,
  Button,
  DataGrid,
  DataGridRow,
  DataGridCell,
  DataGridHeadCell,
  Badge,
} from "@cloudoperators/juno-ui-components"
import { Peak } from "../../mocks/db"
import HelpTooltip from "./HelpTooltip"
import { PeakFields, TooltipExplanation } from "../constants"

interface ExpandableSectionProps {
  title: string
  peaks: Peak[]
  variant: "success" | "warning" | "error"
}

const ExpandableSection: React.FC<ExpandableSectionProps> = ({ title, peaks, variant }) => {
  const [isOpen, setIsOpen] = useState(true)
  const toggleOpen = () => setIsOpen((prev) => !prev)

  return (
    <Box className="border border-gray-300 rounded-lg shadow-lg py-6 px-10">
      <Stack direction="horizontal" distribution="between" alignment="center" gap="3">
        <Stack direction="horizontal" gap="2" alignment="center">
          <h2 className="font-bold text-xl">{title}</h2>
          <Badge variant={variant} className="px-2 py-1 rounded-full text-theme-highest">
            {peaks.length}
          </Badge>
        </Stack>
        <Button onClick={toggleOpen}>{isOpen ? "Hide" : "Show"}</Button>
      </Stack>
      {isOpen && (
        <Box className="mt-4">
          <DataGrid columns={4}>
            <DataGridRow>
              <DataGridHeadCell>Name</DataGridHeadCell>
              <DataGridHeadCell>
                <div className="flex items-center">
                  <strong className="mr-2">{PeakFields.HEIGHT}</strong>
                  <HelpTooltip tooltipText={TooltipExplanation.HEIGHT} />
                </div>
              </DataGridHeadCell>
              <DataGridHeadCell>Main Range</DataGridHeadCell>
              <DataGridHeadCell>Region & Country</DataGridHeadCell>
            </DataGridRow>
            {peaks.map((peak) => (
              <DataGridRow key={peak.id}>
                <DataGridCell>{peak.name}</DataGridCell>
                <DataGridCell>{peak.height}</DataGridCell>
                <DataGridCell>{peak.mainrange}</DataGridCell>
                <DataGridCell>{`${peak.region}, ${peak.countries}`}</DataGridCell>
              </DataGridRow>
            ))}
          </DataGrid>
        </Box>
      )}
    </Box>
  )
}

export default ExpandableSection
