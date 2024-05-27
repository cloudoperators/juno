const { defineConfig } = require("cypress")

module.exports = defineConfig({
  defaultCommandTimeout: 20000,
  viewportWidth: 1300,
  viewportHeight: 1100,
  videoCompression: 20,
  includeShadowDom: true,
  chromeWebSecurity: false,

  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        log(message) {
          console.log(message)

          return null
        },
      })
    },
    supportFile: "cypress/support/index.js", // Path to file to load before spec files load. This file is compiled and bundled. (Pass false to disable)
    specPattern: "cypress/integration/**/*.{js,jsx}", // A String or Array of glob patterns of the test files to load.
  },
})
