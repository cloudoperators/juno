import { isString, isNumber, isObject } from "./utils"

/**
 * URL encoder for query params
 *
 * @param {Record<string, any>} data - Key-value object.
 * @return {string | undefined}
 */
const encodeQueryData = (data: Record<string, any>): string | undefined => {
  if (!data) return
  const ret = []
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      ret.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    }
  }
  return ret.join("&")
}

/**
 * Builds a URL from all path parts passed to the function.
 * @param {...(string | number)} path - A part of the URL.
 * @param {Record<string, any>} params - Params, headers, and other options supported by fetch.
 * @return {string}
 */
function buildUrl(...args: (string | number | Record<string, any>)[]): string {
  // This function needs at least two parameters
  if (args.length < 2) {
    throw new Error("Bad parameters: buildUrl needs at least two non-empty parameters.")
  }

  // Pop parameters object. This is the last argument
  const params = isObject(args[args.length - 1]) ? (args.pop() as Record<string, any>) : null

  // Validate arguments
  args.forEach((arg) => {
    if (!arg || !(isString(arg) || isNumber(arg))) {
      throw new Error(
        "Bad parameters: buildUrl accepts only strings and numbers, with a hash map as the last parameter"
      )
    }

    if (isString(arg) && arg.indexOf("?") >= 0) {
      throw new Error(
        'Bad parameters: buildUrl does not accept strings with "?" character. Please use a hashmap as the last parameter instead!'
      )
    }
  })

  // Build the URL
  let url = args.join("/")
  const [protocol, rest] = url.split("://")
  if (!protocol || !rest) {
    throw new Error(`Bad URL: ${url}`)
  }

  url = `${protocol}://${rest.replace(/\/\/+/g, "/")}`
  if (params) url += `?${encodeQueryData(params)}`

  return url
}

export { buildUrl }
