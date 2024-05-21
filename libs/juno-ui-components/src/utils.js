/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Returns true if a value is a string
 * @param {any} value value to be tested
 * @return {Boolean} true or false
 */
export function isString(value) {
  if (!value) return false
  return typeof value === "string" || value instanceof String
}

/**
 * Returns true if a value is a number
 * @param {any} value value to be tested
 * @return {Boolean} true or false
 */
export function isNumber(value) {
  return typeof value === "number" && value.constructor === Number
}

/**
 * Returns true if a value is an object
 * @param {any} value value to be tested
 * @return {Boolean} true or false
 */
export function isObject(value) {
  return value && typeof value === "object" && value.constructor === Object
}

/**
 * Returns true if a value is an array
 * @param {any} value value to be tested
 * @return {Boolean} true or false
 */
export function isArray(value) {
  return Array.isArray(value)
}

/**
 * Returns true if a value is a function
 * @param {any} value value to be tested
 * @return {Boolean} true or false
 */
export function isFunction(value) {
  return typeof value === "function"
}

/**
 * Returns true if a value is null
 * @param {any} value value to be tested
 * @return {Boolean} true or false
 */
export function isNull(value) {
  return value === null
}

/**
 * Returns true if a value is undefined
 * @param {any} value value to be tested
 * @return {Boolean} true or false
 */
export function isUndefined(value) {
  return typeof value === "undefined"
}
