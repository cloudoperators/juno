describe("manifest", () => {
  before(() => {
    cy.visit("/")
    cy.request("importmap.json").as("importmap")
  })

  it("importmap.json is reachable", () => {
    cy.get("@importmap").should((response) => {
      expect(response.status).to.eq(200)
    })
  })

  describe("imports", () => {
    const assets = [
      "assets-overview",
      "dashboard",
      "exampleapp",
      "volta",
      "whois",
      "widget-loader",
      "communicator",
      "juno-ui-components",
      "oauth",
      "policy-engine",
      "url-state-provider",
      "url-state-router",
    ]

    for (let asset of assets) {
      // contains latest assets
      it(`contains @juno/${asset}@latest`, () => {
        cy.request("importmap.json").then((response) => {
          expect(response.body)
            .to.have.property("imports")
            .to.have.property(`@juno/${asset}@latest`)
        })
      })
      it(`asset entry file is reachable`, () => {
        cy.request("importmap.json").then((response) => {
          const json = response.body
          const entryFile = json["imports"][`@juno/${asset}@latest`]
          cy.request(entryFile).should((response) => {
            expect(response.status).to.eq(200)
          })
        })
      })
    }
  })
})
