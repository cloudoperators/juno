/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import { DataGridCell, DataGridRow, Badge, Modal } from "@cloudoperators/juno-ui-components"

import { Peak } from "../../../mocks/db"
import { getNumberColorStyle } from "../utils/getNumberColor"
import PeaksListItemActions from "./PeaksListItemActions"

export interface PeaksListItemProps {
  peak: Peak
  // eslint-disable-next-line no-unused-vars
  onSelect: (peak: Peak) => void
}

const PeaksListItem: React.FC<PeaksListItemProps> = ({ peak, onSelect }) => {
  const [modalVisible, setModalVisible] = useState(false)

  const closeModal = () => setModalVisible(false)

  const numberColorStyle = getNumberColorStyle(peak.safety?.status || "unknown")

  const hoverStyles =
    "p-6 transition-transform duration-500 transform group group-hover:scale-105 cursor-pointer group-hover:bg-theme-background-lvl-2 text-highest"

  return (
    <>
      <DataGridRow className={hoverStyles}>
        <DataGridCell className={hoverStyles} onClick={() => onSelect(peak)}>
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
          <strong className="cursor-pointer text-blue-600 hover:text-blue-800" onClick={() => onSelect(peak)}>
            {peak.name}
          </strong>
        </DataGridCell>
        <DataGridCell className={hoverStyles} onClick={() => onSelect(peak)}>
          {peak.height}
        </DataGridCell>
        <DataGridCell className={hoverStyles} onClick={() => onSelect(peak)}>
          {peak.mainrange}
        </DataGridCell>
        <DataGridCell className={hoverStyles} onClick={() => onSelect(peak)}>
          {peak.region}
        </DataGridCell>
        <DataGridCell className={hoverStyles} onClick={() => onSelect(peak)}>
          {peak.countries}
        </DataGridCell>
        <DataGridCell className={hoverStyles} style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <PeaksListItemActions peak={peak} onSelect={onSelect} />
        </DataGridCell>
      </DataGridRow>

      {modalVisible && (
        <Modal
          open={modalVisible}
          onCancel={closeModal}
          closeable={true}
          title={`Details for ${peak.name}, ${peak.countries}`}
          size="large"
        >
          <h3 className="text-lg mb-3" style={numberColorStyle}>
            {`This Peak is ${peak.safety?.status || "unknown"}!`}
          </h3>
          <div>
            <p>
              <strong>Height:</strong> {peak.height}
            </p>
          </div>
        </Modal>
      )}
    </>
  )
}

export default PeaksListItem
