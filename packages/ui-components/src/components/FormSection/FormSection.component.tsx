/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

const formSection = `
    jn-mb-8
    jn-last:mb-0
`

const formSectionHeading = `
    jn-text-lg
    jn-font-bold
    jn-mb-4
`

export interface FormSectionProps {
  /** Title, will be rendering as an `<h1>`. */
  title?: string
  /** Pass a custpm className */
  className?: string
  /** Children to render in the form section */
  children?: React.ReactNode
}

/** A Form section to group form elements inside complex forms with an optional title. */
export const FormSection = ({ title = null, children = null, className = "", ...props }: FormSectionProps) => {
  return (
    <section className={`juno-form-section ${formSection} ${className}`} {...props}>
      {title ? <h1 className={`juno-formsection-heading ${formSectionHeading}`}>{title}</h1> : ""}
      {children}
    </section>
  )
}
