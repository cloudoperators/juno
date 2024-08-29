/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

const resolveResponse = (json) => {
  return new Response(JSON.stringify(json), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
}

const rejectResponse = (error) => {
  return new Response(error, {
    status: 404,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
}

let localDB = null
let rewriteRoutes = null
let rewriteResponses = null
let debug = false

// fetchProxyInitDB is used to initialize the localDB
// @jsonData: json object with the data to be used as localDB
// @options: object with the options
//   rewriteRoutes: object with the rewrite rules for the routes. Example:
//     {
//       "^/api/v1/peaks": "/peaks",
//       "^/api/v1/peaks/([0-9]+)": "/peaks/$1",
//     }
//   rewriteResponses: object with the rewrite rules for the responses. Example:
//     {
//       POST: {
//         "^/peaks": { certificate: "testCertificate" },
//       },
//     }
export const fetchProxyInitDB = (jsonData, options = {}) => {
  // set the debug mode
  if (options?.debug) {
    debug = true
  }

  // set localDB to null to reset it
  if (jsonData === null) {
    if (debug) console.log(`fetchProxyInitDB:: Reset localDB`)
    localDB = null
    return
  }

  // check if the localDB is initialized and warns if already initialized
  if (localDB) {
    // create a new custom warning to return
    console.warn(
      `fetchProxyInitDB:: localDB already initialized. This typically occurs when the component or hook, responsible for local database initialization, is accidentally re-rendered. If you intend to reset the local database, please ensure to set localDB to null first by invoking fetchProxyInitDB(null) before providing new data."`
    )
  }

  // check if the given json is valid and also checks if the jsondata are a collection of key value pairs with values as arrays
  if (typeof jsonData !== "object") {
    // create a new custom error to return
    throw new Error(`It seems that jsonData is not a valid JSON object.`)
  }

  // check if there are custom routes in the options
  if (options?.rewriteRoutes) {
    if (debug) console.log(`fetchProxyInitDB:: rewriteRoutes::`, options?.rewriteRoutes)

    // Filter out non-regex rules
    const regexRules = Object.fromEntries(
      Object.entries(options?.rewriteRoutes).filter(([key]) => {
        // check if key is a regex expresion
        try {
          new RegExp(key)
          return true
        } catch (_error) {
          // warn if expresion is not regex
          console.warn(`It seems that the given rewrite rule ${key} for routes is not a valid regex expresion.`)
          return false
        }
      })
    )
    // save them globally
    rewriteRoutes = regexRules
  }

  if (options?.rewriteResponses) {
    const allowedMethods = ["GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS"] //'PATCH'
    const regexResponses = {}

    if (debug) console.log(`fetchProxyInitDB:: rewriteResponses::`, options?.rewriteResponses)

    Object.keys(options?.rewriteResponses).forEach((key) => {
      // check if method is allowed
      if (!allowedMethods.includes(key)) {
        // warn if method is not allowed
        console.warn(`It seems that the given rewrite rule ${key} for responses is not a valid method.`)
        return
      }

      // check for each method defined if the key is a regex expresion
      const methodRegex = options?.rewriteResponses[key]
      // Filter out non-regex rules
      const methodRegexResponses = Object.fromEntries(
        Object.entries(methodRegex).filter(([key]) => {
          // check if key is a regex expresion
          try {
            new RegExp(key)
            return true
          } catch (_error) {
            // warn if expresion is not regex
            console.warn(`It seems that the given rewrite rule ${key} for responses is not a valid regex expresion.`)
            return false
          }
        })
      )
      regexResponses[key] = methodRegexResponses
    })

    // set the responseRewriteRules
    rewriteResponses = regexResponses
  }

  // check if the given json is valid and also checks if the jsondata are a collection of key value pairs with values as arrays
  if (
    Object.keys(jsonData).some((key) => {
      return !Array.isArray(jsonData[key])
    })
  ) {
    // create a new custom error to return
    throw new Error(`It seems that jsonData is not a collection of key value pairs with values as arrays.`)
  }

  if (debug) console.log(`fetchProxyInitDB:: jsonData::`, jsonData)

  // set the localDB
  localDB = jsonData
}

// use a custom option to switch between real fetch and mock fetch since process.env.NODE_ENV
// is set to production when building for browser platform: https://esbuild.github.io/api/#platform
const fetchProxy = (urlString, options) => {
  // split custom options from fetch options
  const { mock, ...fetchOptions } = options

  // if not set explicitly to true or "true", use the real fetch
  if (mock !== true && mock !== "true") {
    console.log(`fetchProxy:: real fetch for::`, urlString)
    return fetch(urlString, fetchOptions)
  }

  // warn localDB not initialized
  if (!localDB) {
    // create a new custom error to return
    throw new Error(`localDB not initialized.
    Please use fetchProxyInitDB(jsonData) to initialize the localDB.`)
  }

  let url = null
  try {
    // get the path from the url
    url = new URL(urlString)
  } catch (_error) {
    throw new Error(`Invalid URL: ${urlString}`)
  }

  // if method is not set, use GET as default
  let method = options?.method
  if (!method) method = "GET"
  let path = url.pathname

  // check if there are custom responses for the given path and method and save it for later
  let customResponse = null
  if (rewriteResponses?.[method]) {
    const customResponsePerMethod = rewriteResponses[method]
    for (const regexPattern in customResponsePerMethod) {
      const regex = new RegExp(regexPattern)
      if (regex.test(path)) {
        customResponse = resolveResponse(customResponsePerMethod[regexPattern])
        break
      }
    }
  }

  // check if there are custom routes
  if (rewriteRoutes) {
    for (const regexPattern in rewriteRoutes) {
      const regex = new RegExp(regexPattern)
      if (regex.test(path)) {
        path = path.replace(regex, rewriteRoutes[regexPattern])
        break
      }
    }
  }

  // get the object from the path
  const object = path.split("/")[1]
  // get the id from the path
  const id = path.split("/")[2]

  if (debug) {
    console.log(
      `fetchProxy:: mock fetch with method: `,
      method,
      ", path: ",
      path,
      ", object: ",
      object,
      ", id: ",
      id,
      ", customResponse: ",
      customResponse
    )
  }

  const body = options?.body
  // switch over the header method
  switch (method) {
    case "GET":
      return new Promise((resolve) => {
        if (object) {
          // object is given
          if (localDB?.[object]) {
            // object is found
            if (id) {
              // find the object with the id
              const index = localDB?.[object].findIndex((item) => {
                // compare with just == because id is a string
                // https://www.w3schools.com/js/js_comparisons.asp
                return item.id == id
              })
              // id is given
              if (index >= 0) {
                // id is found
                return resolve(customResponse || resolveResponse(localDB?.[object]?.[index]))
              } else {
                return resolve(rejectResponse(`No id ${id} for object ${object} found`))
              }
            }
            return resolve(customResponse || resolveResponse(localDB?.[object]))
          } else {
            return resolve(rejectResponse(`No object ${object} found`))
          }
        }
        resolve(resolveResponse(customResponse || localDB))
      })
    case "POST":
      return new Promise((resolve) => {
        if (!object || !body) resolve(rejectResponse(`No object '${object}' or body '${body}' given`))
        if (!localDB?.[object]) resolve(rejectResponse(`No object '${object}' found`))

        let newBody = JSON.parse(body)
        // set default id
        newBody.id = 1
        // if there are items find the item with the highest id
        if (localDB?.[object]?.length > 0) {
          // find the object with the highest id
          const maxObject = localDB?.[object].reduce((max, obj) => (obj.id > max.id ? obj : max))
          // set the id to the highest id + 1
          newBody.id = (maxObject?.id || 0) + 1
        }
        localDB?.[object].push(newBody)
        resolve(customResponse || resolveResponse(newBody))
      })
    case "PUT":
      return new Promise((resolve) => {
        if (!object || !id) resolve(rejectResponse(`No object '${object}' or id '${id}' given`))
        if (!localDB?.[object]) resolve(rejectResponse(`No object '${object}' found`))

        // find the object with the id
        const index = localDB?.[object].findIndex((item) => {
          // compare with just == because id is a string
          // https://www.w3schools.com/js/js_comparisons.asp
          return item.id == id
        })
        // update object with the id
        if (index >= 0) {
          // merge existing object with new body without changing the id
          localDB[object][index] = {
            ...localDB[object][index],
            ...JSON.parse(body),
            id: localDB[object][index].id,
          }
          resolve(customResponse || resolveResponse(localDB[object][index]))
        } else {
          return resolve(rejectResponse(`No item with id '${id}' found`))
        }
      })
    case "DELETE":
      return new Promise((resolve) => {
        if (!object || !id) resolve(rejectResponse(`No object '${object}' or id '${id}' given`))
        if (!localDB?.[object]) resolve(rejectResponse(`No object '${object}' found`))

        // find the object with the id
        const index = localDB?.[object].findIndex((item) => {
          // compare with just == because id is a string
          // https://www.w3schools.com/js/js_comparisons.asp
          return item.id == id
        })
        // delete object with the id
        if (index >= 0) {
          localDB[object].splice(index, 1)
          resolve(customResponse || resolveResponse("Object deleted"))
        } else {
          return resolve(rejectResponse(`No item with id '${id}' found`))
        }
      })
  }
}

export default fetchProxy
