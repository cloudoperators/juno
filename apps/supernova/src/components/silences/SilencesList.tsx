/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react"
import {
  DataGrid,
  DataGridHeadCell,
  DataGridRow,
  DataGridCell,
  SearchInput,
  Stack,
  Select,
  SelectOption,
  Spinner,
  Icon,
  useEndlessScrollList,
} from "@cloudoperators/juno-ui-components"
import constants from "../../constants"
import { useSilencesItems, useSilencesActions, useSilencesRegEx, useSilencesStatus } from "../StoreProvider"
import SilencesItem from "./SilencesItem"
import { useBoundQuery } from "../../hooks/useBoundQuery"
import { parseError } from "../../helpers"
import { useActions } from "@cloudoperators/juno-messages-provider"

const filtersStyles = `
bg-theme-background-lvl-1
py-2
px-4
my-px
`

const SilencesList = () => {
  const silences = useSilencesItems()
  const [visibleSilences, setVisibleSilences] = useState(silences)
  const status = useSilencesStatus()
  const regEx = useSilencesRegEx()
  // @ts-ignore
  const { setSilences, setSilencesStatus, setSilencesRegEx } = useSilencesActions()
  const { addMessage } = useActions()

  const { data, isLoading, error } = useBoundQuery("silences")

  if (error) {
    addMessage({
      variant: "error",
      text: parseError(error),
    })
  }

  useEffect(() => {
    if (data) {
      setSilences({
        // @ts-ignore
        items: data?.silences,
      })
    }
  }, [data])

  useEffect(() => {
    // @ts-ignore
    let filtered = silences.filter((silence: any) => silence?.status?.state === status)

    try {
      if (regEx) {
        // @ts-ignore
        filtered = filtered.filter((silence: any) => JSON.stringify(silence).match(new RegExp(regEx, "i")))
      }
    } catch (e) {
      console.warn("search term is not a valid regex. " + e)

      // @ts-expect-error TS(2550) FIXME: Property 'includes' does not exist on type 'string... Remove this comment to see the full error message
      filtered = filtered.filter((silence: any) => JSON.stringify(silence).toLowerCase().includes(regEx.toLowerCase))
    }

    setVisibleSilences(filtered)
  }, [status, regEx, silences])

  const handleSearchChange = (value: any) => {
    // debounce setSearchTerm to avoid unnecessary re-renders
    const debouncedSearchTerm = setTimeout(() => {
      setSilencesRegEx(value.target.value)
    }, 500)

    // clear timeout if we have a new value
    return () => clearTimeout(debouncedSearchTerm)
  }
  // @ts-ignore
  const { scrollListItems, iterator } = useEndlessScrollList(visibleSilences, {
    loadingObject: (
      <DataGridRow>
        <DataGridCell colSpan={3}>
          <Stack gap="3" alignment="center" direction="horizontal">
            Loading...
            <Spinner />
          </Stack>
        </DataGridCell>
      </DataGridRow>
    ),
    refFunction: (ref: any) => (
      <DataGridRow>
        <DataGridCell colSpan={3} className="border-b-0 py-0">
          <span ref={ref} />
        </DataGridCell>
      </DataGridRow>
    ),
  })

  return (
    <>
      {isLoading ? (
        <Stack gap="2">
          <span>Loading</span>
          <Spinner variant="primary" />
        </Stack>
      ) : (
        <>
          <Stack direction="horizontal" className={`${filtersStyles}`}>
            <Select
              className="w-3/12"
              label="Status"
              value={status}
              onChange={(newSilencesStatus: any) => {
                setSilencesStatus(newSilencesStatus)
              }}
            >
              <SelectOption value={constants.SILENCE_ACTIVE} />
              <SelectOption value={constants.SILENCE_PENDING} />
              <SelectOption value={constants.SILENCE_EXPIRED} />
            </Select>

            <SearchInput
              placeholder="search term or regular expression"
              className="ml-auto w-7/12"
              // @ts-ignore
              value={regEx || ""}
              onChange={(text: any) => {
                handleSearchChange(text)
              }}
              onSearch={(text: any) => {
                setSilencesRegEx(text)
              }}
              onClear={() => {
                setSilencesRegEx(null)
              }}
            />
          </Stack>

          <DataGrid columns={4} minContentColumns={[0, 2, 3]} cellVerticalAlignment="top" className="silences ">
            <>
              <DataGridRow>
                <DataGridHeadCell>Time intervall</DataGridHeadCell>
                <DataGridHeadCell>Details</DataGridHeadCell>
                <DataGridHeadCell>State</DataGridHeadCell>
                <DataGridHeadCell>Action</DataGridHeadCell>
              </DataGridRow>

              {
                // @ts-ignore
                scrollListItems?.length > 0 ? (
                  iterator.map((silence: any) => <SilencesItem silence={silence} key={silence.id} />)
                ) : (
                  <DataGridRow>
                    <DataGridCell colSpan={4}>
                      <Stack gap="3">
                        <Icon icon="info" color="text-theme-info" />
                        <div>We couldn&apos;t find any matching silences.</div>
                      </Stack>
                    </DataGridCell>
                  </DataGridRow>
                )
              }
            </>
          </DataGrid>
        </>
      )}
    </>
  )
}

export default SilencesList
