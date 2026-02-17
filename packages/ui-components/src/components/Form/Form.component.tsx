/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode, FormHTMLAttributes } from "react"

const formBaseStyles = `
  jn:mb-8
`

const formTitleStyles = `
  jn:text-2xl
  jn:font-bold
  jn:mb-4
`

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  /**
   * Title for the form.
   * @default ""
   */
  title?: string

  /**
   * Additional CSS classes to apply to the form for custom styling.
   * @default ""
   */
  className?: string

  /**
   * Content to render inside the form.
   * This can include FormSections, FormGroups, and other form elements.
   */
  children?: ReactNode
}

/**
 * The `Form` component is designed to encapsulate form sections and groups,
 * providing a structured way to build complex forms. It can include a title and
 * supports additional styling through custom CSS classes.
 * @see https://cloudoperators.github.io/juno/?path=/docs/forms-form--docs
 * @see {@link FormProps}
 */
export const Form = ({ title = "", className = "", children, ...props }: FormProps): ReactNode => {
  return (
    <form className={`juno-form ${formBaseStyles} ${className}`} {...props}>
      {title ? <h1 className={`juno-form-heading ${formTitleStyles}`}>{title}</h1> : null}
      {children}
    </form>
  )
}
