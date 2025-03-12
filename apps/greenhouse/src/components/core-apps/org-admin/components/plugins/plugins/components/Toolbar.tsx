import React, { useState, useEffect } from "react"
import { SearchInput, Select, SelectOption, Stack, InputGroup, Pill } from "@cloudoperators/juno-ui-components"
import { usePluginActions, usePluginConfig, useStatusConditionFilter } from "./StoreProvider"
import { StatusConditionFilter, LabelValuesFilter } from "../lib/store/createPluginSlice"
import { SelectContext } from "../../../../../../../../../../packages/ui-components/build/src/components/Select/Select.component"
const filtersStyles = `
  bg-theme-background-lvl-1
  py-2
  px-4
  my-px
`

const Toolbar = () => {
  const { setSearchTerm, setStatusConditionFilter, addLabelValueFilter } = usePluginActions()
  const [labelFilters, setLabelFilters] = useState<LabelValuesFilter[]>()
  const [selectedLabel, setSelectedLabel] = useState<string>("All")
  const [availableValues, setAvailableValues] = useState<string[]>([])
  const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined)

  const statusOptions: StatusConditionFilter[] = ["All", "True", "False", "Unknown"]
  const statusConditionFilter = useStatusConditionFilter()
  const pluginConfig = usePluginConfig()
  const handleSearchChange = (value: any) => {
    // debounce setSearchTerm to avoid unnecessary re-renders
    const debouncedSearchTerm = setTimeout(() => {
      setSearchTerm(value.target.value)
    }, 500)

    return () => clearTimeout(debouncedSearchTerm)
  }

  useEffect(() => {
    if (!pluginConfig) return
    const labelMap = new Map<string, Set<string>>()

    pluginConfig.forEach((item: any) => {
      const labels = item?.metadata?.labels
      if (labels && typeof labels === "object") {
        Object.entries(labels).forEach(([key, value]) => {
          if (!labelMap.has(key)) {
            labelMap.set(key, new Set())
          }
          if (typeof value === "string") {
            labelMap.get(key)?.add(value)
          }
        })
      }
    })

    setLabelFilters(
      Array.from(labelMap.entries()).map(([label, values]) => ({
        label,
        value: Array.from(values),
      }))
    )
  }, [pluginConfig])

  const handleLabelChange = (value?: string | number | string[] | undefined) => {
    setSelectedValue(undefined)

    if (!labelFilters) return

    const selectedValue = typeof value === "string" ? value : "All"
    setSelectedLabel(selectedValue)

    if (selectedValue == "All") {
      setAvailableValues([])
    } else {
      const filter = labelFilters.find((filter) => filter?.label === selectedValue)
      setAvailableValues(filter?.value || [])
    }
  }

  const handleValueChange = (value?: string | number | string[] | undefined) => {
    setSelectedValue(value !== undefined ? String(value) : "")
    addLabelValueFilter({ label: selectedLabel, value: value })
  }

  return (
    <Stack direction="vertical" gap="4" className={`filters ${filtersStyles}`}>
      <Stack alignment="center" gap="8">
        {/* <Select
          required
          label="Ready"
          value={statusConditionFilter}
          className="filter-label-select w-32 mb-0"
          onChange={(value: any) => setStatusConditionFilter(value)}
        >
          {statusOptions.map((option) => (
            <SelectOption key={option} label={option} value={option} />
          ))}
        </Select> */}
        <InputGroup>
          <Select
            required
            label="Label"
            value={selectedLabel}
            className="filter-label-select w-64 mb-0"
            onChange={handleLabelChange}
          >
            <SelectOption key="All" label="All" value="All" />
            {labelFilters &&
              labelFilters.map((filter) => (
                <SelectOption key={filter?.label} label={filter?.label} value={filter?.label} />
              ))}
          </Select>

          <Select
            name="filterValue"
            className="filter-value-select w-96 bg-theme-background-lvl-0"
            value={selectedValue ? selectedValue : "Select..."}
            onChange={handleValueChange}
          >
            {availableValues.map((value) => (
              <SelectOption key={value} label={value} value={value} />
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
      <Stack gap="2" wrap={true}>
        <Pill pillKey="asdfs" pillValue="srtuz" closeable />
      </Stack>
    </Stack>
  )
}

export default Toolbar
