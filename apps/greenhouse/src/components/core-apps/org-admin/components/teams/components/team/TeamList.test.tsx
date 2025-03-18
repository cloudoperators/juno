/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
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
// @ts-ignore
global.IntersectionObserver = class IntersectionObserver {
  observe() {}
  disconnect() {}
}

describe("TeamList Component", () => {
  beforeEach(() => {
    // @ts-expect-error TS(2339): Property 'mockClear' does not exist on type '() =>... Remove this comment to see the full error message
    useCurrentTeam.mockClear()
    // @ts-expect-error TS(2339): Property 'mockClear' does not exist on type '() =>... Remove this comment to see the full error message
    useDefaultTeam.mockClear()
    // @ts-expect-error TS(2339): Property 'mockClear' does not exist on type '() =>... Remove this comment to see the full error message
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

    // @ts-expect-error TS(2339): Property 'mockReturnValue' does not exist on type ... Remove this comment to see the full error message
    useCurrentTeam.mockReturnValue("someTeam")
    // @ts-expect-error TS(2339): Property 'mockReturnValue' does not exist on type ... Remove this comment to see the full error message
    useDefaultTeam.mockReturnValue("someTeam")
    // @ts-expect-error TS(2339): Property 'mockReturnValue' does not exist on type ... Remove this comment to see the full error message
    useTeamMemberships.mockReturnValue([{ metadata: { name: "someTeam" }, spec: { members: mockTeamMembers } }])

    render(<TeamList />)

    const johnElement = screen.getByText("John")
    const janeElement = screen.getByText("Jane")

    expect(johnElement).toBeInTheDocument()
    expect(janeElement).toBeInTheDocument()
  })

  test("renders no team members message when there are no team members", () => {
    // @ts-expect-error TS(2339): Property 'mockReturnValue' does not exist on type ... Remove this comment to see the full error message
    useCurrentTeam.mockReturnValue("someTeam")
    // @ts-expect-error TS(2339): Property 'mockReturnValue' does not exist on type ... Remove this comment to see the full error message
    useDefaultTeam.mockReturnValue("someTeam")
    // @ts-expect-error TS(2339): Property 'mockReturnValue' does not exist on type ... Remove this comment to see the full error message
    useTeamMemberships.mockReturnValue([])

    render(<TeamList />)

    const noMembersText = screen.getByText("There are no Team Members to display.")
    expect(noMembersText).toBeInTheDocument()
  })
})
