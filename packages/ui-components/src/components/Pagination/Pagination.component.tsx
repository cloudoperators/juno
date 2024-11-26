/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable no-unused-vars */

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
  /** The total number of pages (fallback solution, please use totalPages) */
  pages?: number
  /** Disable component */
  disabled?: boolean
  /** Use this to have the Pagination emulate the state as being on the first page. Useful for when you don't have knowledge about pages but know that there is no previous page. Setting this to true leads to the left/prev button getting disabled */
  isFirstPage?: boolean
  /** Use this to have the Pagination emulate the state as being on the last page. Useful for when you don't have knowledge about pages/total page count but know that there is no next page. Setting this to true leads to the right/next button getting disabled */
  isLastPage?: boolean
  /** onPress (previous) handler */
  onPressPrevious?: (newPage?: number) => void
  /** onPress (next) handler */
  onPressNext?: (newPage?: number) => void
  /** Select change handler (select variant) */
  onSelectChange?: (selected: number) => void
  /** Input field change handler (input) */
  onInputChange?: (inputValue?: number) => void
  /** onKeyPress handler (input) */
  onKeyPress?: (controlPage?: number) => void
  /** onBlur handler (input)*/
  onBlur?: (controlPage?: number) => void
  /** Spinner loading animation + disabled behavior */
  progress?: boolean
  /** Additional class name */
  className?: string
}

/** A basic Pagination component. Renders '<' and '>' buttons as a minimum/default. The component keeps internal state about the currently selected page so it can be used as an uncontrolled component.  */
export const Pagination = ({
  variant = "default",
  currentPage,
  totalPages,
  pages,
  disabled = false,
  isFirstPage,
  isLastPage,
  onPressPrevious,
  onPressNext,
  onSelectChange,
  onInputChange,
  onKeyPress,
  onBlur,
  progress = false,
  className = "",
  ...props
}: PaginationProps) => {
  const [controlPage, setControlCurrentPage] = useState<number | undefined>(currentPage)
  const [controlTotalPage, setControlTotalPage] = useState<number | undefined>(pages ? pages : totalPages)

  useEffect(() => {
    setControlCurrentPage(currentPage)
    // Fallback for the “pages” prop which was used in an earlier version of this component.
    pages ? setControlTotalPage(pages) : setControlTotalPage(totalPages)
    if (controlPage !== undefined && controlTotalPage !== undefined && controlPage > controlTotalPage) {
      setControlCurrentPage(controlTotalPage)
    }
  }, [currentPage, totalPages, pages])

  const handlePrevClick = () => {
    let newPage
    if (controlPage !== undefined && controlPage > 1) {
      newPage = controlPage - 1
      setControlCurrentPage(newPage)
    }

    onPressPrevious && onPressPrevious(newPage)
  }

  const handleNextClick = () => {
    // set controlPage +1 if controlPage exists and controlPage is less than controlTotalPage
    // also set controlPage +1 if controlPage exists but controlTotalPage does not exist
    let newPage
    if (controlPage !== undefined) {
      if (controlTotalPage === undefined || controlPage < controlTotalPage) {
        newPage = controlPage + 1
        setControlCurrentPage(newPage)
      }
    }

    onPressNext && onPressNext(newPage)
  }

  /**
   * Handle change event:
   * - Convert the selected value to a number and update the control page state.
   * - If defined, call the onSelectChange callback
   */
  const handleSelectChange = (selectedValue?: string | number | string[]): void => {
    if (selectedValue === undefined) return

    let convertedNumber: number | undefined

    // Convert the selected value to a number based on its type
    if (typeof selectedValue === "string" || Array.isArray(selectedValue)) {
      convertedNumber = parseInt(Array.isArray(selectedValue) ? selectedValue[0] : selectedValue, 10)
    } else {
      // If selectedValue is a number, assign it directly
      convertedNumber = selectedValue
    }

    // If the conversion results in an invalid number
    if (convertedNumber === undefined || isNaN(convertedNumber)) return

    setControlCurrentPage(convertedNumber)
    onSelectChange?.(convertedNumber)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // ensure that the input value is an integer
    let inputValue = event.target.value ? parseInt(event.target.value, 10) : undefined

    if (inputValue !== undefined) {
      if (inputValue < 1) {
        inputValue = 1
      } else if (controlTotalPage !== undefined && inputValue > controlTotalPage) {
        inputValue = controlTotalPage
      }
    }
    setControlCurrentPage(inputValue)

    onInputChange && onInputChange(inputValue)
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && controlPage !== undefined) {
      onKeyPress && onKeyPress(controlPage)
    }
  }

  const handleBlur = () => {
    onBlur && onBlur(controlPage)
  }

  // Calculation of the width of input fields dynamically based on the number of characters
  const getInputWidthClass = () => {
    let logLength = controlPage !== undefined && !isNaN(controlPage) ? controlPage.toString().length : 1
    logLength = logLength > 5 ? 5 : logLength
    const width = `${(logLength * 0.6 + 2.1).toFixed(1)}rem` // 0.6rem per digit + 2.1rem
    return { width: width }
  }

  return (
    <div
      className={`juno-pagination juno-pagination-${variant || "default"} ${paginationStyles} ${className}`}
      {...props}
    >
      <Button
        icon="chevronLeft"
        disabled={!!isFirstPage || !!disabled || !!progress || controlPage === 1}
        onClick={handlePrevClick}
        title="Previous Page"
      />
      {progress ? <Spinner size="small" color="default" className={spinnerStyles} /> : ""}
      {variant && !progress
        ? (() => {
            switch (variant) {
              case "number":
                return controlPage !== undefined ? <div className="page-value"> {controlPage}</div> : ""

              case "select":
                return (
                  <Select
                    name="totalPages"
                    width="auto"
                    value={controlPage?.toString()} // here the same, defaultValue is of type string
                    onChange={handleSelectChange}
                    disabled={disabled}
                  >
                    {(() => {
                      const opts = []
                      if (controlTotalPage !== undefined) {
                        for (let i = 0; i < controlTotalPage; i++) {
                          const p = (i + 1).toString() // SelectOption requires strings for value and label
                          opts.push(<SelectOption value={p} label={p} key={p} />)
                        }
                      }
                      return opts
                    })()}
                  </Select>
                )

              case "input":
                return (
                  <Stack gap="2" alignment="center">
                    <div className={`juno-pagination-wrapper`} style={getInputWidthClass()}>
                      <TextInput
                        value={controlPage !== undefined ? controlPage : ""}
                        //convert to integer
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        onKeyPress={handleKeyPress}
                        disabled={!!disabled}
                        className={inputStyles}
                        maxLength={6}
                      />
                    </div>
                    {controlTotalPage !== undefined ? <span>of {controlTotalPage}</span> : ""}
                  </Stack>
                )
              default:
                return ""
            }
          })()
        : ""}
      <Button
        icon="chevronRight"
        disabled={
          !!isLastPage ||
          !!disabled ||
          !!progress ||
          (controlPage !== undefined && controlTotalPage !== undefined && controlPage === controlTotalPage)
        }
        onClick={handleNextClick}
        title="Next Page"
      />
    </div>
  )
}
