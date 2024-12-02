/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode, isValidElement } from "react"
import { Stack, StackProps } from "../Stack/Stack.component"
import "./input-group.scss"

type VariantTypes = "default" | "primary" | "primary-danger" | "subdued"

export interface InputGroupProps extends StackProps {
  /**
   * The children to render within the InputGroup.
   * This can be any React node or a collection of React nodes such as Buttons, TextInput, and Select elements.
   */
  children?: React.ReactNode
  /**
   * Additional CSS class name(s) to apply to the InputGroup for custom styling.
   */
  className?: string
  /**
   * The variant style to apply to the group and its children.
   */
  variant?: VariantTypes
  /**
   * If true, all elements within the InputGroup will be disabled.
   * Individual elements can override this setting if needed.
   */
  disabled?: boolean
}

type InheritedProps = { variant?: VariantTypes; disabled?: boolean }

/**
 * Clones a child element with inherited variant and disabled props.
 * Individual child props will override inherited ones if specified.
 *
 * @returns A cloned child element with the variant and disabled props applied.
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
  children = null,
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
