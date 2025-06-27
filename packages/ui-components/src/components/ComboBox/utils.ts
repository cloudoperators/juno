import { ReactNode } from "react"

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
