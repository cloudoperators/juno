/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
import { RouterContext } from "./RouterContext"
import useURLStateProvider from "./useURLStateProvider"

/**
 * Router is the main component in which all other components live.
 * In principle it is a context provider. Immediately after mounting,
 * this component registers itself with the URL State Provider with the
 * given stateID and sets the context variables:
 * * currentPath, intial it is the state from the URL or "/"
 * * options, optional
 * * navigateTo, function, which receives the path and options as parameters
 * * redirectTo, similar to navigateTo with the difference that the window history
 *   does not get a new entry, but the last URL is replaced.
 * @param {object} props, stateID and children
 * @returns
 */
const Router = ({ stateID, children }) => {
  const URLStateProvider = useURLStateProvider(stateID)

  // We do not render the children as long as the connection to the URL
  // state provider is not up.
  if (!URLStateProvider) return null

  return (
    <RouterContext.Provider
      value={{
        insideRouter: true,
        currentPath: URLStateProvider.state.p || "/",
        options: URLStateProvider.state.o,
        navigateTo: URLStateProvider.navigateTo,
        redirectTo: URLStateProvider.redirectTo,
      }}
    >
      {children}
    </RouterContext.Provider>
  )
}

Router.propTypes = {
  /** Pass the stateID */
  stateID: PropTypes.string.isRequired,
  /** Pass the children */
  children: PropTypes.node,
}

export default Router
