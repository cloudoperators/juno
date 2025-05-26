/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { DataGridCell, DataGridRow, Badge } from "@cloudoperators/juno-ui-components"
import { Peak } from "../../../mocks/db"
import PeaksListItemActions from "./PeaksListItemActions"
import { useGlobalsActions } from "../../../store/StoreProvider"

export interface PeaksListItemProps {
  peak: Peak
  onSelect: () => void
}

const PeaksListItem: React.FC<PeaksListItemProps> = ({ peak, onSelect }) => {
  const { setCurrentPanel } = useGlobalsActions()

  const openPanel = () => {
    setCurrentPanel({ type: "ShowPeak", itemId: peak.id })
  }

  const hoverStyles =
    "p-6 transition-transform duration-500 transform group group-hover:scale-105 cursor-pointer group-hover:bg-theme-background-lvl-2 text-highest"

  return (
    <>
      <DataGridRow className={hoverStyles}>
        <DataGridCell className={hoverStyles} onClick={() => openPanel()}>
          <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
            {peak.safety && (
              <Badge
                icon
                text={peak.safety.status}
                variant={peak.safety.variant}
                className="cursor-pointer"
                style={{ minWidth: "70px", textAlign: "center" }}
              />
            )}
          </div>
        </DataGridCell>
        <DataGridCell className={hoverStyles}>
          <strong className="cursor-pointer text-blue-600 hover:text-blue-800" onClick={() => openPanel()}>
            {peak.name}
          </strong>
        </DataGridCell>
        <DataGridCell className={hoverStyles} onClick={() => openPanel()}>
          {peak.height}
        </DataGridCell>
        <DataGridCell className={hoverStyles} onClick={() => openPanel()}>
          {peak.mainrange}
        </DataGridCell>
        <DataGridCell className={hoverStyles} onClick={() => openPanel()}>
          {peak.region}
        </DataGridCell>
        <DataGridCell className={hoverStyles} onClick={() => openPanel()}>
          {peak.countries}
        </DataGridCell>
        <DataGridCell className={hoverStyles} style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <PeaksListItemActions peak={peak} onSelect={onSelect} />
        </DataGridCell>
      </DataGridRow>
    </>
  )
}

export default PeaksListItem
