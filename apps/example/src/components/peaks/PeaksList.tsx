/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo } from "react"
import PropTypes from "prop-types"
import {
  Button,
  ContentAreaToolbar,
  DataGrid,
  DataGridHeadCell,
  DataGridRow,
  DataGridCell,
  useEndlessScrollList,
// @ts-expect-error TS(2307): Cannot find module '@cloudoperators/juno-ui-compon... Remove this comment to see the full error message
} from "@cloudoperators/juno-ui-components"
// @ts-expect-error TS(6142): Module './PeaksListItem' was resolved to '/Users/I... Remove this comment to see the full error message
import PeaksListItem from "./PeaksListItem"
// @ts-expect-error TS(6142): Module '../shared/HintNotFound' was resolved to '/... Remove this comment to see the full error message
import HintNotFound from "../shared/HintNotFound"
// @ts-expect-error TS(6142): Module '../StoreProvider' was resolved to '/Users/... Remove this comment to see the full error message
import { useGlobalsActions } from "../StoreProvider"

const LIST_COLUMNS = 6

const PeaksList = ({
  peaks
}: any) => {
  // @ts-expect-error TS(2339): Property 'setCurrentPanel' does not exist on type ... Remove this comment to see the full error message
  const { setCurrentPanel } = useGlobalsActions()

  const items = useMemo(() => {
    if (!peaks) return []
    return peaks
  }, [peaks])

  const { scrollListItems, iterator } = useEndlessScrollList(items, {
    loadingObject: (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <DataGridRow>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <DataGridCell colSpan={LIST_COLUMNS}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <span>Loading ...</span>
        </DataGridCell>
      </DataGridRow>
    ),
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    refFunction: (ref: any) => <DataGridRow>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <DataGridCell colSpan={LIST_COLUMNS} className="border-b-0 py-0">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <span ref={ref} />
      </DataGridCell>
    </DataGridRow>,
  })

  const handleNewPeakClick = () => {
    setCurrentPanel({ type: "PeaksNew" })
  }

  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ContentAreaToolbar>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Button icon="addCircle" onClick={handleNewPeakClick} label="Add a Peak" />
    </ContentAreaToolbar>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <DataGrid columns={LIST_COLUMNS}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <DataGridRow>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <DataGridHeadCell>Name</DataGridHeadCell>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <DataGridHeadCell>Height</DataGridHeadCell>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <DataGridHeadCell>Main Range</DataGridHeadCell>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <DataGridHeadCell>Region</DataGridHeadCell>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <DataGridHeadCell>Country</DataGridHeadCell>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <DataGridHeadCell>Options</DataGridHeadCell>
      </DataGridRow>

      {scrollListItems?.length > 0 ? (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <>
          {iterator.map((peak: any, index: any) => (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <PeaksListItem key={index} peak={peak} />
          ))}
        </>
      ) : (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <DataGridRow>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <DataGridCell colSpan={LIST_COLUMNS}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <HintNotFound text="No peaks found" />
          </DataGridCell>
        </DataGridRow>
      )}
    </DataGrid>
  </>;
}

PeaksList.propTypes = {
  peaks: PropTypes.array,
}

export default PeaksList
