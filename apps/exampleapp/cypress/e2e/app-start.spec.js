describe("App Start Test", () => {
  it("should load the homepage", () => {
    cy.visit("http://localhost:3000")
    cy.get('div.juno-pageheader[role="banner"]').should("be.visible")
    cy.get('svg[title="SAP Logo"]').should("be.visible")
  })
})
