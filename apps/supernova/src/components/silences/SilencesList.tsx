/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
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
import { useBoundQuery, CorsNetworkError } from "../../hooks/useBoundQuery"
import { parseError } from "../../helpers"
import { useActions } from "@cloudoperators/juno-messages-provider"
import { SilencesData } from "../../api/silences"
import { FirefoxCorsWarning } from "../shared/FirefoxCorsWarning"

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
  const { setSilences, setSilencesStatus, setSilencesRegEx } = useSilencesActions()
  const { addMessage, resetMessages } = useActions()

  const { data, isLoading, error } = useBoundQuery<SilencesData>("silences")

  if (error) {
    resetMessages()
    // Extra CORS warning based on instanceof
    if (error instanceof CorsNetworkError) {
      addMessage({
        variant: "warning",
        text: <FirefoxCorsWarning />,
      })
    }

    addMessage({
      variant: "error",
      text: parseError(error),
    })
  }

  useEffect(() => {
    if (data) {
      setSilences({
        items: data.silences,
      })
    }
  }, [data])

  useEffect(() => {
    let filtered = silences.filter((silence: any) => silence?.status?.state === status)

    try {
      if (regEx) {
        filtered = filtered.filter((silence: any) => JSON.stringify(silence).match(new RegExp(regEx, "i")))
      }
    } catch (e) {
      console.warn("search term is not a valid regex. " + e)

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
    // @ts-ignore
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

              {scrollListItems?.length ? (
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
              )}
            </>
          </DataGrid>
        </>
      )}
    </>
  )
}

export default SilencesList
