/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
import { DataGridCell, DataGridRow, Icon, Stack } from "@cloudoperators/juno-ui-components"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useGlobalsActions } from "../StoreProvider"

const PeaksListItem = ({ peak }: any) => {
  const queryClient = useQueryClient()
  //@ts-ignore
  const { setCurrentPanel } = useGlobalsActions()

  const { mutate } = useMutation({
    mutationKey: ["peakDelete"],
  })

  const handleEditPeakClick = () => {
    setCurrentPanel({ type: "PeaksEdit", itemId: peak.id })
  }

  const handleDeletePeakClick = () => {
    mutate(
      //@ts-ignore
      {
        id: peak.id,
      },
      {
        onSuccess: () => {
          // refetch peaks
          //@ts-ignore
          queryClient.invalidateQueries("peaks")
        },
        onError: () => {
          // TODO display error
        },
      }
    )
  }

  return (
    //@ts-ignore
    <DataGridRow>
      {/* @ts-ignore */}
      <DataGridCell>
        <strong>{peak.name}</strong>
      </DataGridCell>
      {/* @ts-ignore */}
      <DataGridCell>{peak.height}</DataGridCell>
      {/* @ts-ignore */}
      <DataGridCell>{peak.mainrange}</DataGridCell>
      {/* @ts-ignore */}
      <DataGridCell>{peak.region}</DataGridCell>
      {/* @ts-ignore */}
      <DataGridCell>{peak.countries}</DataGridCell>
      {/* @ts-ignore */}
      <DataGridCell>
        {/* Use <Stack> to align and space elements: */}
        <Stack gap="1.5">
          {/* @ts-ignore */}
          <Icon icon="edit" size="18" className="leading-none" onClick={handleEditPeakClick} />
          {/* @ts-ignore */}
          <Icon icon="deleteForever" size="18" className="leading-none" onClick={handleDeletePeakClick} />
          {/* @ts-ignore */}
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
