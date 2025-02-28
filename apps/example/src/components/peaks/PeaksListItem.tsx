/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import {
  DataGridCell,
  DataGridRow,
  Stack,
  PortalProvider,
  Modal,
  ModalFooter,
  ButtonRow,
  Icon,
  Button,
} from "@cloudoperators/juno-ui-components"

// NEEDED
// import { useMutation, useQueryClient } from "@tanstack/react-query"

import { Peak } from "./Peaks"
import { useGlobalsActions } from "../StoreProvider"

interface PeaksListItemProps {
  peak: Peak
  // eslint-disable-next-line no-unused-vars
  onSelect: (peak: Peak) => void
}

const PeaksListItem: React.FC<PeaksListItemProps> = ({ peak, onSelect }) => {
  // NEEDED
  // const queryClient = useQueryClient()
  const { setCurrentPanel } = useGlobalsActions()

  // NEEDED
  // const { mutate } = useMutation({
  //   mutationKey: ["peakDelete"],
  //   mutationFn: async ({ id }: { id: number }) => {
  //     const response = await fetch(`/api/peaks/${id}`, {
  //       method: "DELETE",
  //     })
  //     if (!response.ok) {
  //       throw new Error("Deletion failed")
  //     }
  //     return id
  //   },
  // })

  const [isOpen, setOpen] = useState(false)
  const open = () => setOpen(true)
  const close = () => setOpen(false)

  const handleEditPeakClick = () => {
    setCurrentPanel({ type: "PeaksEdit", itemId: peak.id })
  }

  // NEEDED
  // const handleDeletePeakClick = () => {
  //   mutate(
  //     { id: peak.id },
  //     {
  //       onSuccess: () => {
  //         void queryClient.invalidateQueries(["peaks"])
  //       },
  //       onError: (error) => {
  //         console.error("Error deleting peak:", error)
  //       },
  //     }
  //   )
  // }

  const handlePeakNameClick = () => {
    onSelect(peak) // Now tied to name click, not the entire row
  }

  return (
    <DataGridRow className="transition ease-in-out duration-200">
      <DataGridCell>
        <strong className="cursor-pointer text-blue-600 hover:text-blue-800" onClick={handlePeakNameClick}>
          {peak.name}
        </strong>
      </DataGridCell>
      <DataGridCell>{peak.height.toString()}</DataGridCell>
      <DataGridCell>{peak.mainrange}</DataGridCell>
      <DataGridCell>{peak.region}</DataGridCell>
      <DataGridCell>{peak.countries}</DataGridCell>
      <DataGridCell style={{ paddingTop: "20px", paddingBottom: "20px" }}>
        <Stack gap="1.5">
          <Icon icon="edit" onClick={handleEditPeakClick} className="cursor-pointer" />
          <>
            <Icon icon="deleteForever" onClick={open} className="cursor-pointer" />
            <PortalProvider.Portal>
              <Modal
                title="More Details"
                open={isOpen}
                modalFooter={
                  <ModalFooter className="jn-justify-between jn-items-center">
                    <ButtonRow>
                      <Button onClick={close} label="Cancel" />
                      <Button label="Delete" variant="primary-danger" />
                    </ButtonRow>
                  </ModalFooter>
                }
              >
                <p>Delete {peak.name} forever?</p>
              </Modal>
            </PortalProvider.Portal>
          </>
          {peak.url && <Icon icon="openInNew" href={peak.url} target="_blank" className="cursor-pointer" />}
        </Stack>
      </DataGridCell>
    </DataGridRow>
  )
}

export default PeaksListItem
