/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { act } from "react"

import { render } from "@testing-library/react"
// support shadow dom queries
// https://reactjsexample.com/an-extension-of-dom-testing-library-to-provide-hooks-into-the-shadow-dom/

import { screen } from "shadow-dom-testing-library"
import {
  Outlet,
  RouterProvider,
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router"
import { MessagesProvider } from "@cloudoperators/juno-messages-provider"
import ShellLayout from "./ShellLayout"
import StoreProvider from "../StoreProvider"
import { AuthProvider } from "../AuthProvider"

const renderComponent = () => {
  const rootRoute = createRootRoute({
    component: () => <Outlet />,
  })
  const testRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",

    component: () => (
      <AuthProvider options={{ mockAuth: true }}>
        <MessagesProvider>
          <StoreProvider>
            <ShellLayout />
          </StoreProvider>
        </MessagesProvider>
      </AuthProvider>
    ),
  })
  const routeTree = rootRoute.addChildren([testRoute])
  const router = createRouter({
    routeTree,
    history: createMemoryHistory({
      initialEntries: ["/"],
    }),
  })

  return {
    ...render(<RouterProvider router={router} />),
    router,
  }
}

test("renders app", async () => {
  await act(async () => renderComponent())

  let logoTitle = screen.queryAllByShadowTitle(/Greenhouse/i)
  expect(logoTitle.length > 0).toBe(true)
})
