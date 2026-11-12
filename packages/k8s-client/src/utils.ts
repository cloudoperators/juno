/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Returns true if a value is a string
 * @param {unknown} value value to be tested
 * @return {boolean} true or false
 */
function isString(value: unknown): value is string {
  return typeof value === "string" || value instanceof String
}

/**
 * Returns true if a value is a number
 * @param {unknown} value value to be tested
 * @return {boolean} true or false
 */
function isNumber(value: unknown): value is number {
  return typeof value === "number" && value.constructor === Number
}

/**
 * Returns true if a value is an object
 * @param {unknown} value value to be tested
 * @return {boolean} true or false
 */
function isObject(value: unknown): boolean {
  return value !== null && typeof value === "object" && value.constructor === Object
}

/**
 * Returns true if a value is an array
 * @param {unknown} value value to be tested
 * @return {boolean} true or false
 */
function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value)
}

/**
 * Returns true if a value is a function
 * @param {unknown} value value to be tested
 * @return {boolean} true or false
 */
function isFunction(value: unknown): value is (...args: unknown[]) => unknown {
  return typeof value === "function"
}

/**
 * Returns true if a value is null
 * @param {unknown} value value to be tested
 * @return {boolean} true or false
 */
function isNull(value: unknown): value is null {
  return value === null
}

/**
 * Returns true if a value is undefined
 * @param {unknown} value value to be tested
 * @return {boolean} true or false
 */
function isUndefined(value: unknown): value is undefined {
  return typeof value === "undefined"
}

export { isString, isNumber, isObject, isArray, isFunction, isNull, isUndefined }
