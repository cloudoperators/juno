import React from "react"
import {
  DataGridToolbar,
  SearchInput,
  InputGroup,
  Select,
  SelectOption,
  Stack,
} from "@cloudoperators/juno-ui-components"
import { usePluginActions, useStatusConditionFilter } from "./StoreProvider"
import { StatusConditionFilter } from "../lib/store/createPluginSlice"
const filtersStyles = `
  bg-theme-background-lvl-1
  py-2
  px-4
  my-px
`

const Toolbar = () => {
  const { setSearchTerm, setStatusConditionFilter } = usePluginActions()
  const statusOptions: StatusConditionFilter[] = ["All", "True", "False", "Unknown"]
  const statusConditionFilter = useStatusConditionFilter()
  const handleSearchChange = (value: any) => {
    // debounce setSearchTerm to avoid unnecessary re-renders
    const debouncedSearchTerm = setTimeout(() => {
      setSearchTerm(value.target.value)
    }, 500)

    // clear timeout if we have a new value
    return () => clearTimeout(debouncedSearchTerm)
  }

  return (
    <Stack alignment="center" gap="8" className={`filters ${filtersStyles}`}>
      <Stack alignment="center" gap="4" className={`filters ${filtersStyles}`}>
        <Select
          required
          label="Ready"
          value={statusConditionFilter}
          className="filter-label-select w-32 mb-0"
          onChange={(value: any) => setStatusConditionFilter(value)}
        >
          {statusOptions.map((option) => (
            <SelectOption key={option} label={option} value={option} />
          ))}
        </Select>
        <InputGroup>
          <Select
            required
            label="Label"
            value="All"
            className="filter-label-select w-64 mb-0"
            onChange={(value: any) => setStatusConditionFilter(value)}
          >
            {statusOptions.map((option) => (
              <SelectOption key={option} label={option} value={option} />
            ))}
          </Select>
          <Select name="filterValue" className="filter-value-select w-96 bg-theme-background-lvl-0"></Select>
        </InputGroup>
      </Stack>

      <SearchInput
        placeholder="search term or regular expression"
        className="w-96 ml-auto"
        value={""}
        onSearch={(value: any) => setSearchTerm(value)}
        onClear={() => setSearchTerm("")}
        onChange={(value: any) => handleSearchChange(value)}
      />
    </Stack>
  )
}

export default Toolbar
