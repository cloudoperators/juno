/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode } from "react"
import { useComboBoxContext } from "../context"
import useComboBoxStyles from "../styles"

interface ComboBoxInputWrapperProps {
  children: ReactNode
}
const ComboBoxInputWrapper: React.FC<ComboBoxInputWrapperProps> = ({ children }) => {
  const { inputWrapperStyles } = useComboBoxStyles()

  const {
    floating: { refs },
  } = useComboBoxContext()

  return (
    <div ref={refs.setReference} className={inputWrapperStyles}>
      {children}
    </div>
  )
}

export default ComboBoxInputWrapper
