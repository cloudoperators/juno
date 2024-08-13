/**
 * Returns true if a value is a string
 * @param {any} value value to be tested
 * @return {boolean} true or false
 */
function isString(value: any): value is string {
  return typeof value === "string" || value instanceof String
}

/**
 * Returns true if a value is a number
 * @param {any} value value to be tested
 * @return {boolean} true or false
 */
function isNumber(value: any): value is number {
  return typeof value === "number" && value.constructor === Number
}

/**
 * Returns true if a value is an object
 * @param {any} value value to be tested
 * @return {boolean} true or false
 */
function isObject(value: any): value is Record<string, unknown> {
  return value !== null && typeof value === "object" && value.constructor === Object
}

/**
 * Returns true if a value is an array
 * @param {any} value value to be tested
 * @return {boolean} true or false
 */
function isArray(value: any): value is any[] {
  return Array.isArray(value)
}

/**
 * Returns true if a value is a function
 * @param {any} value value to be tested
 * @return {boolean} true or false
 */
function isFunction(value: any): value is Function {
  return typeof value === "function"
}

/**
 * Returns true if a value is null
 * @param {any} value value to be tested
 * @return {boolean} true or false
 */
function isNull(value: any): value is null {
  return value === null
}

/**
 * Returns true if a value is undefined
 * @param {any} value value to be tested
 * @return {boolean} true or false
 */
function isUndefined(value: any): value is undefined {
  return typeof value === "undefined"
}

export { isString, isNumber, isObject, isArray, isFunction, isNull, isUndefined }
