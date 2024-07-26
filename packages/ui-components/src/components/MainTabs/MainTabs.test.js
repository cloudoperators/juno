/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MainTabs } from "./index"
import { Tab } from "../Tab/index"
import { TabList } from "../TabList/index"
import { TabPanel } from "../TabPanel/index"

describe("MainTabs", () => {
  test("renders MainTabs", async () => {
    render(<MainTabs data-testid="main-tabs" />)
    expect(screen.getByTestId("main-tabs")).toBeInTheDocument()
    expect(screen.getByTestId("main-tabs")).toHaveClass("juno-tabs")
    expect(screen.getByTestId("main-tabs")).toHaveClass("juno-tabs-main")
  })

  test("renders all children as passed", async () => {
    render(
      <MainTabs>
        <TabList>
          <Tab label="Tab 1"></Tab>
        </TabList>
        <TabPanel></TabPanel>
      </MainTabs>
    )
    expect(screen.getByRole("tablist")).toBeInTheDocument()
    expect(screen.getByRole("tab")).toBeInTheDocument()
    expect(screen.getByRole("tabpanel")).toBeInTheDocument()
    expect(screen.getByText("Tab 1")).toBeInTheDocument()
  })

  test("renders in 'uncontrolled mode' and with first tab selected by default", async () => {
    render(
      <MainTabs data-testid="tabs">
        <TabList>
          <Tab label="Tab 1" data-testid="tab-1"></Tab>
          <Tab label="Tab 2" data-testid="tab-2"></Tab>
        </TabList>
        <TabPanel>Tab 1 content</TabPanel>
        <TabPanel>Tab 2 content</TabPanel>
      </MainTabs>
    )
    expect(screen.getByTestId("tab-1")).toHaveAttribute("aria-selected", "true")
    expect(screen.getByTestId("tab-2")).toHaveAttribute("aria-selected", "false")
    expect(screen.getByText("Tab 1 content")).toBeInTheDocument()
    expect(screen.queryByText("Tab 2 content")).not.toBeInTheDocument()
  })

  test("renders in 'uncontrolled mode' and with second tab selected by default as passed", async () => {
    render(
      <MainTabs data-testid="tabs" defaultIndex={1}>
        <TabList>
          <Tab label="Tab 1" data-testid="tab-1"></Tab>
          <Tab label="Tab 2" data-testid="tab-2"></Tab>
        </TabList>
        <TabPanel>Tab 1 content</TabPanel>
        <TabPanel>Tab 2 content</TabPanel>
      </MainTabs>
    )
    expect(screen.getByTestId("tab-1")).toHaveAttribute("aria-selected", "false")
    expect(screen.getByTestId("tab-2")).toHaveAttribute("aria-selected", "true")
    expect(screen.getByText("Tab 2 content")).toBeInTheDocument()
    expect(screen.queryByText("Tab 1 content")).not.toBeInTheDocument()
  })

  test("renders in 'controlled mode' and with second tab selected as passed", async () => {
    render(
      <MainTabs data-testid="tabs" selectedIndex={1}>
        <TabList>
          <Tab label="Tab 1" data-testid="tab-1"></Tab>
          <Tab label="Tab 2" data-testid="tab-2"></Tab>
        </TabList>
        <TabPanel>Tab 1 content</TabPanel>
        <TabPanel>Tab 2 content</TabPanel>
      </MainTabs>
    )
    expect(screen.getByTestId("tab-1")).toHaveAttribute("aria-selected", "false")
    expect(screen.getByTestId("tab-2")).toHaveAttribute("aria-selected", "true")
    expect(screen.getByText("Tab 2 content")).toBeInTheDocument()
    expect(screen.queryByText("Tab 1 content")).not.toBeInTheDocument()
  })

  // EVENTS

  test("renders in 'uncontrolled mode' and changes tabs when clicked", async () => {
    render(
      <MainTabs data-testid="tabs">
        <TabList>
          <Tab label="Tab 1" data-testid="tab-1"></Tab>
          <Tab label="Tab 2" data-testid="tab-2"></Tab>
        </TabList>
        <TabPanel>Tab 1 content</TabPanel>
        <TabPanel>Tab 2 content</TabPanel>
      </MainTabs>
    )
    expect(screen.getByTestId("tab-1")).toHaveAttribute("aria-selected", "true")
    expect(screen.getByTestId("tab-2")).toHaveAttribute("aria-selected", "false")
    expect(screen.getByText("Tab 1 content")).toBeInTheDocument()
    expect(screen.queryByText("Tab 2 content")).not.toBeInTheDocument()
    await userEvent.click(screen.getByRole("tab", { name: "Tab 2" }))
    expect(screen.getByTestId("tab-1")).toHaveAttribute("aria-selected", "false")
    expect(screen.getByTestId("tab-2")).toHaveAttribute("aria-selected", "true")
    expect(screen.getByText("Tab 2 content")).toBeInTheDocument()
    expect(screen.queryByText("Tab 1 content")).not.toBeInTheDocument()
  })

  test("renders in 'uncontrolled mode' and changes tabs using arrow keys", async () => {
    render(
      <MainTabs data-testid="tabs">
        <TabList>
          <Tab label="Tab 1" data-testid="tab-1"></Tab>
          <Tab label="Tab 2" data-testid="tab-2"></Tab>
        </TabList>
        <TabPanel>Tab 1 content</TabPanel>
        <TabPanel>Tab 2 content</TabPanel>
      </MainTabs>
    )
    expect(screen.getByTestId("tab-1")).toHaveAttribute("aria-selected", "true")
    expect(screen.getByTestId("tab-2")).toHaveAttribute("aria-selected", "false")
    expect(screen.getByText("Tab 1 content")).toBeInTheDocument()
    expect(screen.queryByText("Tab 2 content")).not.toBeInTheDocument()
    await userEvent.type(screen.getByTestId("tab-1"), "{arrowright}")
    expect(screen.getByTestId("tab-1")).toHaveAttribute("aria-selected", "false")
    expect(screen.getByTestId("tab-2")).toHaveAttribute("aria-selected", "true")
    expect(screen.queryByText("Tab 1 content")).not.toBeInTheDocument()
    expect(screen.getByText("Tab 2 content")).toBeInTheDocument()
    await userEvent.type(screen.getByTestId("tab-2"), "{arrowright}")
    expect(screen.getByTestId("tab-1")).toHaveAttribute("aria-selected", "true")
    expect(screen.getByTestId("tab-2")).toHaveAttribute("aria-selected", "false")
    expect(screen.getByText("Tab 1 content")).toBeInTheDocument()
    expect(screen.queryByText("Tab 2 content")).not.toBeInTheDocument()
  })

  test("on click on tab fires onSelect handler as passed", async () => {
    const handleSelect = jest.fn()
    render(
      <MainTabs onSelect={handleSelect}>
        <TabList>
          <Tab label="Tab 1"></Tab>
        </TabList>
        <TabPanel>Tab 1 content</TabPanel>
      </MainTabs>
    )
    await userEvent.click(screen.getByRole("tab", { name: "Tab 1" }))
    expect(handleSelect).toHaveBeenCalledTimes(1)
  })

  test("renders a custom classNames", async () => {
    render(<MainTabs data-testid="tabs" className="my-custom-class" />)
    expect(screen.getByTestId("tabs")).toBeInTheDocument()
    expect(screen.getByTestId("tabs")).toHaveClass("my-custom-class")
  })

  test("renders all other props", async () => {
    render(<MainTabs data-testid="tabs" data-lolol="13" />)
    expect(screen.getByTestId("tabs")).toBeInTheDocument()
    expect(screen.getByTestId("tabs")).toHaveAttribute("data-lolol", "13")
  })
})
