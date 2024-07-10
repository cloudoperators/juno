/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * This function compares the current path with the route path and returns an array.
 * The first element in the array is a boolean that indicates whether the comparison
 * was successful. The second element contains route parameters if the route path
 * contains placeholders in the form of ":VAR_NAME".
 * @param {string} currentPath currently active path
 * @param {string} routePath route path to be compared with the current path
 * @param {object} options exact: bool
 * @returns routeParams
 */
const routeMatcher = (currentPath, routePath, options) => {
  if (!routePath || !currentPath) return [false]

  options = options || {}
  // remove spaces at the beginning and end of routePath and currentPath
  routePath = routePath.trim()
  currentPath = currentPath.trim()

  // build regex from path by replacing all ":var" with "([^\/]+)"
  let regexString = "^" + routePath.replace(/:[^\/]+/g, "([^\\/]+)")
  // add "$" at the end of regex if exact is set
  if (options.exact) regexString += "$"

  const regex = new RegExp(regexString)
  const match = currentPath.match(regex)

  if (!match) return [false]

  // Find all parts of the route path that begin with ":"
  const paramKeys = routePath
    .split("/")
    .filter((part) => part.startsWith(":"))
    .map((key) => key.replace(":", ""))

  let routeParams = {}
  for (let i = 1; i <= match.length; i++) {
    const key = paramKeys[i - 1]
    if (!key) continue
    routeParams[key] = match[i]
  }

  return [true, routeParams]
}

export default routeMatcher
