/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Stack, StackProps } from "../Stack/Stack.component"

/** A container to hold one or multiple buttons and space and align them. */
export const ButtonRow: React.FC<ButtonRowProps> = ({ children = null, className = "", ...props }) => {
  return (
    <Stack gap="2" distribution="end" className={`juno-button-row ${className}`} {...props}>
      {children}
    </Stack>
  )
}

export interface ButtonRowProps extends StackProps {
  /** Add a class to the ButtonRow */
  className?: string
  /** Children to render in the ButtonRow */
  children?: React.ReactNode
}
