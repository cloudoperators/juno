/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

const resolveResponse = (json: unknown) => {
  return new Response(JSON.stringify(json), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
}

const rejectResponse = (error: BodyInit | null | undefined) => {
  return new Response(error, {
    status: 404,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
}
type DefaultObjectKeyValuePairArray = { [subject: string]: unknown[] }
type DefaultObjectKeyValuePair = { [subject: string]: unknown }

let localDB: DefaultObjectKeyValuePairArray | null = null
let rewriteRoutes: DefaultObjectKeyValuePair | null = null
let rewriteResponses: DefaultObjectKeyValuePair | null = null
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
type Options = {
  debug?: boolean
  rewriteRoutes?: DefaultObjectKeyValuePair
  rewriteResponses?: DefaultObjectKeyValuePair
}

export const fetchProxyInitDB = (jsonData: DefaultObjectKeyValuePairArray | null, options: Options = {}) => {
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
    const regexResponses: { [subject: string]: unknown } = {}

    if (debug) console.log(`fetchProxyInitDB:: rewriteResponses::`, options?.rewriteResponses)

    Object.keys(options?.rewriteResponses).forEach((key) => {
      // check if method is allowed
      if (!allowedMethods.includes(key)) {
        // warn if method is not allowed
        console.warn(`It seems that the given rewrite rule ${key} for responses is not a valid method.`)
        return
      }

      // check for each method defined if the key is a regex expresion
      const methodRegex: { [s: string]: unknown } = options?.rewriteResponses![key] as { [s: string]: unknown }
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
const fetchProxy = (
  urlString: string | URL,
  options: { [x: string]: any; method?: string; rewriteResponses?: any; body?: string; mock?: boolean | string }
) => {
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
    throw new Error(`Invalid URL: ${url?.toString()}`)
  }

  // if method is not set, use GET as default
  let method = options?.method
  if (!method) method = "GET"
  let path = url.pathname

  // check if there are custom responses for the given path and method and save it for later
  let customResponse = null
  if (options?.rewriteResponses ?? (rewriteResponses && rewriteResponses[method])) {
    if (rewriteResponses !== null) {
      const customResponsePerMethod: { [subject: string]: unknown } = rewriteResponses[method] as {
        [subject: string]: unknown
      }
      for (const regexPattern in customResponsePerMethod) {
        const regex = new RegExp(regexPattern)
        if (regex.test(path)) {
          customResponse = resolveResponse(customResponsePerMethod[regexPattern])
          break
        }
      }
    }
  }

  // check if there are custom routes
  if (rewriteRoutes) {
    for (const regexPattern in rewriteRoutes) {
      const regex = new RegExp(regexPattern)
      if (regex.test(path)) {
        path = path.replace(regex, rewriteRoutes[regexPattern] as string)
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
      return getObjectByIdFromDB(object, id, customResponse)
    case "POST":
      return insertNewObject(object, body, customResponse)
    case "PUT":
      return updateNewObject(object, id, body as string, customResponse)
    case "DELETE":
      return deleteObject(object, id, customResponse)
  }
}

function deleteObject(object: string, id: string, customResponse: Response | null) {
  return new Promise((resolve) => {
    validateObjectAndId(object, resolve, id)
    const items: ObjectId[] = localDB?.[object] as ObjectId[]
    // find the object with the id
    const index =
      items.findIndex((item: ObjectId) => {
        // compare with just == because id is a string
        // https://www.w3schools.com/js/js_comparisons.asp
        return item.id == Number(id)
      }) ?? -1
    // delete object with the id
    if (index >= 0 && localDB !== null) {
      localDB[object].splice(index, 1)
      resolve(customResponse || resolveResponse("Object deleted"))
    } else {
      return resolve(rejectResponse(`No item with id '${id}' found`))
    }
  })
}

function updateNewObject(object: string, id: string, body: string, customResponse: Response | null) {
  return new Promise((resolve) => {
    validateObjectAndId(object, resolve, id)
    if (localDB !== null) {
      const items: ObjectId[] = localDB?.[object] as ObjectId[]
      // find the object with the id
      const index =
        items.findIndex((item: ObjectId) => {
          // compare with just == because id is a string
          // https://www.w3schools.com/js/js_comparisons.asp
          return item.id == Number(id)
        }) ?? -1
      // update object with the id
      if (index >= 0) {
        // merge existing object with new body without changing the id
        const updatedObject: ObjectId = localDB[object][index] as ObjectId
        const jsonResponse: DefaultObjectKeyValuePairArray = {
          ...updatedObject,
          ...JSON.parse(body),
          id: updatedObject.id,
        } as DefaultObjectKeyValuePairArray
        resolve(customResponse || resolveResponse(jsonResponse))
      } else {
        return resolve(rejectResponse(`No item with id '${id}' found`))
      }
    }
  })
}
// eslint-disable-next-line no-unused-vars
type SetValueCallback = (value: unknown) => void

function validateObjectAndId(object: string, resolve: SetValueCallback, id?: string) {
  if (!object || !id) resolve(rejectResponse(`No object '${object}' or id '${id}' given`))
  if (!localDB?.[object]) resolve(rejectResponse(`No object '${object}' found`))
}
type ObjectId = { id: number }
function insertNewObject(object: string, body: string | undefined, customResponse: Response | null) {
  return new Promise((resolve) => {
    validateObjectAndId(object, resolve, body)
    if (object && localDB && localDB[object] !== null) {
      const newBody: ObjectId = JSON.parse(body as string) as ObjectId
      // set default id
      newBody.id = 1
      // if there are items find the item with the highest id
      const items: ObjectId[] = localDB[object] as ObjectId[]
      if (items?.length > 0) {
        // find the object with the highest id
        const maxObject: ObjectId = items.reduce((max: ObjectId, obj: ObjectId) => (obj.id > max.id ? obj : max))
        // set the id to the highest id + 1
        newBody.id = (maxObject?.id || 0) + 1
      }
      localDB?.[object].push(newBody)
      resolve(customResponse || resolveResponse(newBody))
    }
  })
}

function getObjectByIdFromDB(object: string, id: string, customResponse: Response | null) {
  return new Promise((resolve) => {
    if (object && localDB && localDB[object] !== null) {
      // object is given and localDB is not null and object exists in localDB
      if (id) {
        // find the object with the id
        const items = localDB[object] as ObjectId[]
        const index = items.findIndex((item: ObjectId) => item.id == Number(id))
        // id is given
        if (index >= 0) {
          // id is found
          return resolve(customResponse || resolveResponse(localDB[object][index]))
        } else {
          return resolve(rejectResponse(`No id ${id} for object ${object} found`))
        }
      }
      return resolve(customResponse || resolveResponse(localDB[object]))
    } else {
      return resolve(rejectResponse(`No object ${object} found`))
    }
  })
}
export default fetchProxy
