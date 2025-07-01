/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode } from "react"
import useComboBoxStyles from "../styles"

interface ComboBoxOuterWrapperProps {
  children: ReactNode
}
const ComboBoxOuterWrapper: React.FC<ComboBoxOuterWrapperProps> = ({ children }) => {
  const { outerWrapperStyles } = useComboBoxStyles()

  return <div className={outerWrapperStyles}>{children}</div>
}

export default ComboBoxOuterWrapper
