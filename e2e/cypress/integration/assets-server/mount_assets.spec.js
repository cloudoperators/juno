let windowErrorSpy
let windowWarnSpy

Cypress.on("window:before:load", (win) => {
  windowErrorSpy = cy.spy(win.console, "error")
  windowWarnSpy = cy.spy(win.console, "warn")
})

const DELAY = 1000

describe("mount app", () => {
  let apps
  before(() => {
    // navigate to root path
    cy.visit("/")

    // load manifest and get apps
    cy.request("manifest.json").then((response) => {
      let manifest = response.body
      apps = Object.values(manifest)
        .reduce((array, entry) => {
          return array.concat(Object.values(entry))
        }, [])
        .filter((app) => app.type === "app" && app.name !== "assets-overview")
    })
  })

  const allowedMessagesRegex = /^(?!AppShell: The contentHeading prop is obsolete and will be removed in a future version\. In order to render a content heading, use a ContentHeading element as a child in your main content\.$|Please provide a function to get the token$).*/

  it("can mount apps without errors", () => {
    apps.forEach(async (app) => {
      let appConf = { name: app.name, version: app.version, props: {} }

      if (appConf.name !== "auth") {
        if (app.appProps) {
          // default prop values
          const defaultPropValues = {currentHost: "https://localhost"}

          Object.keys(app.appProps).forEach((key) => {
            if (app.appProps[key]?.type === "required")
              // use default prop vaue or "test"
              appConf.props[key] = defaultPropValues[key] || "test"
          })
        }
        cy.log("mount app: " + JSON.stringify(appConf))
        let encodedAppConf = btoa(JSON.stringify(appConf))
        // load module file (index.js)
        cy.request(app.entryFile).should((response) => {
          expect(response.status).to.eq(200)
        })
        cy.visit("/mount-test.html?config=" + encodedAppConf)
        cy.wait(DELAY).then(() => {
          cy.get(`[data-juno-app="${app.name}"]`).should("exist") // check if app is mounted)
          cy.wait(DELAY).then(() => {
            expect(windowErrorSpy).to.not.be.called
            expect(windowWarnSpy).to.not.be.calledWithMatch(allowedMessagesRegex)
          })
          cy.log("\x1b[32mSUCCESS\x1b[37m")
        })
      }
    })
  })
})
