import React from "react"
import {
  DataGridToolbar,
  SearchInput,
  InputGroup,
  Select,
  SelectOption,
  Stack,
} from "@cloudoperators/juno-ui-components"
import { usePluginActions } from "./StoreProvider"
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
  const handleSearchChange = (value: any) => {
    // debounce setSearchTerm to avoid unnecessary re-renders
    const debouncedSearchTerm = setTimeout(() => {
      setSearchTerm(value.target.value)
    }, 500)

    // clear timeout if we have a new value
    return () => clearTimeout(debouncedSearchTerm)
  }

  return (
    <>
      <DataGridToolbar>
        <Stack alignment="center" gap="8" className={`filters ${filtersStyles}`}>
          <InputGroup>
            <Select required label="Ready" value="All" onChange={(value: any) => setStatusConditionFilter(value)}>
              {statusOptions.map((option) => (
                <SelectOption key={option} label={option} value={option} />
              ))}
            </Select>
          </InputGroup>
          <SearchInput
            placeholder="search term or regular expression"
            className="w-96 ml-auto"
            value={""}
            onSearch={(value: any) => setSearchTerm(value)}
            onClear={() => setSearchTerm("")}
            onChange={(value: any) => handleSearchChange(value)}
          />
        </Stack>
      </DataGridToolbar>
    </>
  )
}

export default Toolbar
