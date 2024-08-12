/**
 * Returns true if a value is a string
 * @param {any} value value to be tested
 * @return {Boolean} true or false
 */
function isString(value) {
  return typeof value === "string" || value instanceof String
}

/**
 * Returns true if a value is a number
 * @param {any} value value to be tested
 * @return {Boolean} true or false
 */
function isNumber(value) {
  return value && typeof value === "number" && value.constructor === Number
}

/**
 * Returns true if a value is an object
 * @param {any} value value to be tested
 * @return {Boolean} true or false
 */
function isObject(value) {
  return value && typeof value === "object" && value.constructor === Object
}

/**
 * Returns true if a value is an array
 * @param {any} value value to be tested
 * @return {Boolean} true or false
 */
function isArray(value) {
  return Array.isArray(value)
}

/**
 * Returns true if a value is a function
 * @param {any} value value to be tested
 * @return {Boolean} true or false
 */
function isFunction(value) {
  return typeof value === "function"
}

/**
 * Returns true if a value is null
 * @param {any} value value to be tested
 * @return {Boolean} true or false
 */
function isNull(value) {
  return value === null
}

/**
 * Returns true if a value is undefined
 * @param {any} value value to be tested
 * @return {Boolean} true or false
 */
function isUndefined(value) {
  return typeof value === "undefined"
}

export {
  isString,
  isNumber,
  isObject,
  isArray,
  isFunction,
  isNull,
  isUndefined,
}
