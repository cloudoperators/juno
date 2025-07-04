/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode } from "react"
import { ComboBoxContext, ComboBoxContextValue } from "./ComboBoxContext"

interface ComboBoxProviderProps {
  children: ReactNode
  value: ComboBoxContextValue
}

export const ComboBoxProvider = ({ children, value }: ComboBoxProviderProps) => {
  return <ComboBoxContext.Provider value={value}>{children}</ComboBoxContext.Provider>
}
