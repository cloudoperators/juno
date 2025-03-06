import React from "react"
import { DataGridToolbar, SearchInput, InputGroup, Button, Stack, Select } from "@cloudoperators/juno-ui-components"
import { usePluginActions } from "./StoreProvider"
const filtersStyles = `
  bg-theme-background-lvl-1
  py-2
  px-4
  my-px
`

const Toolbar = () => {
  const { setSearchTerm } = usePluginActions()
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
            <Button icon="filterAlt" className="py-[0.3rem]" />
            <Select></Select>
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
