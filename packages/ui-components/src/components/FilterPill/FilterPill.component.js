/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
import { Icon } from "../Icon/Icon.component.js"

const filterpillStyles = `
	jn-inline-flex
	jn-basis-auto
	jn-shrink
	jn-items-center
	jn-flex-nowrap
	jn-text-xs
	jn-p-px
	jn-border
	jn-rounded
	jn-mr-2
	jn-border-theme-filter-pill
	last:jn-mr-0
`

const filterkeyStyles = `
	jn-bg-theme-filter-pill-key
	jn-px-1
	jn-py-0.5
	jn-rounded-sm
  jn-text-theme-high
	jn-inline-block
`

const filtervalueStyles = `
	jn-px-1
	jn-py-0.5
	jn-text-theme-high
	jn-inline-block
`

/**
-- Deprecated. For new implementations, use Pill instead.--\n
A Pill to represent Key and Value of a filter. Can be closed to un-apply the filter represented.
Mostly to be used inside a Filters component in conjunction with FilterInput. */
export const FilterPill = ({
  uid = "",
  filterKey = "",
  filterKeyLabel = "",
  filterValue = "",
  filterValueLabel = "",
  onClose = undefined,
  className = "",
  ...props
}) => {
  const handleCloseClick = () => {
    onClose && onClose(uid || filterKey)
  }

  return (
    <div className={`juno-filterpill ${filterpillStyles} ${className}`} {...props}>
      <span className={`${filterkeyStyles}`}>{filterKeyLabel || filterKey}</span>
      <span className={`${filtervalueStyles}`}>{filterValueLabel || filterValue}</span>
      <Icon icon="close" size="18" onClick={handleCloseClick} />
    </div>
  )
}

FilterPill.propTypes = {
  /** The unique identifier of the pill. Returned by the onClose callback */
  uid: PropTypes.string,
  /** The key of the filter the pill represents. Returned by the onClose callback if uid undefined */
  filterKey: PropTypes.string.isRequired,
  /** The visible label to describe the filter key. If not set filterKey is used */
  filterKeyLabel: PropTypes.string,
  /** The value of filter the pill represents */
  filterValue: PropTypes.string.isRequired,
  /** The visible label to describe the filter value. If not set filterValue is used */
  filterValueLabel: PropTypes.string,
  /** add custom classNames */
  className: PropTypes.string,
  /** Pass a handler to be executed when closing the FilterPill */
  onClose: PropTypes.func,
}
