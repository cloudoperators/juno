/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
// @ts-expect-error TS(2307): Cannot find module '@cloudoperators/juno-ui-compon... Remove this comment to see the full error message
import { DataGridCell, DataGridRow, Icon, Stack } from "@cloudoperators/juno-ui-components"
import { useMutation, useQueryClient } from "@tanstack/react-query"
// @ts-expect-error TS(6142): Module '../StoreProvider' was resolved to '/Users/... Remove this comment to see the full error message
import { useGlobalsActions } from "../StoreProvider"

const PeaksListItem = ({ peak }: any) => {
  const queryClient = useQueryClient()
  // @ts-expect-error TS(2339): Property 'setCurrentPanel' does not exist on type ... Remove this comment to see the full error message
  const { setCurrentPanel } = useGlobalsActions()

  const { mutate } = useMutation({
    mutationKey: ["peakDelete"],
  })

  const handleEditPeakClick = () => {
    setCurrentPanel({ type: "PeaksEdit", itemId: peak.id })
  }

  const handleDeletePeakClick = () => {
    mutate(
      // @ts-expect-error TS(2345): Argument of type '{ id: any; }' is not assignable ... Remove this comment to see the full error message
      {
        id: peak.id,
      },
      {
        onSuccess: () => {
          // refetch peaks
          // @ts-expect-error TS(2769): No overload matches this call.
          queryClient.invalidateQueries("peaks")
        },
        onError: () => {
          // TODO display error
        },
      }
    )
  }

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <DataGridRow>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see
      the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove
      this comment to see the full error message
      <DataGridCell>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see
        the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided...
        Remove this comment to see the full error message
        <strong>{peak.name}</strong>
      </DataGridCell>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see
      the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove
      this comment to see the full error message
      <DataGridCell>{peak.height}</DataGridCell>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see
      the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove
      this comment to see the full error message
      <DataGridCell>{peak.mainrange}</DataGridCell>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see
      the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove
      this comment to see the full error message
      <DataGridCell>{peak.region}</DataGridCell>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see
      the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove
      this comment to see the full error message
      <DataGridCell>{peak.countries}</DataGridCell>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see
      the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove
      this comment to see the full error message
      <DataGridCell>
        {/* Use <Stack> to align and space elements: */}
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see
        the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided...
        Remove this comment to see the full error message
        <Stack gap="1.5">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to
          see the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
          provided... Remove this comment to see the full error message
          <Icon icon="edit" size="18" className="leading-none" onClick={handleEditPeakClick} />
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to
          see the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
          provided... Remove this comment to see the full error message
          <Icon icon="deleteForever" size="18" className="leading-none" onClick={handleDeletePeakClick} />
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to
          see the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
          provided... Remove this comment to see the full error message
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
