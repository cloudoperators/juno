/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

describe("App Start Test", () => {
  it("should load the homepage", () => {
    cy.visit("http://localhost:3000")
    cy.get('div.juno-pageheader[role="banner"]').should("be.visible")
    cy.get('svg[title="SAP Logo"]').should("be.visible")
  })
})
