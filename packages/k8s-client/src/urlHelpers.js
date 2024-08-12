import { isString, isNumber, isObject } from "./utils"
/**
 * URL encoder for query params
 *
 * @param {Object} data key value object.
 * @return {string}
 */
const encodeQueryData = (data) => {
  if (!data) return
  const ret = []
  for (let d in data)
    ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]))
  return ret.join("&")
}

/**
 * Builds an url of all path parts passed to the function.
 * @param {...string} path - A part of url.
 * @param {Object} params params, headers and other options supported by fetch.
 * @return {string}
 */
function buildUrl() {
  const args = []
  for (let i = 0; i < arguments.length; i++)
    typeof arguments[i] !== "undefined" && args.push(arguments[i])

  // This function needs at least two parameters
  if (args.length < 2)
    throw new Error(
      "Bad parameters: buildUrl needs at least two non empty parameters."
    )

  // pop parameters object. This is the last argument
  let params = isObject(args[args.length - 1]) ? args.pop() : null

  // validate arguments
  args.forEach((arg) => {
    if (!arg || !(isString(arg) || isNumber(arg)))
      throw new Error(
        "Bad parameters: buildUrl accepts only strings and number and hash map as the last parameter"
      )

    if (isString(arg) && arg.indexOf("?") >= 0)
      throw new Error(
        'Bad parameters: buildUrl does not accept strings with "?" character. Please use hashmap as last parameter instead!'
      )
  })

  // build url
  let url = args.join("/")
  let [protocol, rest] = url.split("://")
  if (!protocol || !rest) throw new Error(`Bad url: ${url}`)

  url = `${protocol}://${rest.replace(/\/\/+/g, "/")}`
  if (params) url += `?${encodeQueryData(params)}`

  return url
}

export { buildUrl }
