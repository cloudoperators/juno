/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

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
} from "@cloudoperators/juno-ui-components"
import ViewToggleButtons from "../../common/ViewToggleButtons"

const PeaksFilterToolbar = ({
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
  <DataGridToolbar style={{ padding: "0 20px" }}>
    {" "}
    <Stack direction="horizontal" justifyContent="flex-start" alignItems="center" gap="5">
      <SearchInput placeholder="Search by Name..." style={{ flexGrow: 1, minWidth: "300px" }} />
      <InputGroup>
        <Select
          style={{ minWidth: "150px" }}
          placeholder="Filter by"
          dropdownAlignment="bottom"
          value={selectedFilterKey || ""}
          onChange={setSelectedFilterKey}
        >
          {filterKeys.map((filterKey) => (
            <SelectOption key={filterKey} value={filterKey}>
              {filterKey.charAt(0).toUpperCase() + filterKey.slice(1)}
            </SelectOption>
          ))}
        </Select>

        {selectedFilterKey && !["minHeight", "maxHeight"].includes(selectedFilterKey) && (
          <Select
            value={droplistSelections[selectedFilterKey] || ""}
            onChange={(value) => addFilter(selectedFilterKey, value)}
            placeholder="Choose filter value"
            style={{ minWidth: "200px" }}
            dropdownAlignment="bottom"
          >
            {(availableOptions[selectedFilterKey as keyof typeof availableOptions] || []).map((option) => (
              <SelectOption key={option} value={option} disabled={filterSelections[selectedFilterKey].includes(option)}>
                {option}
              </SelectOption>
            ))}
          </Select>
        )}

        {["minHeight", "maxHeight"].includes(selectedFilterKey) && (
          <TextInput
            placeholder={`Enter ${selectedFilterKey!.charAt(0).toUpperCase() + selectedFilterKey!.slice(1)}`}
            value={selectedFilterKey === "minHeight" ? minHeight : maxHeight}
            onChange={(e) =>
              selectedFilterKey === "minHeight" ? setMinHeight(e.target.value) : setMaxHeight(e.target.value)
            }
            style={{ minWidth: "200px" }}
          />
        )}
      </InputGroup>
      <Select
        style={{ minWidth: "150px" }}
        placeholder="Sort by"
        dropdownAlignment="bottom"
        value={selectedSortKey || ""}
        onChange={setSelectedSortKey}
      >
        {filterKeys.map((filterKey) => (
          <SelectOption key={filterKey} value={filterKey}>
            {filterKey.charAt(0).toUpperCase() + filterKey.slice(1)}
          </SelectOption>
        ))}
      </Select>
      <InputGroup>
        <Button onClick={() => setSortDirection("asc")} disabled={sortDirection === "asc"} variant="subdued">
          Asc
        </Button>
        <Button onClick={() => setSortDirection("desc")} disabled={sortDirection === "desc"} variant="subdued">
          Desc
        </Button>
      </InputGroup>
      <ViewToggleButtons currentView={viewType} toggleView={setViewType} style={{ marginRight: "10px" }} />{" "}
    </Stack>
    {(Object.entries(filterSelections).some(([_, values]) => values.length > 0) || minHeight || maxHeight) && (
      <Stack direction="horizontal" gap="4" alignItems="center">
        <Stack direction="horizontal" gap="1">
          {Object.entries(filterSelections).map(
            ([key, values]) =>
              values.length > 0 && (
                <div key={key} style={{ display: "flex", alignItems: "center" }}>
                  {" "}
                  <span
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: "normal",
                      color: "#555",
                      marginRight: "8px",
                    }}
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}:
                  </span>
                  <Stack direction="horizontal" gap="1" wrap style={{ justifyContent: "flex-start" }}>
                    {" "}
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
        <Button variant="secondary" onClick={clearAllFilters}>
          Clear All Filters
        </Button>
      </Stack>
    )}
  </DataGridToolbar>
)

export default PeaksFilterToolbar
