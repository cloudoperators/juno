/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export type Primitive = string | number | boolean | null | undefined | RegExp

type LimitedNestedObject = {
  [key: string]: Primitive | Primitive[]
}

export type ObjectToEncode = LimitedNestedObject
export type DecodedObject = LimitedNestedObject

export type EncodeOptions = {
  skipEmptyString?: boolean
  skipNull?: boolean
}
