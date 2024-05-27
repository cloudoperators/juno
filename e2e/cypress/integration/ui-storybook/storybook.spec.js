describe("ui-components", () => {
  // before(() => {
  //   cy.visit("/")
  // })

  it("ui is reachable", () => {
    cy.request("/").should((response) => {
      expect(response.status).to.eq(200)
    })
  })
})
