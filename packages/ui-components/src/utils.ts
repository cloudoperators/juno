/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Returns true if a value is a string
 * @param {any} value value to be tested
 * @return {Boolean} true or false
 */
export function isString(value: unknown) {
  if (!value) return false
  return typeof value === "string" || value instanceof String
}

/**
 * Returns true if a value is a number
 * @param {any} value value to be tested
 * @return {Boolean} true or false
 */
export function isNumber(value: unknown) {
  return typeof value === "number" && value.constructor === Number
}

/**
 * Returns true if a value is an object
 * @param {any} value value to be tested
 * @return {Boolean} true or false
 */
export function isObject(value: unknown) {
  return value && typeof value === "object" && value.constructor === Object
}

/**
 * Returns true if a value is an array
 * @param {any} value value to be tested
 * @return {Boolean} true or false
 */
export function isArray(value: unknown) {
  return Array.isArray(value)
}

/**
 * Returns true if a value is a function
 * @param {any} value value to be tested
 * @return {Boolean} true or false
 */
export function isFunction(value: unknown) {
  return typeof value === "function"
}

/**
 * Returns true if a value is null
 * @param {any} value value to be tested
 * @return {Boolean} true or false
 */
export function isNull(value: unknown) {
  return value === null
}

/**
 * Returns true if a value is undefined
 * @param {any} value value to be tested
 * @return {Boolean} true or false
 */
export function isUndefined(value: unknown) {
  return typeof value === "undefined"
}

/**
 * A utility function that combines clsx and tailwind-merge
 *
 * This function takes multiple class values (strings, objects, arrays, etc.)
 * and combines them into a single string of CSS classes.
 * It then uses tailwind-merge to resolve any Tailwind CSS conflicts.
 *
 * @param inputs - Class values to be combined
 * @returns A string of CSS classes with Tailwind conflicts resolved
 *
 * @example
 * // Basic usage
 * cn('text-red-500', 'bg-blue-500')
 * // => 'text-red-500 bg-blue-500'
 *
 * @example
 * // With conditionals
 * cn('text-white', isError && 'bg-red-500', !isError && 'bg-blue-500')
 * // => 'text-white bg-red-500' or 'text-white bg-blue-500'
 *
 * @example
 * // Resolving conflicts
 * cn('text-red-500', 'text-blue-500')
 * // => 'text-blue-500' (the latter class wins)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
