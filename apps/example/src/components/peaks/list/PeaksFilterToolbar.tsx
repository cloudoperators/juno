/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable no-unused-vars */

import React from "react"
import {
  DataGridToolbar,
  Stack,
  Select,
  SelectOption,
  TextInput,
  Button,
  InputGroup,
  Pill,
  SearchInput,
  ComboBox,
  ComboBoxOption,
} from "@cloudoperators/juno-ui-components"
import ViewToggleButtons from "../../common/ViewToggleButtons"

interface PeaksFilterToolbarProps {
  filterKeys: string[]
  filterSelections: Record<string, string[]>
  droplistSelections: Record<string, string>
  selectedFilterKey: string | null
  setSelectedFilterKey: (key: string) => void
  selectedSortKey: string | null
  setSelectedSortKey: (key: string) => void
  availableOptions: Record<string, string[]>
  addFilter: (key: string, value: string) => void
  removeFilter: (key: string, value: string) => void
  clearAllFilters: () => void
  setSortDirection: (direction: "asc" | "desc") => void
  sortDirection: "asc" | "desc"
  minHeight: string
  setMinHeight: (value: string) => void
  maxHeight: string
  setMaxHeight: (value: string) => void
  viewType: string
  setViewType: (viewType: string) => void
}

// Big component - needs refactoring

const PeaksFilterToolbar: React.FC<PeaksFilterToolbarProps> = ({
  filterKeys,
  filterSelections,
  droplistSelections,
  selectedFilterKey,
  setSelectedFilterKey,
  selectedSortKey,
  setSelectedSortKey,
  availableOptions,
  addFilter,
  removeFilter,
  clearAllFilters,
  setSortDirection,
  sortDirection,
  minHeight,
  setMinHeight,
  maxHeight,
  setMaxHeight,
  viewType,
  setViewType,
}) => (
  <>
    <DataGridToolbar>
      <Stack direction="horizontal" alignment="center" gap="5">
        <SearchInput placeholder="Search by Name..." style={{ flexGrow: 1, minWidth: "240px" }} />
        <InputGroup>
          <Select
            style={{ minWidth: "150px" }}
            placeholder="Filter by"
            label={selectedFilterKey ? "Filter by" : ""}
            value={selectedFilterKey || ""}
            onChange={(value) => setSelectedFilterKey(value as string)}
          >
            {filterKeys.map((filterKey) => (
              <SelectOption key={filterKey} value={filterKey}>
                {filterKey.charAt(0).toUpperCase() + filterKey.slice(1)}
              </SelectOption>
            ))}
          </Select>

          {selectedFilterKey && !["minHeight", "maxHeight"].includes(selectedFilterKey) && (
            <ComboBox
              value={droplistSelections[selectedFilterKey] || ""}
              onChange={(value) => addFilter(selectedFilterKey, value as string)}
              placeholder="Choose filter value"
              style={{ minWidth: "150px" }}
            >
              {(availableOptions[selectedFilterKey] || []).map((option) => (
                <ComboBoxOption
                  key={option}
                  value={option}
                  disabled={filterSelections[selectedFilterKey].includes(option)}
                >
                  {option}
                </ComboBoxOption>
              ))}
            </ComboBox>
          )}

          {["minHeight", "maxHeight"].includes(selectedFilterKey || "") && (
            <TextInput
              placeholder={`Enter ${selectedFilterKey!.charAt(0).toUpperCase() + selectedFilterKey!.slice(1)}`}
              value={selectedFilterKey === "minHeight" ? minHeight : maxHeight}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                selectedFilterKey === "minHeight" ? setMinHeight(e.target.value) : setMaxHeight(e.target.value)
              }
              style={{ minWidth: "150px" }}
            />
          )}
        </InputGroup>
        <Select
          style={{ minWidth: "150px" }}
          label="Sort by"
          placeholder="Sort by"
          value={selectedSortKey || ""}
          onChange={(value) => setSelectedSortKey(value as string)}
        >
          {filterKeys.map((filterKey) => (
            <SelectOption key={filterKey} value={filterKey}>
              {filterKey.charAt(0).toUpperCase() + filterKey.slice(1)}
            </SelectOption>
          ))}
        </Select>
        <InputGroup style={{ flexShrink: 1 }}>
          <Button onClick={() => setSortDirection("asc")} disabled={sortDirection === "asc"} variant="subdued">
            Asc
          </Button>
          <Button onClick={() => setSortDirection("desc")} disabled={sortDirection === "desc"} variant="subdued">
            Desc
          </Button>
        </InputGroup>
        <ViewToggleButtons currentView={viewType} toggleView={setViewType} />
      </Stack>
    </DataGridToolbar>
    {(Object.entries(filterSelections).some(([_, values]) => values.length > 0) || minHeight || maxHeight) && (
      <DataGridToolbar>
        <Stack
          direction="horizontal"
          gap="4"
          alignment="center"
          style={{ justifyContent: "space-between", width: "100%" }}
        >
          <Stack direction="horizontal" gap="1" wrap style={{ justifyContent: "flex-start", flexWrap: "wrap" }}>
            {Object.entries(filterSelections).map(
              ([key, values]) =>
                values.length > 0 && (
                  <div key={key} style={{ display: "flex", alignItems: "center" }}>
                    <span style={{ fontSize: "0.85rem", fontWeight: "normal", color: "#555", marginRight: "8px" }}>
                      {key.charAt(0).toUpperCase() + key.slice(1)}:
                    </span>
                    <Stack direction="horizontal" gap="1" wrap style={{ justifyContent: "flex-start" }}>
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
            {minHeight && <Pill pillValue={`Min Height: ${minHeight}`} closeable onClose={() => setMinHeight("")} />}
            {maxHeight && <Pill pillValue={`Max Height: ${maxHeight}`} closeable onClose={() => setMaxHeight("")} />}
          </Stack>
          <Button variant="subdued" onClick={clearAllFilters}>
            Clear All Filters
          </Button>
        </Stack>
      </DataGridToolbar>
    )}
  </>
)

export default PeaksFilterToolbar
