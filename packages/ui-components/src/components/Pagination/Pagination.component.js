/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Button } from "../Button/Button.component"
import { TextInput } from "../TextInput/TextInput.component"
import { Select } from "../Select/Select.component"
import { SelectOption } from "../SelectOption/SelectOption.component"
import { Stack } from "../Stack/Stack.component"
import { Spinner } from "../../deprecated_js/Spinner/Spinner.component"

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

/** A basic Pagination component. Renders '<' and '>' buttons as a minimun/default. The component keeps internal state about the currently selected page so it can be used as an uncontrolled component.  */
export const Pagination = ({
  variant = "default",
  currentPage = undefined,
  totalPages = undefined,
  pages = undefined,
  disabled = false,
  isFirstPage = undefined,
  isLastPage = undefined,
  onPressPrevious = undefined,
  onPressNext = undefined,
  onSelectChange = undefined,
  onKeyPress = undefined,
  onBlur = undefined,
  progress = false,
  className = "",
  ...props
}) => {
  const [controlPage, setControlCurrentPage] = useState(currentPage)
  const [controlTotalPage, setControlTotalPage] = useState(pages ? pages : totalPages)

  useEffect(() => {
    setControlCurrentPage(currentPage)
    // Fallback for the “pages” prop which was used in an earlier version of this component.
    pages ? setControlTotalPage(pages) : setControlTotalPage(totalPages)
    controlPage > controlTotalPage && setControlCurrentPage(controlTotalPage)
  }, [currentPage, totalPages, pages])

  const handleInputChange = (event) => {
    //convert all non-numeric characters to empty string
    const inputValue = parseInt(event?.target.value)
    setControlCurrentPage(inputValue)
  }

  const handlePrevClick = (event) => {
    if (controlTotalPage || pages || controlPage) {
      setControlCurrentPage(controlPage > 1 ? controlPage - 1 : undefined)
    }
    onPressPrevious && onPressPrevious(event)
  }

  const handleNextClick = (event) => {
    setControlCurrentPage(controlPage < controlTotalPage || controlPage ? controlPage + 1 : controlPage)

    onPressNext && onPressNext(event)
  }

  const handleSelectChange = (selected) => {
    const s = parseInt(selected)
    setControlCurrentPage(s)
    onSelectChange && onSelectChange(s)
  }

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      if (controlPage && controlPage < 1) {
        setControlCurrentPage(1)
      } else if (controlPage && controlPage > controlTotalPage) {
        setControlCurrentPage(controlTotalPage)
      }
      onKeyPress && onKeyPress(event)
    }
  }

  const handleBlur = (event) => {
    if (controlPage < 1) {
      setControlCurrentPage(1)
    } else if (controlPage > controlTotalPage) {
      setControlCurrentPage(controlTotalPage)
    }
    onBlur && onBlur(event)
  }

  // Calculation of the width of input fields dynamically based on the number of characters
  const getInputWidthClass = () => {
    let logLength = isNaN(controlPage) ? 1 : controlPage?.toString().length
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
        disabled={isFirstPage || disabled || progress || controlPage === 1}
        onClick={handlePrevClick}
        title="Previous Page"
      />
      {progress ? <Spinner size="small" color="default" className={spinnerStyles} /> : ""}
      {variant && !progress
        ? (() => {
            switch (variant) {
              case "number":
                return controlPage ? <div className="page-value"> {controlPage || ""}</div> : ""

              case "select":
                return (
                  <Select
                    name="totalPages"
                    width="auto"
                    value={controlTotalPage ? controlPage?.toString() : ""} // here the same, defaultValue is of type string
                    onChange={handleSelectChange}
                    disabled={disabled}
                  >
                    {(() => {
                      let opts = []
                      if (controlTotalPage) {
                        for (let i = 0; i < controlTotalPage; i++) {
                          const p = (i + 1).toString() // SelectOption requires strings for value and label
                          opts.push(<SelectOption value={p || "0"} label={p} key={p} />)
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
                        value={controlPage ? controlPage : ""}
                        //convert to integer
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        onKeyPress={handleEnter}
                        disabled={disabled}
                        className={inputStyles}
                      />
                    </div>
                    {controlTotalPage ? <span>of {controlTotalPage}</span> : ""}
                  </Stack>
                )
              default:
                return ""
            }
          })()
        : ""}
      <Button
        icon="chevronRight"
        disabled={isLastPage || disabled || progress || (controlPage && controlPage === controlTotalPage)}
        onClick={handleNextClick}
        title="Next Page"
      />
    </div>
  )
}
Pagination.propTypes = {
  /** The variant of the Pagination component */
  variant: PropTypes.oneOf(["default", "number", "select", "input"]),
  /** The current page number */
  currentPage: PropTypes.number,
  /** The total number of pages */
  totalPages: PropTypes.number,
  /** The total number of pages (fallback solution, please use totalPages) */
  pages: PropTypes.number,
  /** Disable component */
  disabled: PropTypes.bool,
  /** Is the first page (mostly "1") - left button disabled */
  isFirstPage: PropTypes.bool,
  /** Is the last page (e.g. total number of pages) - right button disabled */
  isLastPage: PropTypes.bool,
  /** onPress (previous) handler */
  onPressPrevious: PropTypes.func,
  /** onPress (next) handler */
  onPressNext: PropTypes.func,
  /** Select field change handler (select + input) */
  onSelectChange: PropTypes.func,
  /** onKeyPress handler (input) */
  onKeyPress: PropTypes.func,
  /** onBlur handler (input)*/
  onBlur: PropTypes.func,
  /** Spinner loading animation + disabled behavior */
  progress: PropTypes.bool,
  /** Additional class name */
  className: PropTypes.string,
}
