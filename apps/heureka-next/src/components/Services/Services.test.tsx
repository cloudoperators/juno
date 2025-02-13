/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import { MockedProvider } from "@apollo/client/testing"
import { Services } from "./Services"
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

describe("Services", () => {
  it("should render correctly", async () => {
    render(
      <MockedProvider mocks={mocks}>
        <Services />
      </MockedProvider>
    )
    expect(await screen.findByText("some-ccrn")).toBeInTheDocument()
  })
})
