/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  AppShell,
  AppShellProvider,
  Button,
  Container,
  Message,
  SideNavigation,
  SideNavigationItem,
} from "@cloudoperators/juno-ui-components"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from "react"
import { PersesDashboardWrapper } from "./components/PersesDashboardWrapper"
import styles from "./styles.scss?inline"

export interface AppProps {
  theme?: "theme-light" | "theme-dark"
  embedded?: string | boolean
  fullWidthContent?: string | boolean
  endpoint?: string
  currentHost?: string
}

export const App = (props: AppProps) => {
  // Create query client which it can be used from overall in the app
  // set default endpoint to fetch data

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        meta: {
          endpoint: props.endpoint || props.currentHost || "",
        },
      },
    },
  })

  // Draft navigation items
  const navigationItems = [
    {
      label: "Dashboard",
      href: "/dashboard",
      active: true,
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Data Sources",
      href: "/datasources",
      beta: true,
    },
    {
      label: "Variables",
      href: "/variables",
    },
    {
      label: "Akshay",
      href: "/settings",
    },
  ]

  const sideNavigationContent = (
    <SideNavigation>
      {navigationItems.map((item, index) => (
        <SideNavigationItem key={index} label={item.label} href={item.href} active={item.active} />
      ))}
    </SideNavigation>
  )

  return (
    <QueryClientProvider client={queryClient}>
      <AppShell
        pageHeader="Greenhouse Insights"
        embedded={props.embedded === "true" || props.embedded === true}
        sideNavigation={sideNavigationContent}
      >
        <Button label="Test Button" onClick={function Xs() {}} variant="primary" />
        <Container className="" py>
          This is a test content.
        </Container>
        <Message onDismiss={function Xs() {}} text="The Perses dashboard content starts from the next line." />
        <PersesDashboardWrapper theme={props.theme} />
        {/* <PersesPluginWrapper /> */}
      </AppShell>
    </QueryClientProvider>
  )
}

type StyledAppProps = AppProps

const StyledApp = (props: StyledAppProps) => {
  return (
    <>
      <AppShellProvider shadowRoot={false}>
        <style>{styles.toString()}</style>
        <App {...props} />
      </AppShellProvider>
    </>
  )
}

export default StyledApp
