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
   */
  title?: string

  /**
   * Additional CSS classes to apply to the form for custom styling.
   */
  className?: string

  /**
   * Content to render inside the form.
   * This can include FormSections, FormGroups, and other form elements.
   */
  children?: ReactNode
}

/**
 * A Form component used to encapsulate FormSections and/or FormGroups.
 * Can be used to build complex forms with structured sections.
 */
export const Form: React.FC<FormProps> = ({ title = "", className = "", children, ...props }) => {
  return (
    <form className={`juno-form ${formBaseStyles} ${className}`} {...props}>
      {title ? <h1 className={`juno-form-heading ${formTitleStyles}`}>{title}</h1> : null}
      {children}
    </form>
  )
}
