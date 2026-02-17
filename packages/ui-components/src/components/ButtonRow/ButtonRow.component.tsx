/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { HTMLAttributes, ReactNode } from "react"
import { Stack } from "../Stack/Stack.component"

/**
 * The `ButtonRow` component is designed to contain one or several buttons,
 * providing them with structured spacing and alignment. It uses the `Stack`
 * component for consistent gap management and alignment, ensuring that
 * button elements are neatly organized within a row. This is particularly
 * useful in dialogs, forms, or any interface requiring a uniform presentation
 * for multiple actions.
 */
export const ButtonRow = ({ children, className = "", ...props }: ButtonRowProps): ReactNode => {
  return (
    <Stack gap="2" distribution="end" className={`juno-button-row ${className}`} {...props}>
      {children}
    </Stack>
  )
}
export interface ButtonRowProps extends HTMLAttributes<HTMLElement> {
  /**
   * Add a class to the ButtonRow for additional styling.
   * @default ""
   */
  className?: string

  /**
   * Children to render within the ButtonRow.
   */
  children?: ReactNode
}
