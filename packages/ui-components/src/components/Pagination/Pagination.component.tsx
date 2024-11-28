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
const spinnerStyles = `jn-ml-3`

const inputStyles = `justify-normal`

export type PaginationProps = Omit<React.HTMLAttributes<HTMLDivElement>, "onBlur"> & {
  /**
   * The variant determines the style and user interaction method of the Pagination component:
   * - "default": Renders previous and next buttons only.
   * - "number": Displays the current page number between next and previous buttons.
   * - "select": Provides a dropdown menu between next and previous buttons for specific page selection.
   * - "input": Provides an input field for specific page entry.
   */
  variant?: "default" | "number" | "select" | "input"
  /**
   * The current page number.
   */
  currentPage?: number
  /**
   * The total number of pages available.
   */
  totalPages?: number
  /**
   * A fallback property for providing the total number of pages, maintained for backward compatibility.
   */
  pages?: number
  /**
   * When true, disables the entire pagination component, preventing any interaction.
   */
  disabled?: boolean
  /**
   * When true, simulates the component being on the first page, disabling the previous button.
   */
  isFirstPage?: boolean
  /**
   * When true, simulates the component being on the last page, disabling the next button.
   */
  isLastPage?: boolean
  /**
   * Callback function triggered when the previous button is pressed.
   */
  onPressPrevious?: (newPage?: number) => void
  /**
   * Callback function triggered when the next button is pressed.
   */
  onPressNext?: (newPage?: number) => void
  /**
   * Callback function triggered when a new page is selected from the dropdown, applicable when variant is "select".
   */
  onSelectChange?: (selected: number) => void
  /**
   * Callback function triggered when the input field value changes, applicable when variant is "input".
   */
  onInputChange?: (inputValue?: number) => void
  /**
   * Callback function triggered when a key is pressed in the input field, applicable when variant is "input".
   */
  onKeyPress?: (controlCurrentPage?: number) => void
  /**
   * Callback function triggered when the input field loses focus, applicable when variant is "input".
   */
  onBlur?: (controlCurrentPage?: number) => void
  /**
   * Displays a loading spinner and disables interaction when true.
   */
  progress?: boolean
  /**
   * Additional CSS classes for custom styling.
   */
  className?: string
}

/**
 * The Pagination component provides navigation controls for paginated content.
 */
export const Pagination: React.FC<PaginationProps> = ({
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
}) => {
  const [controlCurrentPage, setControlCurrentPage] = useState<number | undefined>(currentPage)
  const [controlTotalPage, setControlTotalPage] = useState<number | undefined>(pages ? pages : totalPages)

  // Synchronize internal state with props whenever they change
  useEffect(() => {
    setControlCurrentPage(currentPage)
    // Fallback for the “pages” prop supported for backward compatibility
    pages ? setControlTotalPage(pages) : setControlTotalPage(totalPages)
    // Check that the current page does not exceed total pages
    if (controlCurrentPage !== undefined && controlTotalPage !== undefined && controlCurrentPage > controlTotalPage) {
      setControlCurrentPage(controlTotalPage)
    }
  }, [currentPage, totalPages, pages])

  const handlePrevClick = () => {
    let newPage
    if (controlCurrentPage !== undefined && controlCurrentPage > 1) {
      newPage = controlCurrentPage - 1
      setControlCurrentPage(newPage)
    }

    onPressPrevious && onPressPrevious(newPage)
  }

  const handleNextClick = () => {
    // Increment controlCurrentPage if it exists and is less than controlTotalPage, or if controlTotalPage is undefined
    let newPage
    if (controlCurrentPage !== undefined) {
      if (controlTotalPage === undefined || controlCurrentPage < controlTotalPage) {
        newPage = controlCurrentPage + 1
        setControlCurrentPage(newPage)
      }
    }

    onPressNext && onPressNext(newPage)
  }

  /**
   * Handler for select dropdown change event
   * - Converts the selected value to a number and updates the control page state.
   * - Invokes the onSelectChange callback, if defined.
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

    // Ignore invalid conversion results
    if (convertedNumber === undefined || isNaN(convertedNumber)) return

    // Update local state and invoke callback
    setControlCurrentPage(convertedNumber)
    onSelectChange?.(convertedNumber)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Ensure that the input value is a valid integer
    let inputValue = event.target.value ? parseInt(event.target.value, 10) : undefined

    if (inputValue !== undefined) {
      // Enforce minimum and maximum limits
      if (inputValue < 1) {
        inputValue = 1
      } else if (controlTotalPage !== undefined && inputValue > controlTotalPage) {
        inputValue = controlTotalPage
      }
    }
    // Update local state and invoke callback
    setControlCurrentPage(inputValue)
    onInputChange && onInputChange(inputValue)
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && controlCurrentPage !== undefined) {
      onKeyPress && onKeyPress(controlCurrentPage)
    }
  }

  // Handler for input field losing focus
  const handleBlur = () => {
    onBlur && onBlur(controlCurrentPage)
  }

  // Calculates the width of input fields dynamically based on the number of characters
  const getInputWidthClass = () => {
    let logLength =
      controlCurrentPage !== undefined && !isNaN(controlCurrentPage) ? controlCurrentPage.toString().length : 1
    logLength = logLength > 5 ? 5 : logLength
    const width = `${(logLength * 0.6 + 2.1).toFixed(1)}rem` // 0.6rem per digit + 2.1rem for padding
    return { width: width }
  }

  return (
    <div
      className={`juno-pagination juno-pagination-${variant || "default"} ${paginationStyles} ${className}`}
      {...props}
    >
      <Button
        icon="chevronLeft"
        disabled={!!isFirstPage || !!disabled || !!progress || controlCurrentPage === 1}
        onClick={handlePrevClick}
        title="Previous Page"
      />
      {progress ? <Spinner size="small" color="default" className={spinnerStyles} /> : ""}
      {variant && !progress
        ? (() => {
            switch (variant) {
              case "number":
                // Displays the current page number if defined
                return controlCurrentPage !== undefined ? <div className="page-value"> {controlCurrentPage}</div> : ""

              case "select":
                // Renders a dropdown to select specific page numbers
                return (
                  <Select
                    name="totalPages"
                    width="auto"
                    value={controlCurrentPage?.toString()} // Select expects string values
                    onChange={handleSelectChange}
                    disabled={disabled}
                  >
                    {(() => {
                      const opts = []
                      if (controlTotalPage !== undefined) {
                        // Generate options for each page
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
                // Renders an input field to allow manual page entry
                return (
                  <Stack gap="2" alignment="center">
                    <div className={`juno-pagination-wrapper`} style={getInputWidthClass()}>
                      <TextInput
                        value={controlCurrentPage !== undefined ? controlCurrentPage : ""}
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
          (controlCurrentPage !== undefined &&
            controlTotalPage !== undefined &&
            controlCurrentPage === controlTotalPage)
        }
        onClick={handleNextClick}
        title="Next Page"
      />
    </div>
  )
}
