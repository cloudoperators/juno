/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { DataGridCell, DataGridRow, Icon, Stack } from "@cloudoperators/juno-ui-components"
import { useMutation, useQueryClient } from "@tanstack/react-query"

import { Peak } from "./Peaks"
import { useGlobalsActions } from "../StoreProvider"

interface PeaksListItemProps {
  peak: Peak
}

const PeaksListItem: React.FC<PeaksListItemProps> = ({ peak }) => {
  const queryClient = useQueryClient()
  const { setCurrentPanel } = useGlobalsActions()

  const { mutate } = useMutation({
    mutationKey: ["peakDelete"],
    mutationFn: async ({ id }: { id: number }) => {
      const response = await fetch(`/api/peaks/${id}`, {
        method: "DELETE",
      })
      if (!response.ok) {
        throw new Error("Deletion failed")
      }
      return id
    },
  })

  const handleEditPeakClick = () => {
    setCurrentPanel({ type: "PeaksEdit", itemId: peak.id })
  }

  const handleDeletePeakClick = () => {
    mutate(
      { id: peak.id },
      {
        onSuccess: () => {
          void queryClient.invalidateQueries(["peaks"])
        },
        onError: (error) => {
          console.error("Error deleting peak:", error)
        },
      }
    )
  }

  return (
    <DataGridRow>
      <DataGridCell>
        <strong>{peak.name}</strong>
      </DataGridCell>
      <DataGridCell>{peak.height.toString()}</DataGridCell>
      <DataGridCell>{peak.mainrange}</DataGridCell>
      <DataGridCell>{peak.region}</DataGridCell>
      <DataGridCell>{peak.countries}</DataGridCell>
      <DataGridCell>
        <Stack gap="1.5">
          <Icon icon="edit" size="18" className="leading-none" onClick={handleEditPeakClick} />
          <Icon icon="deleteForever" size="18" className="leading-none" onClick={handleDeletePeakClick} />
          {peak.url && <Icon icon="openInNew" size="18" href={peak.url} target="_blank" className="leading-none" />}
        </Stack>
      </DataGridCell>
    </DataGridRow>
  )
}

export default PeaksListItem
