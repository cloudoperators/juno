/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"

const formSection = `
	jn-mb-8
	jn-last:mb-0
`

const formSectionHeading = `
	jn-text-lg
	jn-font-bold
	jn-mb-4
`

/** A Form section to group form elements inside complex forms with an optional title. */
export const FormSection = ({ title = null, children = null, className = "", ...props }) => {
  return (
    <section className={`juno-form-section ${formSection} ${className}`} {...props}>
      {title ? <h1 className={`juno-formsection-heading ${formSectionHeading}`}>{title}</h1> : ""}
      {children}
    </section>
  )
}

FormSection.propTypes = {
  /** Title, will be rendering as an `<h1>`. */
  title: PropTypes.string,
  /** Pass a custpm className */
  className: PropTypes.string,
  /** Children to render in the form section */
  children: PropTypes.node,
}
