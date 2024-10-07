/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import { MessagesProvider, Messages } from "./index"

vi.mock("./useMessageStore", async () => {
  const actual = await vi.importActual("./useMessageStore")
  return {
    ...actual,
    useMessages: () => [
      {
        variant: "info",
        text: "test",
        id: "id",
        dismissible: false,
      },
    ],
  }
})

describe("Messages", () => {
  test("renders extra props", async () => {
    render(
      <MessagesProvider>
        <Messages data-testid="messages" />
      </MessagesProvider>
    )
    expect(screen.getByRole("group")).toBeInTheDocument()
    const items = await screen.findAllByRole("alert")
    expect(items).toHaveLength(1)
    // test that the props are forwarded. In this case the dismissible button
    expect(screen.queryByRole("button")).not.toBeInTheDocument()
  })
})
