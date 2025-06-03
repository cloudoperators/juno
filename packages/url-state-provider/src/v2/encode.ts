/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import queryString from "query-string"
import { EncodeOptions, ObjectToEncode, Primitive } from "./types"

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
  for (const key in object) {
    if (!Object.prototype.hasOwnProperty.call(object, key)) continue
    const value = object[key]
    if (Array.isArray(value)) {
      // Array must be flat and contain only primitives
      if (!value.every(isPrimitive)) {
        return false
      }
    } else if (typeof value === "object" && value !== null && !(value instanceof RegExp)) {
      // Nested object is not allowed (except RegExp)
      return false
    } else if (!isPrimitive(value)) {
      // Only primitives or RegExp allowed
      return false
    }
  }
  return true
}

const encode = (object: ObjectToEncode, options?: EncodeOptions) => {
  // If the object has no own properties, return an empty string for tolerance
  if (typeof object !== "object" || object === null || Array.isArray(object) || Object.keys(object).length === 0) {
    return ""
  }

  // Validate that the object contains only allowed types (primitives, RegExp, or flat arrays of primitives)
  if (!validateObjectToEncode(object)) {
    throw new TypeError(`Invalid object to encode`)
  }

  return queryString.stringify(object, {
    arrayFormat: "comma",
    sort: false,
    skipEmptyString: options?.skipEmptyString ?? true,
    skipNull: options?.skipNull ?? true,
  })
}

export default encode
