import React, { ReactNode } from "react"
import { ComboBoxContext, ComboBoxContextValue } from "./ComboBoxContext"

interface ComboBoxProviderProps {
  children: ReactNode
  value: ComboBoxContextValue
}

export const ComboBoxProvider = ({ children, value }: ComboBoxProviderProps) => {
  return <ComboBoxContext.Provider value={value}>{children}</ComboBoxContext.Provider>
}
