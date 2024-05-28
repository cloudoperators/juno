/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// Policy engine inspired by openstack
import { tokenize } from "./lexer"
import { parse } from "./parser"
import { evaluate } from "./evaluator"
import createDebugTrace from "./debugTrace"

const isObject = (v) => v && typeof v === "object" && v.constructor === Object

const parseRule = (rule) => evaluate(parse(tokenize(rule)))
const context = (tokenPayload) => {
  return {
    is_admin_project: tokenPayload.is_admin_project,
    is_admin: tokenPayload.is_admin,
    domain_id: tokenPayload.domain?.id,
    domain_name: tokenPayload.domain?.name,
    project_id: tokenPayload.project?.id,
    project_domain_id: tokenPayload.project?.domain?.id,
    user_id: tokenPayload.user?.id,
    user_name: tokenPayload.user?.name,
    roles: tokenPayload.roles || [],
  }
}

class PolicyEngine {
  constructor(policyJson) {
    if (!policyJson || !isObject(policyJson)) {
      throw new Error("Policy config is missing or is not of type JSON!")
    }

    this.parsedRules = {}
    this.rules = {}

    for (let name in policyJson) {
      this.rules[name] = policyJson[name]
      this.parsedRules[name] = parseRule(policyJson[name])
    }
  }

  parsedRule(name) {
    let rule = this.parsedRules[name]
    if (!rule) {
      console.info(`rule ${name} not found, looking for _default rule`)
      rule = this.parsedRules["_default"]
      if (!rule) throw new Error(`POLICY ERROR: could not find rule ${name}`)
    }
    return rule
  }

  rule(name) {
    return this.rules[name]
  }

  /**
   * initialize policy for given token payload
   * @param {object} tokenPayload openstack token
   * @returns {object} {check: function(ruleName,params)}
   */
  policy(tokenPayload, options = {}) {
    if (!tokenPayload)
      throw new Error("ENGINE ERROR: token payload is missing!")

    const policyContext = context(tokenPayload)
    const { debug } = options
    if (debug) {
      createDebugTrace(
        "POLICY ENGINE\ncontext: " + JSON.stringify(policyContext)
      ).log()
    }

    return {
      check: (ruleName, params = {}) => {
        const rule = this.parsedRule(ruleName)

        const debugTrace =
          debug &&
          createDebugTrace(
            "POLICY ENGINE\n" +
              `${ruleName}: ${this.rule(ruleName)}` +
              "\nparams: " +
              JSON.stringify(params) +
              "\ntrace:"
          )

        const result = rule({
          getRule: (n) => this.parsedRule(n),
          context: policyContext,
          params,
          debugTrace,
        })

        if (debugTrace) {
          debugTrace.add("result", result)
          debugTrace.log(result)
        }
        return result
      },
    }
  }
}

export default PolicyEngine
