import React from "react"
import { FilterSelect } from "./FilterSelect"
import { Button, InputGroup, SearchInput, Stack } from "@cloudoperators/juno-ui-components/index"

export const Filters = () => {
  return (
    <Stack direction="vertical" gap="4" className="filters bg-theme-background-lvl-1 py-2 px-4 my-px">
      <InputGroup>
        <FilterSelect />
        <Button label="Clear all" onClick={() => {}} variant="subdued" />
        <SearchInput
          placeholder={`search term for`}
          className="w-96 ml-auto"
          value=""
          onSearch={() => {}}
          onClear={() => {}}
        />
      </InputGroup>
    </Stack>
  )
}
