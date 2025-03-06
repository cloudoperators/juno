import React from "react"
import { DataGridToolbar, SearchInput } from "@cloudoperators/juno-ui-components"

const filtersStyles = `
  bg-theme-background-lvl-1
  py-2
  px-4
  my-px
`

const Filters = () => {
  return (
    <>
      <DataGridToolbar>
        <SearchInput
          placeholder="search term or regular expression"
          className="w-96 ml-auto"
          value={""}
          // onSearch={(value: any) => setSearchTerm(value)}
          // onClear={() => setSearchTerm("")}
          // onChange={(value: any) => handleSearchChange(value)}
        />
      </DataGridToolbar>
    </>
  )
}

export default Filters
