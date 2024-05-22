/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * This module implements the parser for an array of tokens.
 * A token is an object with two properties "type" and "value".
 * "type" is one of "expression" or "operator". Value of operator
 * can have one of "and", "or", "not", "(" or ")".
 * @module
 */
// define operator predences
const OPERATORS_PRECEDENCE = {
  and: 1,
  not: 2,
  or: 0,
}

/**
 * Returns precedence of the operator
 * @param {object} operator
 * @returns
 */
function precedenceOf(operator) {
  return OPERATORS_PRECEDENCE[operator.value]
}

function validateTokens(tokens) {
  if (!tokens)
    throw new Error("PARSE ERROR: tokens must not be undefined or null")

  if (tokens.length === 0) return tokens

  const firstToken = tokens[0]
  const lastToken = tokens[tokens.length - 1]

  if (
    firstToken.type === "operator" &&
    ["and", "or"].includes(firstToken.value)
  ) {
    throw new Error("PARSE ERROR: tokens must not begin with 'and' or 'or'")
  }
  if (
    lastToken.type === "operator" &&
    ["and", "or", "not"].includes(lastToken.value)
  ) {
    throw new Error(
      "PARSE ERROR: tokens must not end with 'and' or 'or' or 'not'"
    )
  }

  for (let i = 0; i < tokens.length; i++) {
    if (i < tokens.length - 1) {
      if (
        tokens[i].type === "operator" &&
        ["or", "and"].includes(tokens[i].value) &&
        tokens[i + 1].type === "operator" &&
        ["or", "and"].includes(tokens[i + 1].value)
      )
        throw new Error(
          "PARSE ERROR: tokens must not contain two operators of the type 'and' or 'or' in a row"
        )

      if (
        tokens[i].type === "expression" &&
        tokens[i + 1].type === "expression"
      )
        throw new Error(
          `PARSE ERROR: tokens must not contain two expressions in a row: ${tokens
            .map((t) => t.value)
            .join(" ")} ${JSON.stringify(tokens)}`
        )
    }
  }
  return tokens
}

/**
 * Replaces brackets with arrays
 * @param {array} tokens
 * @example
 * [
 *   { type: "expression", value: "A" },
 *   { type: "operator", value: "and" },
 *   { type: "operator", value: "(" },
 *   { type: "expression", value: "B" }
 *   { type: "operator", value: "or" },
 *   { type: "expression", value: "C" }
 *   { type: "operator", value: ")" },
 * ]
 * =>
 * [
 *   { type: "expression", value: "A" },
 *   { type: "operator", value: "and" },
 *   [
 *     { type: "expression", value: "B" }
 *     { type: "operator", value: "or" },
 *     { type: "expression", value: "C" }
 *   ]
 * ]
 * @returns {array} tokens
 */
function bracketsToArrays(tokens) {
  const result = []
  while (tokens.length > 0) {
    const token = tokens.shift()
    if (token.type === "operator" && token.value === ")") {
      // done
      return result
    }
    if (token.type === "operator" && token.value === "(") {
      result.push(bracketsToArrays(tokens))
    } else {
      result.push(token)
    }
  }
  return result
}

/**
 * Replaces not operators together with the right expression with array.
 * @example
 * [
 *   { type: "expression", value: "A" },
 *   { type: "operator", value: "and" },
 *   { type: "operator", value: "not" },
 *   { type: "expression", value: "B" }
 * ]
 * =>
 * [
 *   { type: "expression", value: "A" },
 *   { type: "operator", value: "and" },
 *   [
 *     { type: "operator", value: "not" },
 *     { type: "expression", value: "B" }
 *   ]
 * ]
 * @param {array} tokens
 * @returns {array} tokens
 */
function notOperatorsToArrays(tokens) {
  let index = 0

  const recursively = () => {
    let notExpression = [{ type: "operator", value: "not" }]
    let token = tokens[index]
    index++
    if (token.type === "operator" && token.value === "not") {
      notExpression.push(recursively())
    } else {
      notExpression.push(token)
    }
    return notExpression
  }

  let result = []
  while (index < tokens.length) {
    let token = tokens[index]
    index++
    if (token.type === "operator" && token.value === "not") {
      result.push(recursively())
    } else {
      result.push(token)
    }
  }
  return result
}

/**
 * This function converts recursively a given array of tokens into a tree of nodes.
 * @param {array} tokens
 * @param {object} expressionNode contains the left side from last run of parse or is empty
 * @example
 * [
 *   { type: "expression", value: "A" },
 *   { type: "operator", value: "and" },
 *   { type: "expression", value: "B" }
 * ]
 * // will be converted into
 * {
 *   operator: "and",
 *   left: { type: "expression", value: "A" },
 *   right: { type: "expression", value: "B" }
 * }
 * @returns {object} a tree of nodes
 */
function parse(tokens, expressionNode, level = 0) {
  // tokens is empty -> return empty object
  if (!tokens || tokens.length === 0) return {}

  // get first token and removes it from the array
  let currentToken = tokens.shift()

  // 3 possible situations
  // 1. currentToken is the last one -> return it (stop parsing)
  // 2. currentToken is an expression
  //    a) currentToken is an array (brackets, subtokens) -> expression = parse(currentToken)
  //    b) currentToken is a primitve type ->
  //       expression = currentToken
  //    this is the left part of the expressionNode
  //    continue parsing recursively and return the result
  //    return parse(tokens, {left: expression})
  // 3. currentToken is an operator
  //    a) precendece of this operator is higher than of the very next operator
  //       swap right with left and continue parsing recursively the right side
  //    b) precedence of this operator is lower than of the very next operator
  //       continue right binding parsing of the right side

  // if currentToken is the last token then return it and stop parsing
  if (tokens.length === 0) {
    // last token (right side)
    // parse currentToken if it is an array
    // (result from preparsing )
    const expression = Array.isArray(currentToken)
      ? parse(currentToken, null, level)
      : { ...currentToken }
    return expression
  }

  let tree = {}

  // currentToken is an expression
  if (currentToken.type === "expression" || Array.isArray(currentToken)) {
    // parse currentToken if it is an array
    const expression = Array.isArray(currentToken)
      ? parse(currentToken, null, level)
      : { ...currentToken }

    // set left part of expressionNode and continue to parse
    tree = parse(tokens, { left: expression }, level + 1)
  } else if (currentToken.type === "operator") {
    // currentToken is an operator

    // find very next operator and compare the precendece with the current operator
    const nextOperator = tokens.find((t) => t.type === "operator")

    if (
      nextOperator &&
      precedenceOf(currentToken) > precedenceOf(nextOperator)
    ) {
      // console.log("higher precendece")
      // higher precedence -> swap right with left
      // example precendece of "or" is lower than of "and"
      // "A or B and C" yields a different tree than "A and B or C"
      // { left: "A", operator: "or", right: { left: "B", operator: "and", right: "C" } }
      // vs.
      // { left: { left: "A", operator: "and", right: "B" }, operator: "or", right: "C" }
      const nextExpression = tokens.shift()

      tree = parse(tokens, {
        left: {
          left: expressionNode?.left,
          operator: currentToken.value,
          right: Array.isArray(nextExpression)
            ? parse(nextExpression)
            : nextExpression,
        },
      })
      return tree
    } else {
      // lower precedence -> continue right binding process
      tree = {
        left: expressionNode?.left,
        operator: currentToken.value,
        right: parse(tokens, null, level + 1),
      }
    }
  } else {
    // no types other than "operator" and "expression" are accepted
    throw new Error(
      `PARSE ERROR: unknown token type. Only expressions and operators are allowed.`
    )
  }

  return tree
}

const validateAndParse = (tokens) => {
  tokens = validateTokens(tokens.slice())
  tokens = bracketsToArrays(tokens)
  tokens = notOperatorsToArrays(tokens)
  return parse(tokens)
}

export { validateAndParse as parse }
