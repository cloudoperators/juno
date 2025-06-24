import React, { useState, useEffect, ReactNode } from "react"
import { ComboBoxOptionProps } from "../../ComboBoxOption/ComboBoxOption.component"

/** Key type for the options Map - can be the option's value or its children content */
export type OptionValuesAndLabelsKey = ReactNode

/** Value type for the options Map containing extracted option properties */
export type OptionValuesAndLabelsValue = {
  val: string
  label?: string
  children: ReactNode
}

/**
 * Custom hook that processes ComboBox option children elements and extracts their
 * values, labels, and content into a structured Map for easy lookup and rendering.
 * Automatically updates when the children prop changes.
 */
function useComboboxOptions(children: ReactNode) {
  const [optionValuesAndLabels, setOptionValuesAndLabels] = useState(
    new Map<OptionValuesAndLabelsKey, OptionValuesAndLabelsValue>()
  )

  // Parse the `children` components (expected to be ComboBox options), extract their props,
  // and build a Map of option values and their associated labels/props.
  useEffect(() => {
    // Convert children to an array and map each one to a key-value pair
    const options = React.Children.toArray(children).map((child) => {
      let childProps: ComboBoxOptionProps = {}

      // Check if the child is a valid React element and extract its props
      if (React.isValidElement(child)) {
        childProps = child.props as ComboBoxOptionProps
      }

      // Destructure needed props from the child
      const { value, label, children } = childProps

      // Return a tuple: key is `value` or `children`, value is the associated props object
      return [
        value ?? children,
        {
          val: value,
          label: label,
          children: children,
        },
      ]
    }) as Iterable<readonly [React.ReactNode, OptionValuesAndLabelsValue]>

    // Store the resulting key-value pairs in a Map and update state
    setOptionValuesAndLabels(new Map(options))
  }, [children])

  return {
    optionValuesAndLabels,
  }
}

export default useComboboxOptions
