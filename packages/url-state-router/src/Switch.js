/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo } from "react"
import PropTypes from "prop-types"
import routeMatcher from "./routeMatcher"
import { useRouter } from "./RouterContext"

/**
 * Switch is used when multiple routes with similar paths match the current path.
 * For example, the path "/items/:id" and "/items/new" would both match "/items/new".
 * If we only want to render one of the two routes, we need a Switch
 * <Switch>
 *   <Route path = "/items/new"> ... </Route>
 *   <Route path = "/items/:id"> ... </Route>
 * </Switch>
 * The order is important, the first path from top to bottom that matches is used!
 * @param {object} props
 * @returns component
 */
const Switch = ({ children }) => {
  const { currentPath } = useRouter()

  const route = useMemo(() => {
    let element
    // We use React.Children.forEach instead of React.Children.toArray().find()
    // here because toArray adds keys to all child elements and we do not want
    // to trigger an unmount/remount for two <Route>s that render the same
    // component at different URLs.
    React.Children.forEach(children, (child) => {
      if (
        !element &&
        React.isValidElement(child) &&
        child.type.displayName === "Route"
      ) {
        const [match, _] = routeMatcher(currentPath, child.props.path, {
          exact: child.props.exact,
        })
        if (match) element = child
      }
    })

    return element
  }, [currentPath, children])

  return route ? React.cloneElement(route) : null
}

Switch.propTypes = {
  children: PropTypes.node,
}

export default Switch
