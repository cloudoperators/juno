describe("manifest", () => {
  before(() => {
    cy.visit("/")
    cy.request("manifest.json").as("manifest")
  })

  it("manifest.json is reachable", () => {
    cy.get("@manifest").should((response) => {
      expect(response.status).to.eq(200)
    })
  })

  describe("_global", () => {
    it(`contains _global scope`, () => {
      cy.request("manifest.json").then((response) => {
        console.log(response)
        expect(response.body).to.have.property("_global")
      })
    })

    it(`scope contains README`, () => {
      cy.request("manifest.json").then((response) => {
        expect(response.body["_global"]).to.have.property("readme")
      })
    })

    it(`global README is reachable`, () => {
      cy.request("manifest.json").then((response) => {
        const json = response.body["_global"]
        const readmeFile = json["readme"]
        cy.request(readmeFile).should((response) => {
          expect(response.status).to.eq(200)
        })
      })
    })

    it(`contains widget-loader@latest`, () => {
      cy.request("manifest.json").then((response) => {
        expect(response.body["_global"])
          .to.have.property("widget-loader")
          .to.have.property("latest")
      })
    })
    it(`entry file is reachable`, () => {
      cy.request("manifest.json").then((response) => {
        const json = response.body["_global"]
        const entryFile = json["widget-loader"]["latest"]["entryFile"]
        cy.request(entryFile).should((response) => {
          expect(response.status).to.eq(200)
        })
      })
    })
  })

  describe("assets", () => {
    const assets = {
      app: ["assets-overview", "dashboard", "exampleapp", "volta", "whois"],
      lib: [
        "communicator",
        "juno-ui-components",
        "oauth",
        "policy-engine",
        "url-state-provider",
        "url-state-router",
      ],
    }

    for (let assetType in assets) {
      for (let asset of assets[assetType]) {
        // contains latest assets
        it(`contains ${asset}@latest`, () => {
          cy.request("manifest.json").then((response) => {
            expect(response.body)
              .to.have.property(asset)
              .to.have.property("latest")
          })
        })
        it(`entry file is reachable`, () => {
          cy.request("manifest.json").then((response) => {
            const json = response.body
            const entryFile = json[asset]["latest"]["entryFile"]
            cy.request(entryFile).should((response) => {
              expect(response.status).to.eq(200)
            })
          })
        })

        it(`type is ${assetType}`, () => {
          cy.request("manifest.json").then((response) => {
            const json = response.body
            expect(json[asset]["latest"]["type"]).equal(assetType)
          })
        })
      }
    }
  })
})
