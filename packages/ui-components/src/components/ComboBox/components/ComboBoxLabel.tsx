/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Label } from "../../Label/index"
import { useComboBoxContext } from "../context"
import { isNotEmptyString } from "../../../utils"
import useComboBoxStyles from "../styles"

export const ComboBoxLabel: React.FC = () => {
  const {
    inputElementId,
    derivedProps: { label, placeholder, loading: isLoading, error: hasError, required, disabled },
    state: { hasFocus, query, selectedValue },
    floating: { getReferenceProps },
  } = useComboBoxContext()

  const { labelStyles } = useComboBoxStyles()

  return (
    <>
      {label && isNotEmptyString(label) && !isLoading && !hasError ? (
        <Label
          text={label}
          disabled={disabled}
          required={required}
          htmlFor={inputElementId}
          className={labelStyles}
          floating
          minimized={
            !!(
              placeholder ||
              hasFocus ||
              (query && isNotEmptyString(query)) ||
              (selectedValue && isNotEmptyString(selectedValue))
            )
          }
          {...getReferenceProps()}
        />
      ) : (
        ""
      )}
    </>
  )
}
