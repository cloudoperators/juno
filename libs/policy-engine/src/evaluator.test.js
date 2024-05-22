/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { evaluate } from "./evaluator"
const rules = { admin: () => true }
const getRule = (n) => rules[n]

describe("evaluate", () => {
  it("returns a function", () => {
    const rule = evaluate({
      left: { type: "expression", value: "domain_id:test" },
      operator: "and",
      right: { type: "expression", value: "user_id:test" },
    })
    expect(typeof rule).toEqual("function")
  })

  it("true and false", () => {
    const rule = evaluate({
      left: { type: "expression", value: "true" },
      operator: "and",
      right: { type: "expression", value: "false" },
    })
    expect(rule({})).toEqual(false)
  })

  it("true or false", () => {
    const rule = evaluate({
      left: { type: "expression", value: "true" },
      operator: "or",
      right: { type: "expression", value: "false" },
    })
    expect(rule({})).toEqual(true)
  })

  it("false or (true and false) or true", () => {
    const rule = evaluate({
      left: { type: "expression", value: "false" },
      operator: "or",
      right: {
        left: {
          left: { type: "expression", value: "true" },
          operator: "and",
          right: { type: "expression", value: "false" },
        },
        operator: "or",
        right: { type: "expression", value: "true" },
      },
    })

    expect(rule({})).toEqual(true)
  })

  describe("rules", () => {
    it("rule:admin or @", () => {
      const rule = evaluate({
        left: { type: "expression", value: "rule:admin" },
        operator: "or",
        right: { type: "expression", value: "@" },
      })
      expect(rule({ getRule })).toEqual(true)
    })
  })
  describe("roles", () => {
    it("rule:admin or role:superadmin", () => {
      const rules = { admin: () => true }

      const rule = evaluate({
        left: { type: "expression", value: "rule:admin" },
        operator: "or",
        right: { type: "expression", value: "role:superadmin" },
      })
      expect(
        rule({
          getRule,
          context: { roles: [{ name: "superadmin" }] },
        })
      ).toEqual(true)
    })
  })

  describe("is_admin_project", () => {
    it("rule:admin or is_admin_project:true", () => {
      const rule = evaluate({
        left: { type: "expression", value: "rule:admin" },
        operator: "or",
        right: { type: "expression", value: "is_admin_project:true" },
      })
      expect(
        rule({
          getRule,
          context: { is_admin_project: true },
        })
      ).toEqual(true)
    })

    it("rule:admin or is_admin_project:false", () => {
      const rule = evaluate({
        left: { type: "expression", value: "rule:admin" },
        operator: "or",
        right: { type: "expression", value: "is_admin_project:false" },
      })
      expect(
        rule({
          getRule,
          context: { is_admin_project: false },
        })
      ).toEqual(true)
    })
  })

  describe("is_admin", () => {
    it("rule:admin or is_admin:1", () => {
      const rule = evaluate({
        left: { type: "expression", value: "rule:admin" },
        operator: "or",
        right: { type: "expression", value: "is_admin:1" },
      })
      expect(
        rule({
          getRule,
          context: { is_admin: 1 },
        })
      ).toEqual(true)
    })

    it("rule:admin or is_admin:false", () => {
      const rule = evaluate({
        left: { type: "expression", value: "rule:admin" },
        operator: "or",
        right: { type: "expression", value: "is_admin:false" },
      })
      expect(
        rule({
          getRule: () => () => false,
          context: { is_admin: 1 },
        })
      ).toEqual(false)
    })
  })

  describe("domain_id", () => {
    it("rule:admin or domain_id:12345", () => {
      const rule = evaluate({
        left: { type: "expression", value: "rule:admin" },
        operator: "or",
        right: { type: "expression", value: "domain_id:12345" },
      })
      expect(
        rule({
          getRule,
          context: { domain_id: "12345" },
        })
      ).toEqual(true)
    })

    it("rule:admin or domain_id:54321", () => {
      const rule = evaluate({
        left: { type: "expression", value: "rule:admin" },
        operator: "or",
        right: { type: "expression", value: "domain_id:54321" },
      })
      expect(
        rule({
          getRule: () => () => false,
          context: { domain_id: "12345" },
        })
      ).toEqual(false)
    })
  })
  describe("domain_name", () => {
    it("rule:admin or domain_name:test", () => {
      const rule = evaluate({
        left: { type: "expression", value: "rule:admin" },
        operator: "or",
        right: { type: "expression", value: "domain_name:test" },
      })
      expect(
        rule({
          getRule,
          context: { domain_name: "test" },
        })
      ).toEqual(true)
    })

    it("rule:admin or domain_name:test3", () => {
      const rule = evaluate({
        left: { type: "expression", value: "rule:admin" },
        operator: "or",
        right: { type: "expression", value: "domain_name:test3" },
      })
      expect(
        rule({
          getRule: () => () => false,
          context: { domain_name: "12345" },
        })
      ).toEqual(false)
    })
  })

  describe("project_id", () => {
    it("rule:admin or project_id:12345", () => {
      const rule = evaluate({
        left: { type: "expression", value: "rule:admin" },
        operator: "or",
        right: { type: "expression", value: "project_id:12345" },
      })
      expect(
        rule({
          getRule,
          context: { project_id: "12345" },
        })
      ).toEqual(true)
    })

    it("rule:admin or project_id:54321", () => {
      const rule = evaluate({
        left: { type: "expression", value: "rule:admin" },
        operator: "or",
        right: { type: "expression", value: "project_id:54321" },
      })
      expect(
        rule({
          getRule: () => () => false,
          context: { project_id: "12345" },
        })
      ).toEqual(false)
    })
  })

  describe("project_domain_id", () => {
    it("rule:admin or project_domain_id:12345", () => {
      const rule = evaluate({
        left: { type: "expression", value: "rule:admin" },
        operator: "or",
        right: { type: "expression", value: "project_domain_id:12345" },
      })
      expect(
        rule({
          getRule,
          context: { project_domain_id: "12345" },
        })
      ).toEqual(true)
    })

    it("rule:admin or project_domain_id:test3", () => {
      const rule = evaluate({
        left: { type: "expression", value: "rule:admin" },
        operator: "or",
        right: { type: "expression", value: "project_domain_id:test3" },
      })
      expect(
        rule({
          getRule: () => () => false,
          context: { project_domain_id: "12345" },
        })
      ).toEqual(false)
    })
  })

  describe("user_id", () => {
    it("rule:admin or user_id:12345", () => {
      const rule = evaluate({
        left: { type: "expression", value: "rule:admin" },
        operator: "or",
        right: { type: "expression", value: "user_id:12345" },
      })
      expect(
        rule({
          getRule,
          context: { user_id: "12345" },
        })
      ).toEqual(true)
    })

    it("rule:admin or user_id:test3", () => {
      const rule = evaluate({
        left: { type: "expression", value: "rule:admin" },
        operator: "or",
        right: { type: "expression", value: "user_id:test3" },
      })
      expect(
        rule({
          getRule: () => () => false,
          context: { user_id: "12345" },
        })
      ).toEqual(false)
    })
  })

  describe("params", () => {
    it("rule:admin or test:%(domain.name)s", () => {
      const rule = evaluate({
        left: { type: "expression", value: "rule:admin" },
        operator: "or",
        right: { type: "expression", value: "test:%(domain.name)s" },
      })
      const result = rule({
        getRule,
        params: { domain: { name: "test" } },
      })
      expect(result).toEqual(true)
    })

    it("domain_id:%(domain_id)s, params: {domain_id:'12345'}", () => {
      const rule = evaluate({
        type: "expression",
        value: "domain_id:%(domain_id)s",
      })
      expect(
        rule({
          context: { domain_id: "12345" },
          params: { domain_id: "12345" },
        })
      ).toEqual(true)
    })

    it("domain_id:%(domain_id)s, params: {domain_id:'54321'}", () => {
      const rule = evaluate({
        type: "expression",
        value: "domain_id:%(domain_id)s",
      })

      expect(
        rule({
          context: { domain_id: "12345" },
          params: { domain_id: "54321" },
        })
      ).toEqual(false)
    })

    it("domain_id:%(domain_id)s and user_id:%(test)s, params: {domain_id:'12345', test: 'test_user'}", () => {
      const rule = evaluate({
        operator: "and",
        left: { type: "expression", value: "domain_id:%(domain_id)s" },
        right: { type: "expression", value: "user_id:%(test)s" },
      })
      expect(
        rule({
          context: { domain_id: "12345", user_id: "test_user" },
          params: { domain_id: "12345", test: "test_user" },
        })
      ).toEqual(true)
    })

    it("parses params, domain_id:%(user.domain.id)s", () => {
      const rule = evaluate({
        type: "expression",
        value: "domain_id:%(user.domain.id)s",
      })
      expect(
        rule({
          context: { domain_id: "12345" },
          params: { user: { domain: { id: "12345" } } },
        })
      ).toEqual(true)
    })

    it("domain_id:null", () => {
      const rule = evaluate({
        type: "expression",
        value: "domain_id:null",
      })
      expect(
        rule({
          context: {},
        })
      ).toEqual(true)
    })

    it("domain_id:null", () => {
      const rule = evaluate({
        type: "expression",
        value: "domain_id:null",
      })
      expect(
        rule({
          context: { domain_id: "12345" },
        })
      ).toEqual(false)
    })

    describe("allow to check params for specific strings", () => {
      it("test:%(domain_id)s", () => {
        const rule = evaluate({
          type: "expression",
          value: "test:%(domain_id)s",
        })
        expect(
          rule({
            context: {},
            params: { domain_id: "test" },
          })
        ).toEqual(true)
      })
    })
  })
})
