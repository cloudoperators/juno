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
 *
 * @component
 * @param {string} [title] Title for the form, displayed at the top.
 * @param {string} [className] Additional CSS classes for custom styling. Defaults to an empty string.
 * @param {React.ReactNode} [children] Content within the form, typically form elements like `FormSection` or `FormGroup`.
 * @returns {React.ReactElement} A structured form component for building complex forms.
 */
export const Form: React.FC<FormProps> = ({ title = "", className = "", children, ...props }) => {
  return (
    <form className={`juno-form ${formBaseStyles} ${className}`} {...props}>
      {title ? <h1 className={`juno-form-heading ${formTitleStyles}`}>{title}</h1> : null}
      {children}
    </form>
  )
}
