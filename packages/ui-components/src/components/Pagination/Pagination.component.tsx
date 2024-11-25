/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react"
import { Stack } from "../Stack/Stack.component"
import { Button } from "../Button/Button.component"
import { Spinner } from "../Spinner/Spinner.component"
import { TextInput } from "../TextInput/TextInput.component"
import { Select } from "../Select/Select.component"
import { SelectOption } from "../SelectOption/SelectOption.component"

const paginationStyles = `
  jn-flex
  jn-gap-[0.375rem]
  jn-items-center
`

const spinnerStyles = `
  jn-ml-3
`

const inputStyles = `
  justify-normal
`

export interface PaginationProps {
  /** The variant of the Pagination component */
  variant?: "default" | "number" | "select" | "input"
  /** The current page number */
  currentPage?: number
  /** The total number of pages */
  totalPages?: number
  /** The total number of pages (fallback for older versions) */
  pages?: number
  /** Disable component */
  disabled?: boolean
  /** Emulate state as being on the first page, leading to left/prev button being disabled */
  isFirstPage?: boolean
  /** Emulate state as being on the last page, leading to right/next button being disabled */
  isLastPage?: boolean
  /** onPress (previous) handler */
  // eslint-disable-next-line no-unused-vars
  onPressPrevious?: (newPage?: number) => void
  /** onPress (next) handler */
  // eslint-disable-next-line no-unused-vars
  onPressNext?: (newPage?: number) => void
  /** Select change handler (select variant) */
  // eslint-disable-next-line no-unused-vars
  onSelectChange?: (selected: number) => void
  /** Input field change handler (input variant) */
  // eslint-disable-next-line no-unused-vars
  onInputChange?: (inputValue: number) => void
  /** onKeyDown handler (input variant) */
  // eslint-disable-next-line no-unused-vars
  onKeyDown?: (value?: number) => void
  /** onBlur handler (input variant)*/
  // eslint-disable-next-line no-unused-vars
  onBlur?: (value?: number) => void
  /** Spinner loading animation + disables interactions */
  progress?: boolean
  /** Additional class name */
  className?: string
}

/** A basic Pagination component. Renders '<' and '>' buttons as a minimum/default. Keeps internal state of the current page for uncontrolled use. */
export const Pagination: React.FC<PaginationProps> = ({
  variant = "default",
  currentPage = 1,
  totalPages,
  pages,
  disabled = false,
  isFirstPage = false,
  isLastPage = false,
  onPressPrevious,
  onPressNext,
  onSelectChange,
  onInputChange,
  onKeyDown,
  onBlur,
  progress = false,
  className = "",
  ...props
}) => {
  const [controlPage, setControlCurrentPage] = useState<number>(currentPage)
  const [controlTotalPage, setControlTotalPage] = useState<number | undefined>(pages ?? totalPages)

  useEffect(() => {
    setControlCurrentPage(currentPage)
    const totalPage = pages ?? totalPages
    setControlTotalPage(totalPage)
    if (controlPage > (totalPage ?? Number.MAX_SAFE_INTEGER)) {
      setControlCurrentPage(totalPage ?? 1)
    }
  }, [currentPage, totalPages, pages, controlPage])

  const handlePrevClick = () => {
    if (controlPage > 1) {
      const newPage = controlPage - 1
      setControlCurrentPage(newPage)
      onPressPrevious?.(newPage)
    }
  }

  const handleNextClick = () => {
    if (controlPage && controlPage < (controlTotalPage ?? Number.MAX_SAFE_INTEGER)) {
      const newPage = controlPage + 1
      setControlCurrentPage(newPage)
      onPressNext?.(newPage)
    }
  }

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = parseInt(event.target.value, 10)
    setControlCurrentPage(selected)
    onSelectChange?.(selected)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = parseInt(event.target.value, 10)
    if (isNaN(inputValue)) {
      inputValue = controlPage // keep the current value if input is not a number
    } else if (inputValue < 1) {
      inputValue = 1 // set to 1 if less than 1
    } else if (controlTotalPage && inputValue > controlTotalPage) {
      inputValue = controlTotalPage // set to total page limit
    }
    setControlCurrentPage(inputValue)
    onInputChange?.(inputValue)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onKeyDown?.(controlPage)
    }
  }

  const handleBlur = () => {
    onBlur?.(controlPage)
  }

  const getInputWidthClass = () => {
    const logLength = Math.min(controlPage?.toString().length || 1, 5)
    const width = `${(logLength * 0.6 + 2.1).toFixed(1)}rem` // 0.6rem per digit + 2.1rem
    return { width }
  }

  return (
    <div className={`juno-pagination juno-pagination-${variant} ${paginationStyles} ${className}`} {...props}>
      <Button
        icon="chevronLeft"
        disabled={isFirstPage || disabled || progress || controlPage === 1}
        onClick={handlePrevClick}
        title="Previous Page"
      />
      {progress && <Spinner size="small" color="default" className={spinnerStyles} />}
      {!progress && variant === "number" && controlPage && <div className="page-value"> {controlPage}</div>}
      {!progress && variant === "select" && (
        <Select
          name="totalPages"
          width="auto"
          value={controlPage.toString()}
          onChange={(e) => handleSelectChange(e as React.ChangeEvent<HTMLSelectElement>)}
          disabled={disabled}
        >
          {Array.from({ length: controlTotalPage || 0 }, (_, i) => i + 1).map((p) => (
            <SelectOption value={p.toString()} label={p.toString()} key={p} />
          ))}
        </Select>
      )}
      {!progress && variant === "input" && (
        <Stack gap="2" alignment="center">
          <div className="juno-pagination-wrapper" style={getInputWidthClass()}>
            <TextInput
              value={controlPage}
              onChange={handleInputChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              disabled={disabled}
              className={inputStyles}
              maxLength={6}
            />
          </div>
          {controlTotalPage !== undefined && <span>of {controlTotalPage}</span>}
        </Stack>
      )}
      <Button
        icon="chevronRight"
        disabled={isLastPage || disabled || progress || controlPage === controlTotalPage}
        onClick={handleNextClick}
        title="Next Page"
      />
    </div>
  )
}
