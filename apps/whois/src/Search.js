/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { SearchInput, Stack } from "juno-ui-components"
import cidrRegex from "cidr-regex"

const searchClasses = (resultsShown) => {
  return `
    w-1/2
    xl:w-1/4

    ${
      resultsShown &&
      `
      ml-auto
      mr-8
    `
    }
  `
}

const Search = ({ onSearch, resultsShown, value }) => {
  const [searchTerm, setSearchTerm] = React.useState("")

  React.useEffect(() => {
    if (value && value !== "") setSearchTerm((oldValue) => oldValue || value)
  }, [value])

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleSearch = (searchTerm) => {
    onSearch && onSearch(searchTerm)
  }

  return (
    <Stack
      direction="vertical"
      gap="2"
      className={`search ${searchClasses(resultsShown)}`}
    >
      <SearchInput
        placeholder="IPs, IP lists, IP ranges (CIDR), project id, domain id or cost object"
        className=""
        variant="hero"
        value={searchTerm}
        autoFocus={true}
        onSearch={handleSearch}
        onChange={handleChange}
      />
      {!resultsShown && searchTerm.match(cidrRegex()) && (
        <span className="text-theme-light pl-6">
          Searching for CIDR ranges may take a while, please be patient :)
        </span>
      )}
    </Stack>
  )
}

export default Search
