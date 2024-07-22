/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { useMemo, createElement } from "react"
import { useRouter, RouterContext } from "./RouterContext"
import routeMatcher from "./routeMatcher"
import PropTypes from "prop-types"

/**
 * Route Componente compares the current path with the given path
 * and if a match is made, the content of the route is rendered.
 * @param {object} props, path, exact, component, children
 * @returns
 */
const Route = ({ path, exact, children, component }) => {
  const { currentPath, options, ...otherProps } = useRouter()
  const [match, routeParams] = useMemo(
    () => routeMatcher(currentPath, path, { exact }),
    [currentPath, path, exact]
  )

  if (!match) return null

  return (
    <RouterContext.Provider
      value={{ path: currentPath, options, routeParams, ...otherProps }}
    >
      {component ? createElement(component) : children}
    </RouterContext.Provider>
  )
}

Route.propTypes = {
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  component: PropTypes.func,
  children: PropTypes.node,
}

Route.displayName = "Route"

export default Route
