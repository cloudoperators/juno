/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

const TOKEN_PROPERTIES = [
  "is_admin_project",
  "is_admin",
  "domain_id",
  "domain_name",
  "project_id",
  "project_domain_id",
  "user_id",
  "user_name",
]

const toString = (s) => (typeof s === "undefined" ? s : s.toString())

// evaluates a given expression
const evaluateExpression = (expression) => {
  let value = expression.value || expression

  /*********************** TRUE ************************ */
  // expression is a primitive "true", "True" or "@"
  if (/^(true|@)$/i.test(value)) {
    // return executable rule which returns true
    // (omit getRule, context and params because they are not used inside the executable rule)
    return ({ debugTrace }) => {
      if (debugTrace) debugTrace.add(expression, true)
      return true
    }
  }

  /*********************** FALSE *************************/
  // expression is a primitive "false", "False" or "!"
  if (!value || /^(false|!)$/i.test(value)) {
    // return executable rule which returns true
    // (omit getRule, context and params because they are not used inside the executable rule)
    return ({ debugTrace }) => {
      if (debugTrace) debugTrace.add(expression, false)
      return false
    }
  }

  /********************* SUB RULE ********************* */
  const ruleMatch = value.match(/rule:(.+)/)

  //expression is a rule
  if (ruleMatch) {
    // get name of the subrule
    const subRuleName = ruleMatch[1]

    // return executable sub rule
    return ({ getRule, context, params, debugTrace }) => {
      // debug log current rule
      if (debugTrace) debugTrace.add(expression)

      const subRule = getRule(subRuleName)

      // intend logger
      if (debugTrace) debugTrace.increaseLevel()
      // execute sub rule
      const result = subRule({ getRule, context, params, debugTrace })
      // indent back debug logger
      if (debugTrace) debugTrace.decreaseLevel()

      // debug log the result of current rule
      if (debugTrace) debugTrace.add("result", result)
      return result
    }
  }

  /*********************** ROLE *************************/
  const roleMatch = value.match(/role:(.+)/)

  // expression is a role
  if (roleMatch)
    return ({ context, debugTrace }) => {
      const result = !context.roles
        ? false
        : !!context.roles.find((r) => r.name === roleMatch[1])
      if (debugTrace) debugTrace.add(expression, result)
      return result
    }

  /********************** EXPRESSION *********************/
  let contextMatch = value.match(/^(.+):(.+)$/)

  // expression is a comparison left:right
  if (contextMatch) {
    // cache context name and expected value
    const contextName = contextMatch[1].toString()
    const contextExprectedValue = contextMatch[2].toString()

    // return executable rule (omit getRule because it is not used inside the executable rule)
    return ({ context, params, debugTrace }) => {
      // context value comes from context if TOKEN_PROPERTIES includes the name
      // otherwise it is a constant string, e.g. test:%(server.name)s
      const contextValue = TOKEN_PROPERTIES.includes(contextName)
        ? context[contextName]
        : contextName

      // right side of expression is null (support nil)
      if (contextExprectedValue === "null" || contextExprectedValue === "nil") {
        const result =
          typeof contextValue === "undefined" || contextValue === null
        if (debugTrace) debugTrace.add(expression, result)
        return result
      }

      // try to match right side as param
      const paramsMatch = contextExprectedValue.match(/^%\((.+)\)s$/)
      // compare context value with exprected value if right side isn't a param
      if (!paramsMatch) {
        const result = toString(contextValue) === contextExprectedValue
        if (debugTrace) debugTrace.add(expression, result)
        return result
      }

      // right side has the format %(name)s or %(name.name2.name3)s
      // handle values from given params
      const paramNameTokens = paramsMatch[1].split(".")
      let paramsValue = params || {}
      while (paramNameTokens.length > 0) {
        const key = paramNameTokens.shift()
        paramsValue = paramsValue && paramsValue[key]
      }

      // left side of expression is null (support nil)
      if (contextValue === "null" || contextValue === "nil") {
        const result =
          typeof paramsValue === "undefined" || paramsValue === null
        if (debugTrace) debugTrace.add(expression, result)
        return result
      }

      const result = contextValue === paramsValue
      if (debugTrace) debugTrace.add(expression, result)
      return result
    }
  }

  throw new Error(`EVALUATOR ERROR: unknown context variable ${value}`)
}

/**
 * converts an expression node into executable rule
 * @param {object} expressionNode {left,operator,right}
 * @return {function} expressionFunction ({getRule,context,params,debugTrace}) => ...
 */
function evaluate(expressionNode) {
  if (!expressionNode) return () => false
  if (expressionNode.type === "expression")
    return evaluateExpression(expressionNode.value)
  if (expressionNode.operator === "or") {
    return (args) =>
      evaluate(expressionNode.left)(args) ||
      evaluate(expressionNode.right)(args)
  }
  if (expressionNode.operator === "and") {
    return (args) =>
      evaluate(expressionNode.left)(args) &&
      evaluate(expressionNode.right)(args)
  }
  if (expressionNode.operator === "not") {
    return (args) => !evaluate(expressionNode.right)(args)
  }
}

export { evaluate }
