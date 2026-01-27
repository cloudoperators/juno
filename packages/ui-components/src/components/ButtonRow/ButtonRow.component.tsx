/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Stack } from "../Stack/Stack.component"

/**
 * The `ButtonRow` component is designed to contain one or several buttons,
 * providing them with structured spacing and alignment. It uses the `Stack`
 * component for consistent gap management and alignment, ensuring that
 * button elements are neatly organized within a row. This is particularly
 * useful in dialogs, forms, or any interface requiring a uniform presentation
 * for multiple actions.
 *
 * @component
 * @param {string} [className] Additional class to apply custom styles to the `ButtonRow`.
 * @param {React.ReactNode} [children] Elements to be rendered within the `ButtonRow`, typically button elements.
 * @returns {React.ReactElement} A row container component for buttons, with spacing and alignment applied.
 */
export const ButtonRow: React.FC<ButtonRowProps> = ({ children, className = "", ...props }) => {
  return (
    <Stack gap="2" distribution="end" className={`juno-button-row ${className}`} {...props}>
      {children}
    </Stack>
  )
}
export interface ButtonRowProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Add a class to the ButtonRow for additional styling.
   * @default ""
   */
  className?: string

  /**
   * Children to render within the ButtonRow.
   */
  children?: React.ReactNode
}
