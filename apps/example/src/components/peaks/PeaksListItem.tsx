import React, { useState } from "react"
import {
  DataGridCell,
  DataGridRow,
  Stack,
  Button,
  PortalProvider,
  Modal,
  ModalFooter,
  ButtonRow,
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

  const [isOpen, setOpen] = useState(false)
  const open = () => {
    setOpen(true)
  }
  const close = () => {
    setOpen(false)
  }

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

  return (
    <DataGridRow onClick={() => onSelect(peak)}>
      {/* Use onSelect callback */}
      <DataGridCell>
        <strong>{peak.name}</strong>
      </DataGridCell>
      <DataGridCell>{peak.height.toString()}</DataGridCell>
      <DataGridCell>{peak.mainrange}</DataGridCell>
      <DataGridCell>{peak.region}</DataGridCell>
      <DataGridCell>{peak.countries}</DataGridCell>
      <DataGridCell>
        <Stack gap="1.5">
          <Button icon="edit" onClick={handleEditPeakClick} variant="primary" />
          <>
            <Button icon="deleteForever" onClick={open} variant="primary-danger" />
            <PortalProvider.Portal>
              <Modal
                title="More Details"
                open={isOpen}
                onCancel={close}
                modalFooter={
                  <ModalFooter className="jn-justify-between jn-items-center">
                    <ButtonRow>
                      <Button label="Delete" variant="primary-danger" />
                      <Button label="Cancel" />
                    </ButtonRow>
                  </ModalFooter>
                }
              >
                <p>Delete Ama Dablam forever?</p>
              </Modal>
            </PortalProvider.Portal>
          </>
          {peak.url && <Button icon="openInNew" href={peak.url} target="_blank" />}
        </Stack>
      </DataGridCell>
    </DataGridRow>
  )
}

export default PeaksListItem
