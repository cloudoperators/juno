/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { HTMLAttributes, ReactNode } from "react"

const formSectionBaseStyles = `
    jn:mb-8
    jn:last:mb-0
`

const headingStyles = `
    jn:text-lg
    jn:font-bold
    jn:mb-4
`

export interface FormSectionProps extends HTMLAttributes<HTMLElement> {
  /**
   * Title for the form section.
   * @default ""
   */
  title?: string

  /**
   * Additional CSS classes to apply to the form section for custom styling.
   * @default ""
   */
  className?: string

  /**
   * Content to be rendered within the form section.
   * This can include form elements and other React nodes.
   */
  children?: ReactNode
}

/**
 * The `FormSection` component groups related form elements within a section,
 * offering a title and customizable styling. It assists in organizing content within forms.
 * @see https://cloudoperators.github.io/juno/?path=/docs/forms-formsection--docs
 * @see {@link FormSectionProps}
 */
export const FormSection = ({ title = "", children, className = "", ...props }: FormSectionProps): ReactNode => {
  return (
    <section className={`juno-form-section ${formSectionBaseStyles} ${className}`} {...props}>
      {title ? <h1 className={`juno-formsection-heading ${headingStyles}`}>{title}</h1> : null}
      {children}
    </section>
  )
}
