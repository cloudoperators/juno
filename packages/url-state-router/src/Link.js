/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
import { useRouter } from "./RouterContext"

/**
 * This component renders a link in which the onClick function uses
 * the navigateTo from the router context.
 * @param {object} props, "to" is the path string
 * @returns component
 */
const Link = ({ to, children, options, ...props }) => {
  const { navigateTo } = useRouter()

  return (
    <a
      {...props}
      href="#"
      onClick={(e) => {
        e.preventDefault()
        navigateTo && navigateTo(to, options)
      }}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  /** Pass the path the link should navigate to */
  to: PropTypes.string.isRequired,
  /** Pass the options object */
  options: PropTypes.object,
  /** Pass the children */
  children: PropTypes.node,
}

export default Link
