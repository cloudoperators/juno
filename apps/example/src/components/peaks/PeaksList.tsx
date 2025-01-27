/* eslint-disable no-unused-vars */

/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo, MutableRefObject } from "react"
import {
  Button,
  ContentAreaToolbar,
  DataGrid,
  DataGridHeadCell,
  DataGridRow,
  DataGridCell,
  useEndlessScrollList,
} from "@cloudoperators/juno-ui-components"

import { Peak } from "./Peaks"
import PeaksListItem from "./PeaksListItem"
import HintNotFound from "../shared/HintNotFound"
import { useGlobalsActions } from "../StoreProvider"

interface CustomError {
  name: string
  message: string
  statusCode?: number
}

interface PeaksListProps {
  peaks: Peak[]
  isLoading: boolean
  isError: boolean
  error?: CustomError
}

const LIST_COLUMNS = 6

const PeaksList: React.FC<PeaksListProps> = ({ peaks, isLoading, isError, error }) => {
  const { setCurrentPanel } = useGlobalsActions()

  const items = useMemo(() => peaks, [peaks])

  const refFunction = (ref: MutableRefObject<HTMLSpanElement | null>): React.ReactElement => (
    <DataGridRow>
      <DataGridCell colSpan={LIST_COLUMNS} className="border-b-0 py-0">
        <span ref={ref} />
      </DataGridCell>
    </DataGridRow>
  )

  const { scrollListItems = [], iterator } = useEndlessScrollList(items, {
    loadingObject: (
      <DataGridRow>
        <DataGridCell colSpan={LIST_COLUMNS}>
          <span>Loading ...</span>
        </DataGridCell>
      </DataGridRow>
    ),
    //@ts-ignore
    refFunction,
  })

  const handleNewPeakClick = () => {
    setCurrentPanel({ type: "PeaksNew" })
  }

  return (
    <>
      <ContentAreaToolbar>
        <Button icon="addCircle" onClick={handleNewPeakClick} label="Add a Peak" />
      </ContentAreaToolbar>
      <DataGrid columns={LIST_COLUMNS}>
        <DataGridRow>
          <DataGridHeadCell>Name</DataGridHeadCell>
          <DataGridHeadCell>Height</DataGridHeadCell>
          <DataGridHeadCell>Main Range</DataGridHeadCell>
          <DataGridHeadCell>Region</DataGridHeadCell>
          <DataGridHeadCell>Country</DataGridHeadCell>
          <DataGridHeadCell>Options</DataGridHeadCell>
        </DataGridRow>
        {scrollListItems.length > 0 ? (
          <>
            {/* @ts-ignore */}
            {iterator.map((peak: Peak, index: number) => (
              <PeaksListItem key={index} peak={peak} />
            ))}
          </>
        ) : (
          <DataGridRow>
            <DataGridCell colSpan={LIST_COLUMNS}>
              <HintNotFound text="No peaks found" />
            </DataGridCell>
          </DataGridRow>
        )}
      </DataGrid>
    </>
  )
}

export default PeaksList
