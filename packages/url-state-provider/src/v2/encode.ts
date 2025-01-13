/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import queryString from "query-string"
import { ObjectToEncode, Primitive } from "./types"

const isPrimitive = (value: Primitive | Primitive[]) => {
  return (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean" ||
    value === null ||
    value === undefined ||
    value instanceof RegExp
  )
}

const validateObjectToEncode = (object: ObjectToEncode) => {
  if (
    typeof object === "undefined" ||
    object === null ||
    Object.keys(object).length === 0 ||
    typeof object !== "object" ||
    object instanceof RegExp ||
    Array.isArray(object)
  ) {
    return false
  }

  for (const key in object) {
    const value = object[key]
    if (!isPrimitive(value) && !Array.isArray(value)) {
      return false
    }
    if (Array.isArray(value) && !value.every(isPrimitive)) {
      return false
    }
  }

  return true
}

const encode = (object: ObjectToEncode) => {
  if (!validateObjectToEncode(object)) {
    throw new TypeError(`Invalid object to encode`)
  }

  return queryString.stringify(object, {
    arrayFormat: "comma",
    sort: false,
  })
}

export default encode
