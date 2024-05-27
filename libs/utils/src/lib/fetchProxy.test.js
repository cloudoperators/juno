/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import "whatwg-fetch"
import fetchProxy, { fetchProxyInitDB } from "./fetchProxy"

const originalConsoleError = global.console.warn

// catch consol WARNS: https://www.jackfranklin.co.uk/blog/failing-tests-on-react-proptypes/
beforeEach(() => {
  global.console.warn = (...args) => {
    const fetchProxyWarns = [/localDB already initialized/]

    if (fetchProxyWarns.some((p) => p.test(args[0]))) {
      throw new Error(args[0])
    }

    originalConsoleError(...args)
  }
})

describe("fetchProxy lib", () => {
  describe("fetchProxyInitDB", () => {
    it("through an error if given data is not valid JSON", () => {
      // setup wrang json data
      const db = 1234
      expect(() => fetchProxyInitDB(db)).toThrowError(/not a valid JSON object/)
    })
    it("through an error if given data is not a collection of key value pairs with values as arrays", () => {
      // setup wrang json data
      const db = {
        peaks: {
          id: 1,
          name: "Mont Blanc",
          height: 4808,
          country: "France",
          range: "Alps",
        },
      }
      expect(() => fetchProxyInitDB(db)).toThrowError(
        /not a collection of key value pairs with values as arrays/
      )
    })
    it("through an warn if localDB already initialized", () => {
      // setup mock db.json
      const db = {
        peaks: [
          {
            id: 1,
            name: "Mont Blanc",
            height: 4808,
            country: "France",
            range: "Alps",
          },
        ],
      }
      fetchProxyInitDB(db)
      expect(() => fetchProxyInitDB(db)).toThrow(/already initialized/)
    })
  })

  describe("fetch", () => {
    beforeEach(() => {
      // reset localDB
      fetchProxyInitDB(null)

      // setup mock db.json
      const db = {
        peaks: [
          {
            id: 1,
            name: "Mont Blanc",
            height: 4808,
            country: "France",
            range: "Alps",
          },
        ],
      }
      fetchProxyInitDB(db)
    })

    it("through an error if no mock data setup before fetching", () => {
      // set localDB to null to simulate not initialized
      fetchProxyInitDB(null)

      expect(() =>
        fetchProxy("http://localhost:3000/peaks", { mock: true })
      ).toThrow(/localDB not initialized/)
    })

    it("through an error if given url is not conform", () => {
      expect(() => fetchProxy("/peaks", { mock: true })).toThrowError()
    })

    test("GET all peaks", async () => {
      const data = await fetchProxy("http://localhost:3000/peaks", {
        mock: true,
      })
      expect(await data.json()).toStrictEqual([
        {
          id: 1,
          name: "Mont Blanc",
          height: 4808,
          country: "France",
          range: "Alps",
        },
      ])
    })

    test("GET one peak", async () => {
      const data = await fetchProxy("http://localhost:3000/peaks/1", {
        mock: true,
      })
      expect(await data.json()).toStrictEqual({
        id: 1,
        name: "Mont Blanc",
        height: 4808,
        country: "France",
        range: "Alps",
      })
    })

    test("POST", async () => {
      const data = await fetchProxy("http://localhost:3000/peaks", {
        method: "POST",
        body: JSON.stringify({
          name: "test",
        }),
        mock: true,
      })
      expect(await data.json()).toStrictEqual({
        id: 2,
        name: "test",
      })
    })

    test("PUT", async () => {
      const data = await fetchProxy("http://localhost:3000/peaks/1", {
        method: "PUT",
        body: JSON.stringify({
          id: 1,
          name: "test",
        }),
        mock: true,
      })
      expect(await data.json()).toStrictEqual({
        id: 1,
        name: "test",
        height: 4808,
        country: "France",
        range: "Alps",
      })
    })

    test("DELETE", async () => {
      const data = await fetchProxy("http://localhost:3000/peaks/1", {
        method: "DELETE",
        mock: true,
      })
      expect(await data.json()).toStrictEqual("Object deleted")
    })
  })

  describe("fetch with rewriteRoutes", () => {
    beforeEach(() => {
      // reset localDB
      fetchProxyInitDB(null)

      // setup mock db.json
      const db = {
        peaks: [
          {
            id: 1,
            name: "Mont Blanc",
            height: 4808,
            country: "France",
            range: "Alps",
          },
        ],
      }

      const rewriteRoutes = {
        "/api/v1/(.*)": "/$1", // Replace '/api/v1' with an empty string
        "^/api": "", // Replace '/api' with an empty string
      }

      const test = fetchProxyInitDB(db, { rewriteRoutes })
    })

    test("ignore prefix api/v1", async () => {
      const data = await fetchProxy("http://localhost:3000/api/v1/peaks", {
        mock: true,
      })
      expect(await data.json()).toStrictEqual([
        {
          id: 1,
          name: "Mont Blanc",
          height: 4808,
          country: "France",
          range: "Alps",
        },
      ])
    })
    test("ignore api", async () => {
      const data = await fetchProxy("http://localhost:3000/api/peaks", {
        mock: true,
      })
      expect(await data.json()).toStrictEqual([
        {
          id: 1,
          name: "Mont Blanc",
          height: 4808,
          country: "France",
          range: "Alps",
        },
      ])
    })
  })

  describe("fetch with rewriteResponses", () => {
    beforeEach(() => {
      // reset localDB
      fetchProxyInitDB(null)

      // setup mock db.json
      const db = {
        peaks: [
          {
            id: 1,
            name: "Mont Blanc",
            height: 4808,
            country: "France",
            range: "Alps",
          },
        ],
      }

      const rewriteResponses = {
        POST: {
          "^/peaks": { certificate: "testCertificate" },
        },
      }

      fetchProxyInitDB(db, { rewriteResponses })
    })

    test("POST", async () => {
      const data = await fetchProxy("http://localhost:3000/peaks", {
        method: "POST",
        body: JSON.stringify({
          name: "test",
        }),
        mock: true,
      })
      expect(await data.json()).toStrictEqual({
        certificate: "testCertificate",
      })
    })
  })
})
