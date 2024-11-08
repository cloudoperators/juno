/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/*

  SUPERSTATE 

  + is a space
  ~ indentifies a non URI safe character with is not % encoded when followed by a character from the keys
  ~ is a minus if followed by a number 
  * indentifies non character like null or undefined
  * is a plus if followed by a number
  () object / Array
  : Key/value separator in JSON
  (~) array with no elements
  (*) array with a empty string
  % to encode characters not ~ encoded or URIsafe
*/

import lzstring from "lz-string"

type SupportedTypes = string | object | number | boolean | undefined | null | RegExp | any[]

type Indexable = {
  [key: string]: SupportedTypes
}

export default function () {
  const nonURIsafe = "~%\t\n\r\\/{}()+#$@?&=[]*;,"
  const keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-!_"

  // standard function for encoding and decoding
  function encode(value: SupportedTypes): string {
    switch (typeof value) {
      case "object":
        if (value === null) {
          return "*A"
        } else if (value instanceof RegExp) {
          // *R is a regex
          return encodeRegex(value)
        } else {
          return encodeObject(value)
        }
      case "undefined":
        return "*B"
      case "boolean":
        return "*" + (value ? "C" : "D")
      case "string":
        return encodeString(value)
      case "number":
        if (isNaN(value)) {
          return "*E"
        }
        if (value === +Infinity) {
          return "*F"
        }
        if (value === -Infinity) {
          return "*G"
        } else {
          return encodeNumber(value)
        }
    }
  }

  function decode(value: string): SupportedTypes {
    if (!value) return ""

    if (value[0] === "*") {
      switch (value[1]) {
        case "A":
          return null
        case "B":
          return undefined
        case "C":
          return true
        case "D":
          return false
        case "E":
          return NaN
        case "F":
          return +Infinity
        case "G":
          return -Infinity
        case "R":
          return decodeRegex(value)
        default:
          return decodeNumber(value)
      }
    }

    // test if value[0] is ~ and value[1] is a number
    if (/^~\d/.test(value)) {
      return decodeNumber(value)
    }

    if (value[0] === "(") {
      if (value[value.length - 1] !== ")") {
        throw new Error("JSON object not closed correctly")
      }
      return decodeObject(value)
    }
    return decodeString(value)
  }
  // obj
  function encodeString(value: string): string {
    return value
      .split("")
      .map((char) => {
        if (char === " ") {
          return "+"
        } else if (nonURIsafe.includes(char)) {
          return "~" + keys[nonURIsafe.indexOf(char)]
        } else if (!keys.includes(char)) {
          return encodeURIComponent(char)
        }
        return char
      })
      .join("")
  }

  function decodeString(value: string): string {
    let result = ""
    value = decodeURIComponent(value)

    for (let i = 0; i < value.length; i++) {
      const char = value[i]
      if (char === "+") {
        result += " "
      } else if (char === "~" && keys.includes(value[i + 1])) {
        result += nonURIsafe[keys.indexOf(value[i + 1])]
        i++ // Skip the next character
      } else {
        result += char
      }
    }
    return result
  }

  function encodeRegex(value: RegExp): string {
    // stringfy the regex and add *R to the beginning
    const source = encodeString(value?.source.toString())
    const flags = encodeString(value?.flags.toString())
    return `*R${source}*R${flags}*R`
  }

  function decodeRegex(value: string): RegExp {
    const regex = value
      .slice(2, -2)
      .split("*R")
      .map((v) => decodeString(v))
    return new RegExp(regex[0], regex[1])
  }

  function encodeObject(value: object | Array<any>): string {
    if (Array.isArray(value)) {
      return encodeArray(value)
    }
    // encode JSON object
    const entries = Object.entries(value).map(([key, val]) => {
      const encodedValue = encode(val)
      return `${key}:${encodedValue}`
    })
    return "(" + entries.join(",") + ")"
  }

  function decodeObject(value: string): object | Array<any> {
    if (value === "(~)") {
      return []
    }
    if (value === "(*)") {
      return [""]
    }
    if (value === "()") {
      return {}
    }

    if (isEncodedJSON(value)) {
      return decodeJSON(value)
    } else {
      return decodeArray(value)
    }
  }

  function decodeJSON(value: string): object {
    value = value.slice(1, -1)

    const entries = []
    let depth = 0
    let currentEntry = ""
    let key = ""

    // loop through the string and just add
    // the entries to the entries array
    // which are not paraphrased

    for (let i = 0; i < value.length; i++) {
      const char = value[i]
      if (char === "(") {
        depth++
        currentEntry += char
      } else if (char === ")") {
        depth--
        currentEntry += char
      } else if (char === ":" && depth === 0 && !key) {
        key = currentEntry.trim()
        currentEntry = ""
      } else if (char === "," && depth === 0) {
        if (key) {
          entries.push([key, currentEntry.trim()])
          key = ""
          currentEntry = ""
        }
      } else {
        currentEntry += char
      }
    }

    if (key) entries.push([key, currentEntry.trim()])

    const result: Indexable = {}
    entries.forEach(([key, encodedValue]) => {
      result[key] = decode(encodedValue)
    })

    return result
  }

  function encodeArray(value: Array<any>): string {
    if (value.length === 0) {
      return "(~)" // Special case for empty arrays
    }
    const encoded = "(" + value.map(encode).join(",") + ")"
    if (encoded === "()") {
      return "(*)"
    }
    return encoded
  }

  function decodeArray(value: string): SupportedTypes[] {
    // remove the brackets
    value = value.slice(1, -1)
    const entries = []
    let depth = 0
    let currentEntry = ""

    // loop through the string and just add
    // the entries to the entries array
    // which are not paraphrased

    for (let i = 0; i < value.length; i++) {
      const char = value[i]
      if (char === "(") {
        depth++
        currentEntry += char
      } else if (char === ")") {
        depth--
        currentEntry += char
      } else if (char === "," && depth === 0) {
        entries.push(currentEntry.trim())
        currentEntry = ""
      } else {
        currentEntry += char
      }
    }

    entries.push(currentEntry.trim())

    const result: SupportedTypes[] = []
    entries.forEach((encodedValue) => {
      result.push(decode(encodedValue))
    })

    return result
  }

  function encodeNumber(value: number): string {
    if (value < 0) {
      // delete - through ~
      return "~" + -value
    } else {
      return "*" + value
    }
  }
  function decodeNumber(value: string): number {
    if (value[0] === "~") {
      return -value.slice(1)
    }
    return +value.slice(1)
  }

  function isEncodedJSON(value: string): boolean {
    let isObject = false
    let depth = 0

    for (const char of value) {
      if (char === "(") depth++
      if (char === ")") depth--

      if (depth === 1 && char === ":") {
        isObject = true
      }
    }
    return isObject
  }

  /// base64
  function encodeB64(value: SupportedTypes): string {
    return btoa(encode(value))
  }

  function decodeB64(value: string): SupportedTypes {
    try {
      return decode(atob(value))
    } catch (_error) {
      throw new Error("URI malformed")
    }
  }

  // compressed
  function encodeLZ(value: SupportedTypes): string {
    return lzstring.compressToEncodedURIComponent(encode(value))
  }

  function decodeLZ(value: string): SupportedTypes {
    try {
      const result = decode(lzstring.decompressFromEncodedURIComponent(value))
      if (result === "") {
        throw new Error("URI malformed")
      }
      return result
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  /// base64 with null on error

  function decodeB64NullOnError(value: string): SupportedTypes {
    try {
      return decode(atob(value))
    } catch (_error) {
      return null
    }
  }

  function decodeLZNullOnError(value: string): SupportedTypes {
    try {
      const result = decode(lzstring.decompressFromEncodedURIComponent(value))
      if (result === "" && value !== "") {
        throw new Error("URI malformed")
      }
      return result
    } catch (_error) {
      return null
    }
  }

  function decodeNullOnError(value: string): SupportedTypes {
    try {
      return decode(value)
    } catch (_error) {
      return null
    }
  }

  return {
    encode: encode,
    decode: decode,
    encodeB64: encodeB64,
    decodeB64: decodeB64,
    encodeLZ: encodeLZ,
    decodeLZ: decodeLZ,
    decodeB64NullOnError: decodeB64NullOnError,
    decodeLZNullOnError: decodeLZNullOnError,
    decodeNullOnError: decodeNullOnError,
  }
}
