import { useContext, createContext, useMemo } from "react"

export type ComboBoxContextValue = {
  selectedValue?: string
  truncateOptions: boolean
}

export const ComboBoxContext = createContext<ComboBoxContextValue | null>(null)

export const useComboBoxContext = (): ComboBoxContextValue => {
  const context = useContext(ComboBoxContext)

  if (!context) {
    throw new Error(
      "useComboBoxContext must be used within a ComboBoxProvider. " +
        "Make sure your component is wrapped with <ComboBox> or <ComboBoxProvider>."
    )
  }

  return context
}

export const useComboBoxContextValue = (selectedValue: string, truncateOptions: boolean) => {
  const contextValue = useMemo(
    () => ({
      selectedValue,
      truncateOptions,
    }),
    [selectedValue, truncateOptions]
  )

  return contextValue
}
