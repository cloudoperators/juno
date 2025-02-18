/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MockedProvider } from "@apollo/client/testing"
import { Shell } from "./Shell"
import { GetServicesDocument } from "../../generated/graphql"

const mocks = [
  {
    request: {
      query: GetServicesDocument,
    },
    result: {
      data: {
        Services: {
          edges: [
            {
              node: {
                id: "some-id",
                ccrn: "some-ccrn",
                __typename: "Service",
              },
              __typename: "ServiceEdge",
            },
          ],
          __typename: "ServiceConnection",
        },
      },
    },
  },
]

const renderShell = () => ({
  user: userEvent.setup(),
  ...render(
    <MockedProvider mocks={mocks}>
      <Shell />
    </MockedProvider>
  ),
})

describe("Shell", () => {
  it("should render correctly", async () => {
    renderShell()
    // assert that page header is rendered
    expect(screen.getByText("Heureka")).toBeInTheDocument()
    // assert that the top navigation is rendered
    expect(screen.getByText("Services")).toBeInTheDocument()
    expect(screen.getByText("Vulnerabilities")).toBeInTheDocument()
    expect(screen.getByText("Images")).toBeInTheDocument()
    // assert that the default view 'Services' is rendered
    expect(await screen.findByText("some-ccrn")).toBeInTheDocument()
  })

  it("should allow switching to other view", async () => {
    const { user } = renderShell()
    await user.click(screen.getByText("Vulnerabilities"))
    expect(screen.getByText("render vulnerabilities here...")).toBeInTheDocument()
  })
})
