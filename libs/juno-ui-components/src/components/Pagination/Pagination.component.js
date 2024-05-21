/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
import { Button } from "../Button/Button.component"
import { TextInput } from "../TextInput/TextInput.component"
import { Select } from "../Select/Select.component"
import { SelectOption } from "../SelectOption/SelectOption.component"
import { Stack } from "../Stack/Stack.component"

const paginationStyles = `
  jn-flex
  jn-gap-[0.375rem]
  jn-items-center
`

const numberStyles = `

`

const inputStyles = `
  jn-w-[3.125rem]
`

const selectOptions = (pages) => {
  let opts = []
  if (pages) {
    for (let i = 0; i < pages; i++) {
      const p = (i + 1).toString() // SelectOption requires strings for value and label
      opts.push(<SelectOption value={p} label={p} key={p} />)
    }
  }
  return opts
}

const renderPaginationInnards = (
  variant,
  currentPage,
  pages,
  handleSelectChange,
  handleKeyPress
) => {
  switch (variant) {
    case "number":
      return <span>{currentPage || "0"}</span>
      break
    case "select":
      return (
        <Select
          name="pages"
          width="auto"
          defaultValue={currentPage?.toString()} // here the same, defaultValue is of type string
          onChange={handleSelectChange}
        >
          {selectOptions(pages)}
        </Select>
      )
      break
    case "input":
      return (
        <Stack gap="2" alignment="center">
          <div className={`${inputStyles}`}>
            <TextInput
              value={currentPage || ""}
              onKeyPress={handleKeyPress}
            />
          </div>
          <span>of {pages || "0"}</span>
        </Stack>
      )
      break
    default:
      return null
  }
}

/** A basic, uncontrolled Pagination component. Renders '<' and '>' buttons as a minimun/default. */
export const Pagination = ({
  variant,
  currentPage,
  pages,
  isFirstPage,
  isLastPage,
  onPressPrevious,
  onPressNext,
  onSelectChange,
  onKeyPress,
  className,
  ...props
}) => {
  const handlePrevClick = (event) => {
    onPressPrevious && onPressPrevious(event)
  }

  const handleNextClick = (event) => {
    onPressNext && onPressNext(event)
  }

  const handleSelectChange = (event) => {
    onSelectChange && onSelectChange(event)
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onKeyPress && onKeyPress(event)
    }
  }

  return (
    <div
      className={`juno-pagination juno-pagination-${
        variant || "default"
      } ${paginationStyles} ${className}`}
      {...props}
    >
      <Button
        icon="chevronLeft"
        disabled={isFirstPage}
        onClick={handlePrevClick}
        title="Previous Page"
      />
      {variant
        ? renderPaginationInnards(
            variant,
            currentPage,
            pages,
            handleSelectChange,
            handleKeyPress
          )
        : null}
      <Button
        icon="chevronRight"
        disabled={isLastPage}
        onClick={handleNextClick}
        title="Next Page"
      />
    </div>
  )
}

Pagination.propTypes = {
  variant: PropTypes.oneOf(["", "number", "select", "input"]),
  currentPage: PropTypes.number,
  pages: PropTypes.number,
  isFirstPage: PropTypes.bool,
  isLastPage: PropTypes.bool,
  onPressPrevious: PropTypes.func,
  onPressNext: PropTypes.func,
  onSelectChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  className: PropTypes.string,
}

Pagination.defaultProps = {
  variant: "",
  currentPage: null,
  pages: null,
  isFirstPage: false,
  isLastPage: false,
  onPressPrevious: undefined,
  onPressNext: undefined,
  onSelectChange: undefined,
  onKeyPress: undefined,
  className: "",
}
