/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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
} from "@cloudoperators/juno-ui-components"
import PeaksListItem from "./PeaksListItem"
import HintNotFound from "../shared/HintNotFound"
import { useGlobalsActions } from "../StoreProvider"

const LIST_COLUMNS = 6

const PeaksList = ({ peaks }: any) => {
  //@ts-ignore
  const { setCurrentPanel } = useGlobalsActions()

  const items = useMemo(() => {
    if (!peaks) return []
    return peaks
  }, [peaks])

  const { scrollListItems, iterator } = useEndlessScrollList(items, {
    loadingObject: (
      //@ts-ignore
      <DataGridRow>
        {/* @ts-ignore */}
        <DataGridCell colSpan={LIST_COLUMNS}>
          <span>Loading ...</span>
        </DataGridCell>
      </DataGridRow>
    ),
    refFunction: (ref: any) => (
      //@ts-ignore
      <DataGridRow>
        {/* @ts-ignore */}
        <DataGridCell colSpan={LIST_COLUMNS} className="border-b-0 py-0">
          <span ref={ref} />
        </DataGridCell>
      </DataGridRow>
    ),
  })

  const handleNewPeakClick = () => {
    setCurrentPanel({ type: "PeaksNew" })
  }

  return (
    <>
      <ContentAreaToolbar>
        {/* @ts-ignore */}
        <Button icon="addCircle" onClick={handleNewPeakClick} label="Add a Peak" />
      </ContentAreaToolbar>
      {/* @ts-ignore */}
      <DataGrid columns={LIST_COLUMNS}>
        {/* @ts-ignore */}
        <DataGridRow>
          {/* @ts-ignore */}
          <DataGridHeadCell>Name</DataGridHeadCell>
          {/* @ts-ignore */}
          <DataGridHeadCell>Height</DataGridHeadCell>
          {/* @ts-ignore */}
          <DataGridHeadCell>Main Range</DataGridHeadCell>
          {/* @ts-ignore */}
          <DataGridHeadCell>Region</DataGridHeadCell>
          {/* @ts-ignore */}
          <DataGridHeadCell>Country</DataGridHeadCell>
          {/* @ts-ignore */}
          <DataGridHeadCell>Options</DataGridHeadCell>
        </DataGridRow>

        {scrollListItems?.length > 0 ? (
          <>
            {iterator.map((peak: any, index: any) => (
              <PeaksListItem key={index} peak={peak} />
            ))}
          </>
        ) : (
          //@ts-ignore
          <DataGridRow>
            {/* @ts-ignore */}
            <DataGridCell colSpan={LIST_COLUMNS}>
              <HintNotFound text="No peaks found" />
            </DataGridCell>
          </DataGridRow>
        )}
      </DataGrid>
    </>
  )
}

PeaksList.propTypes = {
  peaks: PropTypes.array,
}

export default PeaksList
