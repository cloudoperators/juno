/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render } from "@testing-library/react"
import { screen } from "shadow-dom-testing-library"
import { useCurrentTeam, useDefaultTeam, useTeamMemberships } from "../StoreProvider"
import TeamList from "./TeamList"

vi.mock("../StoreProvider", () => ({
  useCurrentTeam: vi.fn(),
  useDefaultTeam: vi.fn(),
  useTeamMemberships: vi.fn(() => [{ metadata: { name: "someTeam" }, spec: { members: [] } }]),
}))

global.IntersectionObserver = class IntersectionObserver {
  observe() {}
  disconnect() {}
}

describe("TeamList Component", () => {
  beforeEach(() => {
    useCurrentTeam.mockClear()
    useDefaultTeam.mockClear()
    useTeamMemberships.mockClear()
  })

  test("renders team members", () => {
    const mockTeamMembers = [
      {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
      },
      {
        id: 2,
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
      },
    ]

    useCurrentTeam.mockReturnValue("someTeam")
    useDefaultTeam.mockReturnValue("someTeam")
    useTeamMemberships.mockReturnValue([{ metadata: { name: "someTeam" }, spec: { members: mockTeamMembers } }])

    render(<TeamList />)

    const johnElement = screen.getByText("John")
    const janeElement = screen.getByText("Jane")

    expect(johnElement).toBeInTheDocument()
    expect(janeElement).toBeInTheDocument()
  })

  test("renders no team members message when there are no team members", () => {
    useCurrentTeam.mockReturnValue("someTeam")
    useDefaultTeam.mockReturnValue("someTeam")
    useTeamMemberships.mockReturnValue([])

    render(<TeamList />)

    const noMembersText = screen.getByText("There are no Team Members to display.")
    expect(noMembersText).toBeInTheDocument()
  })
})
