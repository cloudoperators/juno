/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { DataGridCell, DataGridRow, Badge, Stack } from "@cloudoperators/juno-ui-components"

import { Peak } from "../../../mocks/db"
import useUIStore from "../../../store/useUIStore"
import usePeaksStore from "../../../store/usePeaksStore"

import { DEFAULT_SMALL_APP_MARGIN } from "../../constants"

import PeaksListItemActions from "./PeaksListItemActions"

export interface PeaksListItemProps {
  peak: Peak
  onSelect: (_peak: Peak) => void
}

const PeaksListItem: React.FC<PeaksListItemProps> = ({ peak, onSelect }) => {
  const { setCurrentPanel } = useUIStore()
  const { setSelectedPeakId } = usePeaksStore()

  const openPanel = () => {
    setCurrentPanel("ShowPeak")
    setSelectedPeakId(peak.id)
  }

  const hoverStyles = "p-6 group group-hover cursor-pointer group-hover:bg-theme-background-lvl-2 text-highest"

  return (
    <DataGridRow className={hoverStyles}>
      <DataGridCell className={hoverStyles} onClick={openPanel}>
        <Stack direction="horizontal" gap={DEFAULT_SMALL_APP_MARGIN} alignment="center">
          {peak.safety && (
            <Badge
              icon
              text={peak.safety.status}
              variant={peak.safety.variant}
              className="cursor-pointer min-w-[70px] text-center"
            />
          )}
        </Stack>
      </DataGridCell>
      <DataGridCell className={hoverStyles} onClick={openPanel}>
        <strong className="cursor-pointer text-blue-600 hover:text-blue-800">{peak.name}</strong>
      </DataGridCell>
      <DataGridCell className={hoverStyles} onClick={openPanel}>
        {peak.height}
      </DataGridCell>
      <DataGridCell className={hoverStyles} onClick={openPanel}>
        {peak.mainrange}
      </DataGridCell>
      <DataGridCell className={hoverStyles} onClick={openPanel}>
        {peak.region}
      </DataGridCell>
      <DataGridCell className={hoverStyles} onClick={openPanel}>
        {peak.countries}
      </DataGridCell>
      <DataGridCell className={`pt-5 pb-5 ${hoverStyles}`}>
        <PeaksListItemActions peak={peak} onSelect={onSelect} />
      </DataGridCell>
    </DataGridRow>
  )
}

export default PeaksListItem
