/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Spinner } from "../../Spinner/index"
import { Icon } from "../../Icon/index"
import { useComboBoxContext } from "../context"
import useComboBoxStyles from "../styles"

const ComboBoxStatusIcon: React.FC = () => {
  const {
    derivedProps: { loading: isLoading, error: hasError },
    validation: { isInvalid, isValid },
  } = useComboBoxContext()

  const { centeredIconStyles, iconContainerStyles } = useComboBoxStyles()

  return (
    <>
      {isLoading || hasError ? (
        <span className={centeredIconStyles}>
          {isLoading ? (
            <Spinner className="jn:cursor-not-allowed" />
          ) : (
            <Icon icon="errorOutline" color="jn:text-theme-error" className="jn:cursor-not-allowed" />
          )}
        </span>
      ) : isValid || isInvalid ? (
        <span className={iconContainerStyles}>
          <Icon
            icon={isValid ? "checkCircle" : "dangerous"}
            color={isValid ? "jn:text-theme-success" : "jn:text-theme-error"}
          />
        </span>
      ) : (
        ""
      )}
    </>
  )
}

export default ComboBoxStatusIcon
