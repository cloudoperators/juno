/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { HTMLAttributes } from "react"

const formSectionBaseStyles = `
    jn:mb-8
    jn-last:mb-0
`

const headingStyles = `
    jn:text-lg
    jn:font-bold
    jn:mb-4
`

export interface FormSectionProps extends HTMLAttributes<HTMLElement> {
  /**
   * Title for the form section.
   */
  title?: string

  /**
   * Additional CSS classes to apply to the form section for custom styling.
   */
  className?: string

  /**
   * Content to be rendered within the form section.
   * This can include form elements and other React nodes.
   */
  children?: React.ReactNode
}

/**
 * FormSection component for grouping form elements within complex forms.
 */
export const FormSection: React.FC<FormSectionProps> = ({ title = "", children, className = "", ...props }) => {
  return (
    <section className={`juno-form-section ${formSectionBaseStyles} ${className}`} {...props}>
      {title ? <h1 className={`juno-formsection-heading ${headingStyles}`}>{title}</h1> : null}
      {children}
    </section>
  )
}
