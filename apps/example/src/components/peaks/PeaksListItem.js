/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
import { DataGridCell, DataGridRow, Icon, Stack } from "@cloudoperators/juno-ui-components"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useGlobalsActions } from "../StoreProvider"

const PeaksListItem = ({ peak }) => {
  const queryClient = useQueryClient()
  const { setCurrentPanel } = useGlobalsActions()

  const { mutate } = useMutation({
    mutationKey: ["peakDelete"],
  })

  const handleEditPeakClick = () => {
    setCurrentPanel({ type: "PeaksEdit", itemId: peak.id })
  }

  const handleDeletePeakClick = () => {
    mutate(
      {
        id: peak.id,
      },
      {
        onSuccess: () => {
          // refetch peaks
          queryClient.invalidateQueries("peaks")
        },
        onError: () => {
          // TODO display error
        },
      }
    )
  }

  return (
    <DataGridRow>
      <DataGridCell>
        <strong>{peak.name}</strong>
      </DataGridCell>
      <DataGridCell>{peak.height}</DataGridCell>
      <DataGridCell>{peak.mainrange}</DataGridCell>
      <DataGridCell>{peak.region}</DataGridCell>
      <DataGridCell>{peak.countries}</DataGridCell>
      <DataGridCell>
        {/* Use <Stack> to align and space elements: */}
        <Stack gap="1.5">
          <Icon icon="edit" size="18" className="leading-none" onClick={handleEditPeakClick} />
          <Icon icon="deleteForever" size="18" className="leading-none" onClick={handleDeletePeakClick} />
          {peak?.url && <Icon icon="openInNew" size="18" href={peak.url} target="_blank" className="leading-none" />}
        </Stack>
      </DataGridCell>
    </DataGridRow>
  )
}

PeaksListItem.propTypes = {
  peak: PropTypes.object,
}

export default PeaksListItem
