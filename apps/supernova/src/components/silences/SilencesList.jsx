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
import {
  useSilencesItems,
  useSilencesActions,
  useSilencesRegEx,
  useSilencesStatus,
  useSilencesLocalItems,
  useGlobalsApiEndpoint,
} from "../StoreProvider"
import SilencesItem from "./SilencesItem"
import { useQuery } from "@tanstack/react-query"
import { fetchSilences } from "../../workers/silences"

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
  const localSilences = useSilencesLocalItems()
  const endpoint = useGlobalsApiEndpoint()
  const {
    setSilences,
    setIsUpdating: setSilencesIsUpdating,
    setError: setSilencesError,
    setSilencesStatus,
    setSilencesRegEx,
  } = useSilencesActions()

  const { data, error, isLoading } = useQuery({
    queryKey: ["silences", endpoint], // Pass the query key as part of the object
    queryFn: () => fetchSilences(endpoint), // Pass the query function
    enabled: !!endpoint, // Add any other options here
  })

  useEffect(() => {
    if (data) {
      setSilences({
        items: data?.silences,
        itemsHash: data?.silencesHash,
        itemsByState: data?.silencesBySate,
      })
    }
  }, [data])

  useEffect(() => {
    if (error) {
      console.log("sdferr", error)
      setSilencesError(error)
    }
  }, [error])

  useEffect(() => {
    if (isLoading) {
      console.log("sdfload", isLoading)
      setSilencesIsUpdating(isLoading)
    }
  }, [isLoading])

  useEffect(() => {
    let filtered = silences.filter((silence) => silence?.status?.state === status)

    try {
      if (regEx) {
        filtered = filtered.filter((silence) => JSON.stringify(silence).match(new RegExp(regEx, "i")))
      }
    } catch (e) {
      console.warn("search term is not a valid regex. " + e)

      filtered = filtered.filter((silence) => JSON.stringify(silence).toLowerCase().includes(regEx.toLowerCase))
    }

    if (localSilences) {
      //  when selected silences status is pending: if localSilence.status.state is creating add them to filtered
      if (status === constants.SILENCE_PENDING) {
        for (const [, localSilence] of Object.entries(localSilences)) {
          if (localSilence.status.state === constants.SILENCE_CREATING) {
            filtered.push(localSilence)
          }
        }
      }

      // when selected silences status is active: if silence.id is in localSilences add the localSilence to the shownSilences else the filtered silence
      if (status === constants.SILENCE_ACTIVE) {
        filtered = filtered.map((silence) => {
          for (const [, localSilence] of Object.entries(localSilences)) {
            if (silence.id === localSilence.id) {
              return localSilence
            }
          }
          return silence
        })
      }
    }

    setVisibleSilences(filtered)
  }, [status, regEx, silences, localSilences])

  const handleSearchChange = (value) => {
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
    refFunction: (ref) => (
      <DataGridRow>
        <DataGridCell colSpan={3} className="border-b-0 py-0">
          <span ref={ref} />
        </DataGridCell>
      </DataGridRow>
    ),
  })

  return (
    <>
      <Stack direction="horizontal" className={`${filtersStyles}`}>
        <Select
          className="w-3/12"
          label="Status"
          value={status}
          onChange={(newSilencesStatus) => {
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
          onChange={(text) => {
            handleSearchChange(text)
          }}
          onSearch={(text) => {
            setSilencesRegEx(text)
          }}
          onClear={() => {
            setSilencesRegEx(null)
          }}
        />
      </Stack>

      <DataGrid columns={4} minContentColumns={[0, 2, 3]} cellVerticalAlignment="top" className="silences ">
        {!isLoading ? (
          <>
            <DataGridRow>
              <DataGridHeadCell>Time intervall</DataGridHeadCell>
              <DataGridHeadCell>Details</DataGridHeadCell>
              <DataGridHeadCell>State</DataGridHeadCell>
              <DataGridHeadCell>Action</DataGridHeadCell>
            </DataGridRow>
            {scrollListItems?.length > 0 ? (
              iterator.map((silence) => <SilencesItem silence={silence} key={silence.id} />)
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
        ) : (
          <Stack gap="2">
            <span>Loading</span>
            <Spinner variant="primary" />
          </Stack>
        )}
      </DataGrid>
    </>
  )
}

export default SilencesList
