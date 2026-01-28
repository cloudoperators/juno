/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode, isValidElement } from "react"
import { Stack } from "../Stack/Stack.component"
import "./input-group.css"

type VariantTypes = "default" | "primary" | "primary-danger" | "subdued"

export interface InputGroupProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The children to render within the InputGroup.
   * This can be any React node or a collection of React nodes such as Buttons, TextInput, and Select elements.
   */
  children?: React.ReactNode

  /**
   * Additional CSS class name(s) to apply to the InputGroup for custom styling.
   * @default ""
   */
  className?: string

  /**
   * The variant style to apply to the group and its children.
   */
  variant?: VariantTypes

  /**
   * If true, all elements within the InputGroup will be disabled.
   * Individual elements can override this setting if needed.
   * @default false
   */
  disabled?: boolean
}

type InheritedProps = { variant?: VariantTypes; disabled?: boolean }

/**
 * The `InputGroup` component visually groups related elements such as buttons,
 * text inputs, and select elements, providing cohesive styling and optional
 * variant and disabled states.
 *
 * @component
 * @param {React.ReactNode} [children] Elements to be rendered within the `InputGroup`.
 * Typical uses include form controls like `Button`, `TextInput`, and `Select`.
 * @param {string} [className] Additional CSS classes for custom styling. Defaults to an empty string.
 * @param {VariantTypes} [variant] Styling variant for the group and its children, such as "default", "primary", etc.
 * @param {boolean} [disabled] If true, all elements within the `InputGroup` are disabled. Defaults to `false`.
 * @returns {React.ReactElement} A styled grouping component for input-related elements.
 */
const cloneElementWithInheritedProps = (
  child: ReactNode,
  parentVariant: VariantTypes,
  parentDisabled: boolean
): ReactNode => {
  if (!isValidElement<InheritedProps>(child)) return child

  const combinedProps = {
    variant: child.props.variant || parentVariant,
    disabled: child.props.disabled || parentDisabled,
  }
  return React.cloneElement(child, combinedProps)
}

const getClassNames = (baseClassName: string, variant: VariantTypes, disabled: boolean): string => {
  return `
    ${baseClassName}-${variant}
    ${disabled ? `${baseClassName}-disabled` : ""}
  `
}

/**
 * InputGroup is a component used to visually group related elements such as
 * Buttons, TextInput, and Select elements, providing a cohesive styling approach.
 */
export const InputGroup: React.FC<InputGroupProps> = ({
  children,
  className = "",
  variant = "default",
  disabled = false,
  ...props
}) => {
  // Clone each child element with inherited variant and disabled props
  const modifiedChildren = React.Children.map(children, (child) =>
    cloneElementWithInheritedProps(child, variant, disabled)
  )

  const inputGroupClassName = getClassNames("juno-input-group", variant, disabled)

  return (
    <Stack className={`juno-input-group ${inputGroupClassName} ${className}`} {...props}>
      {modifiedChildren}
    </Stack>
  )
}
