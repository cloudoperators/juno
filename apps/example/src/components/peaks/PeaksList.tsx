/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react"
import {
  DataGrid,
  DataGridHeadCell,
  DataGridRow,
  DataGridCell,
  ContentHeading,
  Button,
  Stack,
  DataGridToolbar,
  Select,
  SelectOption,
  TextInput,
  SearchInput,
  Pill,
} from "@cloudoperators/juno-ui-components"

import PeaksListItem from "./PeaksListItem"
import HintNotFound from "../shared/HintNotFound"
import { Peak } from "./Peaks"
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
  onSelect: (peak: Peak) => void
}

const LIST_COLUMNS = 6

const PeaksList: React.FC<PeaksListProps> = ({ peaks, isLoading, isError, error, onSelect }) => {
  const items = useMemo(() => peaks, [peaks])
  const { setCurrentPanel } = useGlobalsActions()

  const [showFilters, setShowFilters] = useState(false)
  const [filterSelections, setFilterSelections] = useState<Record<string, string[]>>({
    name: [],
    mainrange: [],
    region: [],
    countries: [],
  })

  const [droplistSelections, setDroplistSelections] = useState({
    name: "",
    mainrange: "",
    region: "",
    countries: "",
  })

  const availableOptions = useMemo(
    () => ({
      name: uniqueValues("name"),
      mainrange: uniqueValues("mainrange"),
      region: uniqueValues("region"),
      countries: uniqueValues("countries"),
    }),
    [peaks, filterSelections]
  )

  function uniqueValues(field: keyof Peak): string[] {
    return Array.from(new Set(peaks.map((peak) => peak[field]))).filter((val) => !filterSelections[field].includes(val))
  }

  const handleNewPeakClick = () => {
    setCurrentPanel({ type: "PeaksNew" })
  }

  const toggleFilterToolbar = () => {
    setShowFilters((prev) => !prev)
  }

  const addFilter = (key: string, value: string) => {
    setFilterSelections((prev) => ({
      ...prev,
      [key]: [...prev[key], value],
    }))
    setDroplistSelections((prev) => ({
      ...prev,
      [key]: "",
    }))
  }

  const removeFilter = (key: string, value: string) => {
    setFilterSelections((prev) => ({
      ...prev,
      [key]: prev[key].filter((item) => item !== value),
    }))
  }

  const clearAllFilters = () => {
    setFilterSelections({
      name: [],
      mainrange: [],
      region: [],
      countries: [],
    })
    setDroplistSelections({
      name: "",
      mainrange: "",
      region: "",
      countries: "",
    })
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
        <ContentHeading>All Peaks</ContentHeading>
        <div style={{ display: "flex", gap: "1rem" }}>
          <SearchInput placeholder="Search by Name..." />
          <Button
            title={showFilters ? "Hide Filter Menu" : "Show Filter Menu"}
            icon={showFilters ? "expandLess" : "expandMore"}
            onClick={toggleFilterToolbar}
            label={showFilters ? "Hide Filter Menu" : "Show Filter Menu"}
            variant="default"
          />
          <Button icon="addCircle" onClick={handleNewPeakClick} label="Add New Peak" variant="primary" />
        </div>
      </div>

      {showFilters && (
        <DataGridToolbar>
          <Stack direction="horizontal" gap="2" className="flex-grow w-full" justifyContent="space-between">
            <div style={{ display: "flex", flex: "1" }}>
              {["name", "mainrange", "region", "countries"].map((filterKey) => (
                <div key={filterKey} style={{ flex: "1 1 auto", margin: "0 1rem" }}>
                  <label htmlFor={`${filterKey}Filter`}>{filterKey.charAt(0).toUpperCase() + filterKey.slice(1)}</label>
                  <Select
                    id={`${filterKey}Filter`}
                    value={droplistSelections[filterKey]}
                    onChange={(value) => addFilter(filterKey, value)}
                    placeholder={`Select ${filterKey.charAt(0).toUpperCase() + filterKey.slice(1)}`}
                    width="auto"
                  >
                    {availableOptions[filterKey].map((option) => (
                      <SelectOption key={option} value={option}>
                        {option}
                      </SelectOption>
                    ))}
                  </Select>
                </div>
              ))}
            </div>
          </Stack>
        </DataGridToolbar>
      )}

      {Object.entries(filterSelections).some(([_, values]) => values.length > 0) && (
        <DataGridToolbar>
          <Stack direction="horizontal" gap="4" className="w-full" justifyContent="flex-end" alignItems="flex-start">
            <Stack direction="horizontal" gap="1" wrap={true} className="flex-grow" style={{ marginRight: "auto" }}>
              {Object.entries(filterSelections).map(
                ([key, values]) =>
                  values.length > 0 && (
                    <div key={key} style={{ display: "flex", alignItems: "center", marginRight: "1rem" }}>
                      <span style={{ fontSize: "0.85rem", fontWeight: "normal", color: "#555" }}>
                        {key.charAt(0).toUpperCase() + key.slice(1)}:
                      </span>
                      <Stack direction="horizontal" gap="1" wrap={true} className="ml-2">
                        {values.map((value) => (
                          <Pill
                            key={`${key}:${value}`}
                            pillValue={value}
                            closeable
                            onClose={() => removeFilter(key, value)}
                          />
                        ))}
                      </Stack>
                    </div>
                  )
              )}
            </Stack>
            <Button variant="secondary" onClick={clearAllFilters}>
              Clear All Filters
            </Button>
          </Stack>
        </DataGridToolbar>
      )}

      <DataGrid columns={LIST_COLUMNS}>
        <DataGridRow>
          <DataGridHeadCell>Name</DataGridHeadCell>
          <DataGridHeadCell>Height</DataGridHeadCell>
          <DataGridHeadCell>Main Range</DataGridHeadCell>
          <DataGridHeadCell>Region</DataGridHeadCell>
          <DataGridHeadCell>Country</DataGridHeadCell>
          <DataGridHeadCell>Actions</DataGridHeadCell>
        </DataGridRow>
        {items.length > 0 ? (
          items.map((peak) => <PeaksListItem key={peak.id} peak={peak} onSelect={onSelect} />)
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
