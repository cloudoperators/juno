/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

var isOperator = (s) => /^(and|or|not|\(|\))$/.test(s),
  isExpression = (s) => /^.+:.+$/.test(s) || /^(@|!)$/.test(s)

function tokenize(rule) {
  const tokens = []

  // insert spaces betwenn "(" and ")" operators
  // ignore "%(" and ")s"
  // replace multiple spaces with one space
  const normalizedRule = rule
    .replace(/[^%]\(/g, " ( ")
    .replace(/\)[^s]/g, " ) ")
    .replace(/\s{2}/g, " ")
    .trim()

  normalizedRule.split(" ").forEach((t) => {
    if (isOperator(t)) tokens.push({ type: "operator", value: t })
    else if (isExpression(t)) tokens.push({ type: "expression", value: t })
    else {
      throw new Error(
        `Bad rule syntax. Only expressions and operators are allowed. 
        Expression has the syntax key:value or "@" for valid expression (true) and "!" 
        accordingly for wrong expression (false). 
        Operator can be one of "and", "or", "not", "(", ")": ${t}`
      )
    }
  })

  return tokens
}

export { tokenize }
