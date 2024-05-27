describe("Dashboard", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("loads content", () => {
    // content is loaded if children of root element exists.
    // children are built by
    cy.get('[data-juno-app="dashboard"]')
      .get('[data-shadow-host="true"]')
      .shadow()
      .children()
      .should("exist")
  })

  it("contains login button", () => {
    cy.visit("/")
    cy.contains("button", "Log in")
  })

  it("contains regions title", () => {
    cy.contains("Converged Cloud")
  })
})
