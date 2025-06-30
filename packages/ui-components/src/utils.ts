/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { ReactNode } from "react"

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

/**
 * Checks if a ReactNode is not an empty string (whitespace-only strings are considered empty).
 * Useful for conditional rendering in React components where you want to avoid rendering
 * empty or whitespace-only content.
 *
 * @param str - The ReactNode to check (typically a string, but can be any valid React content)
 * @returns True if the value is not a whitespace-only string, false otherwise.
 *          Non-string values (like numbers, JSX elements, etc.) will return true.
 *
 * @example
 * ```typescript
 * isNotEmptyString("Hello") // true
 * isNotEmptyString("   ") // false
 * isNotEmptyString("") // false
 * isNotEmptyString(<div>Content</div>) // true
 * isNotEmptyString(42) // true
 * ```
 */
export const isNotEmptyString = (str: ReactNode) => {
  return !(typeof str === "string" && str.trim().length === 0)
}

/**
 * Safely converts any value to a string representation, handling edge cases
 * like null, undefined, and complex objects gracefully.
 *
 * @param value - The value to convert to string (can be of any type)
 * @returns A string representation of the value:
 *          - Returns empty string for null/undefined values
 *          - Returns empty string for plain objects that would stringify to "[object Object]"
 *          - Returns String(value) for all other types
 *
 * @example
 * ```typescript
 * safeToString(null) // ""
 * safeToString(undefined) // ""
 * safeToString(42) // "42"
 * safeToString("hello") // "hello"
 * safeToString({name: "John"}) // ""
 * safeToString([1, 2, 3]) // "1,2,3"
 * safeToString(new Date()) // "Mon Jan 01 2024 12:00:00 GMT+0000 (UTC)"
 * ```
 */
export const safeToString = (value: any): string => {
  if (value === null || value === undefined) {
    return ""
  }

  if (typeof value === "object") {
    return String(value) !== "[object Object]" ? String(value) : ""
  }

  return String(value)
}
